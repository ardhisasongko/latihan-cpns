"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { href: "/", label: "Beranda", icon: "🏠" },
  { href: "/latihan/TWK", label: "TWK", icon: "🇮🇩" },
  { href: "/latihan/TIU", label: "TIU", icon: "🧮" },
  { href: "/latihan/TKP", label: "TKP", icon: "👤" },
  { href: "/materi", label: "Materi", icon: "📖" },
  { href: "/cari", label: "Cari Soal", icon: "🔍" },
  { href: "/bookmark", label: "Bookmark", icon: "🔖" },
  { href: "/riwayat", label: "Riwayat", icon: "📊" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Buka menu"
        className="fixed top-4 left-4 z-50 md:hidden bg-card border border-border rounded-full p-2.5 shadow-md"
      >
        <span className="text-lg">☰</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-50 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block"
            aria-label="Ke beranda"
          >
            <h1 className="text-xl font-extrabold text-primary tracking-tight hover:opacity-80 transition-opacity">
              Latihan CPNS
            </h1>
          </Link>
          <p className="text-xs text-muted-foreground mt-1">
            Persiapan SKD 2025
          </p>
        </div>

        <nav className="px-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all mb-1 ${
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 left-0 right-0 px-4">
          <button
            onClick={toggle}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-muted transition-colors"
          >
            <span>{theme === "dark" ? "☀️" : "🌙"}</span>
            <span>{theme === "dark" ? "Mode Terang" : "Mode Gelap"}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
