import { PrismaClient } from "@/generated/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function getPrisma(): PrismaClient {
  if (!globalForPrisma.prisma) {
    try {
      const { env } = getCloudflareContext();
      globalForPrisma.prisma = new PrismaClient({
        adapter: new PrismaD1((env as unknown as Record<string, unknown>).DB as never),
      });
    } catch (e) {
      globalForPrisma.prisma = new PrismaClient();
    }
  }
  return globalForPrisma.prisma;
}

// Lazy proxy: client dibuat pada pemakaian pertama (di dalam request context),
// karena module-level init di Cloudflare berada di luar request -> context tak tersedia.
export const db = new Proxy({} as PrismaClient, {
  get: (_target, prop) =>
    (getPrisma() as unknown as Record<string, unknown>)[prop as string],
});