export function parseOptions(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return Object.keys(parsed)
      .sort()
      .map((k) => parsed[k]);
  } catch {
    return [];
  }
}