import { describe, it, expect } from "vitest";
import {
  pointsFor,
  requiredCorrect,
  examResult,
  passingGrades,
  maxScores,
} from "./scoring";

describe("pointsFor", () => {
  it("mengembalikan poin per kategori resmi", () => {
    expect(pointsFor("TWK")).toBe(5);
    expect(pointsFor("TIU")).toBe(5);
    expect(pointsFor("TKP")).toBe(3);
  });

  it("fallback 5 untuk kategori tidak dikenal", () => {
    expect(pointsFor("XYZ")).toBe(5);
  });
});

describe("requiredCorrect", () => {
  it("ukuran paket asli: TWK 13/30, TIU 16/35, TKP 34/45", () => {
    expect(requiredCorrect("TWK", 30)).toBe(13);
    expect(requiredCorrect("TIU", 35)).toBe(16);
    expect(requiredCorrect("TKP", 45)).toBe(34);
  });

  it("paket kecil dibulatkan ke atas (ceil)", () => {
    // 65/150 * 10 = 4.33 -> 5
    expect(requiredCorrect("TWK", 10)).toBe(5);
  });

  it("minimal 1 benar meski paket sangat kecil", () => {
    expect(requiredCorrect("TWK", 1)).toBeGreaterThanOrEqual(1);
    expect(requiredCorrect("TWK", 2)).toBeGreaterThanOrEqual(1);
  });

  it("kategori tidak dikenal: passing 0/100 -> tetap minimal 1", () => {
    expect(requiredCorrect("XYZ", 10)).toBe(1);
  });
});

describe("examResult", () => {
  it("TWK: tepat di ambang = LULUS", () => {
    const r = examResult("TWK", 30, 13);
    expect(r.rawScore).toBe(65);
    expect(r.maxScore).toBe(150);
    expect(r.passing).toBe(65);
    expect(r.isLulus).toBe(true);
  });

  it("TWK: satu di bawah ambang = TIDAK LULUS", () => {
    const r = examResult("TWK", 30, 12);
    expect(r.isLulus).toBe(false);
  });

  it("TKP: 34 benar dari 45 = LULUS (skala 3 poin)", () => {
    const r = examResult("TKP", 45, 34);
    expect(r.rawScore).toBe(102);
    expect(r.maxScore).toBe(135);
    expect(r.passing).toBe(102);
    expect(r.isLulus).toBe(true);
  });

  it("percentageScore dibulatkan benar", () => {
    // 13/30 = 43.33% -> 43
    expect(examResult("TWK", 30, 13).percentageScore).toBe(43);
    // 30/30 -> 100
    expect(examResult("TWK", 30, 30).percentageScore).toBe(100);
    // 0/30 -> 0
    expect(examResult("TWK", 30, 0).percentageScore).toBe(0);
  });

  it("totalCorrect melebihi total soal: persentase bisa >100 (perilaku saat ini)", () => {
    // Catatan: tidak di-clamp karena input dari client dibatasi jumlah soal.
    expect(examResult("TWK", 30, 35).percentageScore).toBe(117);
  });
});

describe("konsistensi konstanta SKD resmi", () => {
  it("ambang kelulusan sesuai Kepmenpan RB", () => {
    expect(passingGrades).toEqual({ TWK: 65, TIU: 80, TKP: 166 });
  });

  it("skor maksimal sesuai ujian asli", () => {
    expect(maxScores).toEqual({ TWK: 150, TIU: 175, TKP: 225 });
  });
});
