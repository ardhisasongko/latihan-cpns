"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { z } from "zod";
import { signOut } from "@/lib/auth";
import { rateLimitAuth, getClientKey } from "@/lib/rateLimit";
import { db } from "@/lib/db";

const registerSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export async function register(data: { name: string; email: string; password: string }) {
  const validated = registerSchema.safeParse(data);
  if (!validated.success) {
    return { error: validated.error.issues[0].message };
  }

  const { name, email, password } = validated.data;
  const normalizedEmail = email.toLowerCase().trim();

  // Anti abuse: max 5 registrasi per IP per 5 menit.
  try {
    const hdrs = await headers();
    const fakeReq = new Request("http://local", { headers: hdrs });
    await rateLimitAuth(`register:${getClientKey(fakeReq)}`);
  } catch {
    return { error: "Terlalu banyak permintaan. Coba lagi nanti." };
  }

  const existingUser = await db.user.findUnique({ where: { email: normalizedEmail } });
  if (existingUser) {
    return { error: "Email sudah terdaftar" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: { name, email: normalizedEmail, password: hashedPassword },
  });

  return { success: "Registrasi berhasil" };
}

export async function logout() {
  await signOut({ redirect: false });
  redirect("/login");
}
