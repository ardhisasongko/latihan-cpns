import { describe, it, expect } from "vitest";
import { parseOptions } from "./questions";

describe("parseOptions", () => {
  it("mem-parse format object {A:..,B:..}", () => {
    const raw = JSON.stringify({ A: "Satu", B: "Dua", C: "Tiga" });
    expect(parseOptions(raw)).toEqual(["Satu", "Dua", "Tiga"]);
  });

  it("mem-parse format array [\"A. ..\", \"B. ..\"]", () => {
    const raw = JSON.stringify(["A. Satu", "B. Dua"]);
    expect(parseOptions(raw)).toEqual(["A. Satu", "B. Dua"]);
  });

  it("object key diurutkan alfabetis", () => {
    const raw = JSON.stringify({ C: "tiga", A: "satu", B: "dua" });
    expect(parseOptions(raw)).toEqual(["satu", "dua", "tiga"]);
  });

  it("JSON malformed -> array kosong (tidak throw)", () => {
    expect(parseOptions("{bukan json")).toEqual([]);
    expect(parseOptions("")).toEqual([]);
  });

  it("JSON string biasa tidak dipecah per karakter", () => {
    // Regresi: Object.keys("teks") menghasilkan ['0','1','2',...]
    expect(parseOptions('"teks biasa"')).toEqual([]);
  });

  it("JSON number/boolean/null -> array kosong", () => {
    expect(parseOptions("42")).toEqual([]);
    expect(parseOptions("true")).toEqual([]);
    expect(parseOptions("null")).toEqual([]);
  });

  it("array berisi non-string difilter keluar", () => {
    const raw = JSON.stringify(["A. Valid", 42, null, { x: 1 }, "E. Valid"]);
    expect(parseOptions(raw)).toEqual(["A. Valid", "E. Valid"]);
  });

  it("object dengan value non-string difilter keluar", () => {
    const raw = JSON.stringify({ A: "Valid", B: 123, C: null });
    expect(parseOptions(raw)).toEqual(["Valid"]);
  });
});
