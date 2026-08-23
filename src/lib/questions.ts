export function parseOptions(raw: string): string[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      // Filter ke elemen string saja; data korup jangan dirender sebagian.
      return parsed.filter((o): o is string => typeof o === "string");
    }
    // Hanya object yang valid; string/number JSON-valid tidak boleh
    // dipecah per karakter via Object.keys.
    if (!parsed || typeof parsed !== "object") {
      return [];
    }
    const entries = Object.entries(parsed as Record<string, unknown>);
    // Sort berdasarkan huruf kunci (A-E); fallback urutan insert jika bukan string.
    entries.sort(([a], [b]) => a.localeCompare(b));
    return entries
      .map(([, v]) => v)
      .filter((v): v is string => typeof v === "string");
  } catch {
    return [];
  }
}
