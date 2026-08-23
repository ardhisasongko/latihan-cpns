import { test, expect, type Page } from "@playwright/test";

// Dev server di WSL sangat lambat saat kompilasi dingin (per-route bisa >30s,
// filesystem cache bisa >60s). Timeout besar sengaja dipakai; produksi tidak
// terpengaruh karena tidak ada kompilasi runtime.
test.describe("alur ujian end-to-end", () => {
  test.describe.configure({ timeout: 600_000 });

  // Jeda agar React selesai hydrate sebelum klik form server-action;
  // tanpa ini klik jatuh saat form masih native (submit GET biasa).
  const HYDRATION_SETTLE_MS = 4_000;

  async function gotoAndSettle(page: Page, url: string) {
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(HYDRATION_SETTLE_MS);
  }

  async function registerAndLogin(page: Page) {
    const email = `e2e-exam-${Date.now()}@test.dev`;
    await gotoAndSettle(page, "/register");
    await page.getByLabel("Nama").fill("User Exam");
    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password", { exact: true }).fill("rahasia123");
    await page.getByRole("button", { name: "Daftar" }).click();
    await page.waitForURL("http://localhost:3000/", { timeout: 120_000 });
  }

  async function openFirstTwkPackage(page: Page): Promise<string> {
    await gotoAndSettle(page, "/latihan/TWK");
    const firstPackage = page.locator('a[href^="/paket/"]').first();
    await firstPackage.waitFor({ state: "visible", timeout: 120_000 });
    const pkgHref = await firstPackage.getAttribute("href");
    // goto langsung lebih robust daripada klik (hidrasi bisa mengganggu klik)
    await gotoAndSettle(page, pkgHref!);
    return pkgHref!;
  }

  async function startBelajarMode(page: Page) {
    const btn = page.getByRole("button", { name: /Mode Belajar/ });
    await btn.waitFor({ state: "visible", timeout: 120_000 });
    await btn.click();
    await page.waitForURL(/\/kerjakan\//, { timeout: 120_000 });
    await page.waitForTimeout(HYDRATION_SETTLE_MS);
  }

  async function submitExam(page: Page) {
    const submitBtn = page.getByRole("button", { name: "Selesai & Submit" });
    await submitBtn.waitFor({ state: "visible", timeout: 120_000 });
    await submitBtn.click();

    const confirmBtn = page.getByRole("button", {
      name: /^(Ya, Submit|Mengirim\.\.\.)$/,
    });
    await confirmBtn.waitFor({ state: "visible", timeout: 120_000 });

    // Jika klik konfirmasi sempat gagal karena hidrasi, coba sekali lagi.
    try {
      await page.waitForURL(/\/hasil\//, { timeout: 180_000 });
    } catch {
      await page
        .getByRole("button", { name: "Ya, Submit" })
        .click({ timeout: 10_000 })
        .catch(() => {});
      await page.waitForURL(/\/hasil\//, { timeout: 180_000 });
    }
  }

  test("mode belajar: jawab, lihat pembahasan, bookmark, submit, hasil tampil", async ({
    page,
  }) => {
    await registerAndLogin(page);
    await openFirstTwkPackage(page);
    await startBelajarMode(page);

    // Jawab soal pertama dengan opsi A
    const optionA = page.locator('input[type="radio"][value="A"]').first();
    await optionA.waitFor({ state: "visible", timeout: 120_000 });
    await optionA.check();

    // Mode belajar menampilkan feedback benar/salah + pembahasan
    await expect(page.getByText(/Jawaban Benar!|Jawaban Salah/)).toBeVisible({
      timeout: 60_000,
    });

    // Bookmark soal ini
    await page
      .getByRole("button", { name: "Tandai bookmark soal ini" })
      .click();
    await expect(
      page.getByRole("button", { name: "Hapus bookmark soal ini" })
    ).toBeVisible({ timeout: 60_000 });

    // Ke soal terakhir via dot navigasi
    const dots = page.locator("button[aria-label^='Ke soal ']");
    const count = await dots.count();
    if (count > 1) {
      await dots.nth(count - 1).click();
      await page.waitForTimeout(HYDRATION_SETTLE_MS);
    }

    await submitExam(page);

    // Halaman hasil + pembahasan
    await expect(
      page.getByRole("heading", { name: "Hasil Ujian" })
    ).toBeVisible({ timeout: 120_000 });
    await expect(page.getByText("Pembahasan Soal")).toBeVisible({
      timeout: 120_000,
    });
  });

  test("riwayat mencatat ujian yang baru selesai", async ({ page }) => {
    await registerAndLogin(page);
    await openFirstTwkPackage(page);
    await startBelajarMode(page);

    // Langsung ke soal terakhir lalu submit tanpa menjawab
    const dots = page.locator("button[aria-label^='Ke soal ']");
    const count = await dots.count();
    if (count > 1) {
      await dots.nth(count - 1).click();
      await page.waitForTimeout(HYDRATION_SETTLE_MS);
    }

    await submitExam(page);

    // Cek riwayat
    await gotoAndSettle(page, "/riwayat");
    await expect(
      page.getByRole("heading", { name: "Riwayat Ujian" })
    ).toBeVisible({ timeout: 120_000 });
    await expect(page.getByText(/Total Ujian/)).toBeVisible({
      timeout: 120_000,
    });
  });
});
