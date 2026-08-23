import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  timeout: 30_000,
  retries: 0,
  // Serial: semua test berbagi satu SQLite lokal — parallel write saling
  // mengunci (register bisa >5s dan flaky).
  workers: 1,
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },
  webServer: {
    // Uji build produksi, bukan next dev: dev-mode Turbopack menggantung
    // server action dari file "use server" yang dipanggil client component
    // (register tak pernah resolve di dev, normal di prod).
    command: "npm run build && npm start",
    port: 3000,
    reuseExistingServer: true,
    timeout: 180_000,
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
});