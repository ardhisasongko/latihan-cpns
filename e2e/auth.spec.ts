import { test, expect, type Page } from "@playwright/test";

async function registerUser(page: Page, email: string) {
  await page.goto("/register", { waitUntil: "networkidle" });
  await page.getByLabel("Nama").fill("User E2E");
  await page.getByLabel("Email").fill(email);
  await page.getByLabel("Password", { exact: true }).fill("rahasia123");
  await page.getByRole("button", { name: "Daftar" }).click();
  await expect(page).toHaveURL("/");
}

test("halaman beranda merender konten utama", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Persiapan Ujian CPNS Lebih Mudah" })
  ).toBeVisible();
  await expect(page.getByText("Pilih Kategori Latihan")).toBeVisible();
});

test("register, auto-login, dan logout", async ({ page }) => {
  const email = `e2e-${Date.now()}@test.dev`;

  await registerUser(page, email);
  await expect(page.getByText("Halo, User E2E")).toBeVisible();

  await page.getByRole("button", { name: "Keluar" }).click();
  await expect(page).toHaveURL("/login");

  await page.getByLabel("Email").fill(email);
  await page.getByLabel("Password").fill("rahasia123");
  await page.getByRole("button", { name: "Masuk" }).click();

  await expect(page).toHaveURL("/");
});

test("login menolak password salah", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Email").fill("e2e-tidak-ada@test.dev");
  await page.getByLabel("Password").fill("salah");
  await page.getByRole("button", { name: "Masuk" }).click();

  await expect(page.getByText("Email atau password salah")).toBeVisible();
});

test("pencarian soal menampilkan hasil", async ({ page }) => {
  await registerUser(page, `e2e-cari-${Date.now()}@test.dev`);

  await page.goto("/cari", { waitUntil: "networkidle" });
  await page.getByLabel("Kata kunci pencarian soal").fill("Pancasila");
  await page.getByRole("button", { name: "Cari" }).click();

  await expect(page.getByText(/soal ditemukan/)).toBeVisible();
});