import { PrismaClient } from "@/generated/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// PrismaLibSql diimpor dinamis: @libsql/client di-external-kan OpenNext
// sehingga tidak boleh ada di module-load path worker (runtime error).
async function getLibSqlPrisma(): Promise<PrismaClient> {
  const { PrismaLibSql } = await import("@prisma/adapter-libsql");
  return new PrismaClient({
    adapter: new PrismaLibSql({
      url: process.env.DATABASE_URL ?? "file:./dev.db",
    }),
  });
}

async function getPrisma(): Promise<PrismaClient> {
  if (!globalForPrisma.prisma) {
    try {
      const { env } = getCloudflareContext();
      const d1 = (env as unknown as Record<string, unknown>).DB;
      // D1 tersedia (Cloudflare) -> pakai D1; selain itu (next dev) -> SQLite lokal
      globalForPrisma.prisma = d1
        ? new PrismaClient({ adapter: new PrismaD1(d1 as never) })
        : await getLibSqlPrisma();
    } catch {
      globalForPrisma.prisma = await getLibSqlPrisma();
    }
  }
  return globalForPrisma.prisma;
}

const MODELS = new Set([
  "user",
  "question",
  "package",
  "packageQuestion",
  "exam",
  "examAnswer",
  "bookmark",
]);
const MODEL_METHODS = new Set([
  "findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow",
  "findMany", "count", "aggregate", "groupBy",
  "create", "createMany", "upsert",
  "update", "updateMany", "delete", "deleteMany",
]);

// Lazy proxy dua tingkat: client dibuat pada pemakaian pertama (di dalam request
// context, karena module-level init di Cloudflare berada di luar request).
// - db.<model>.<method>(...) -> delegate model (method async)
// - db.$<clientMethod>(...)   -> method client (mis. $transaction)
export const db = new Proxy({} as PrismaClient, {
  get: (_target, prop) => {
    const key = prop as string;
    if (MODELS.has(key)) {
      return new Proxy(
        {},
        {
          get: (_delegate, method) => {
            if (typeof method !== "string" || !MODEL_METHODS.has(method)) {
              return undefined;
            }
            return async (...args: unknown[]) => {
              const client = await getPrisma();
              const model = (
                client as unknown as Record<
                  string,
                  Record<string, (...a: unknown[]) => unknown>
                >
              )[key];
              return model[method](...args);
            };
          },
        }
      );
    }
    if (key.startsWith("$")) {
      return async (...args: unknown[]) => {
        const client = await getPrisma();
        return (
          client as unknown as Record<string, (...a: unknown[]) => unknown>
        )[key](...args);
      };
    }
    return undefined;
  },
});