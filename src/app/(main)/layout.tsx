import { auth } from "@/lib/auth";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Sidebar />
        <main className="md:ml-64 min-h-screen">
          {/* Disclaimer */}
          <div className="bg-warning/10 border-b border-warning/30 px-4 py-2">
            <p className="text-xs text-muted-foreground text-center">
              <strong className="text-warning">⚠️</strong> Soal latihan ini
              berdasarkan kisi-kisi resmi Kepmenpan RB 321/2024. Bukan soal
              asli CPNS.
            </p>
          </div>

          {/* Header */}
          <header className="border-b border-border bg-card px-4 py-3 flex items-center justify-between">
            <div className="ml-12 md:ml-0" />
            <div className="flex items-center gap-4">
              {session ? (
                <>
                  <span className="text-sm text-muted-foreground hidden sm:inline">
                    {session.user.name || session.user.email}
                  </span>
                  <form action="/api/auth/signout" method="post">
                    <button
                      type="submit"
                      className="text-sm text-danger hover:underline"
                    >
                      Keluar
                    </button>
                  </form>
                </>
              ) : (
                <a
                  href="/login"
                  className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90"
                >
                  Masuk
                </a>
              )}
            </div>
          </header>

          <div className="p-4 md:p-6">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  );
}
