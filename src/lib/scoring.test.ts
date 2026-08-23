import { describe, it, expect } from "vitest";
import {
  pointsFor,
  requiredCorrect,
  examResult,
  parseWeights,
  tkpScore,
  weightedExamResult,
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

describe("parseWeights", () => {
  it("parse JSON bobot valid, hanya kunci A-E & angka", () => {
    expect(parseWeights('{"A":5,"B":3,"C":2,"D":2,"E":1}')).toEqual({
      A: 5, B: 3, C: 2, D: 2, E: 1,
    });
    expect(parseWeights('{"A":5,"F":9,"B":"x"}')).toEqual({ A: 5 });
  });

  it("null/kosong/malformed -> object kosong (fallback biner)", () => {
    expect(parseWeights(null)).toEqual({});
    expect(parseWeights(undefined)).toEqual({});
    expect(parseWeights("")).toEqual({});
    expect(parseWeights("bukan json")).toEqual({});
    expect(parseWeights("[1,2]")).toEqual({});
  });
});

describe("tkpScore", () => {
  const weights = '{"A":5,"B":3,"C":2,"D":2,"E":1}';

  it("pilih opsi berbobot: skor = bobotnya", () => {
    expect(tkpScore(weights, "A", "A").score).toBe(5);
    expect(tkpScore(weights, "E", "A").score).toBe(1);
    expect(tkpScore(weights, "C", "A").score).toBe(2);
  });

  it("tidak menjawab -> 0", () => {
    expect(tkpScore(weights, null, "A").score).toBe(0);
  });

  it("fallback biner saat soal tanpa bobot (data lama)", () => {
    const r = tkpScore(null, "A", "A");
    expect(r.score).toBe(3);
    expect(r.hasWeights).toBe(false);
    expect(tkpScore(null, "B", "A").score).toBe(0);
  });
});

describe("weightedExamResult", () => {
  it("paket 45 soal: maksimum 225, ambang = 34x5 = 170", () => {
    const r = weightedExamResult(45, 170);
    expect(r.maxScore).toBe(225);
    expect(r.passing).toBe(170);
    expect(r.isLulus).toBe(true);
    expect(weightedExamResult(45, 169).isLulus).toBe(false);
  });

  it("persentase dari poin terkumpul", () => {
    // 112/225 = 49.78 -> 50
    expect(weightedExamResult(45, 112).percentageScore).toBe(50);
    expect(weightedExamResult(45, 225).percentageScore).toBe(100);
    expect(weightedExamResult(45, 0).percentageScore).toBe(0);
  });

  it("paket kecil tetap konsisten", () => {
    const r = weightedExamResult(10, 50);
    expect(r.maxScore).toBe(50);
    expect(r.isLulus).toBe(true); // requiredCorrect(TKP,10)=8 -> 40; 50 >= 40
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
