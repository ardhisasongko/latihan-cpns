import { describe, expect, it, vi } from "vitest";
import { rateLimit } from "./rateLimit";

function makeRequest(ip: string): Request {
  return new Request("http://localhost/api/search", {
    headers: { "x-forwarded-for": ip },
  });
}

describe("rateLimit", () => {
  it("allows requests under the limit", async () => {
    for (let i = 0; i < 20; i++) {
      await expect(rateLimit(makeRequest("1.1.1.1"))).resolves.toBeUndefined();
    }
  });

  it("rejects when the limit is exceeded", async () => {
    for (let i = 0; i < 20; i++) {
      await rateLimit(makeRequest("2.2.2.2"));
    }
    await expect(rateLimit(makeRequest("2.2.2.2"))).rejects.toThrow(
      "Rate limit exceeded"
    );
  });

  it("tracks limits per IP separately", async () => {
    for (let i = 0; i < 20; i++) {
      await rateLimit(makeRequest("3.3.3.3"));
    }
    await expect(rateLimit(makeRequest("4.4.4.4"))).resolves.toBeUndefined();
  });

  it("resets the window after expiry", async () => {
    vi.useFakeTimers();
    for (let i = 0; i < 20; i++) {
      await rateLimit(makeRequest("5.5.5.5"));
    }
    await expect(rateLimit(makeRequest("5.5.5.5"))).rejects.toThrow(
      "Rate limit exceeded"
    );
    vi.advanceTimersByTime(60 * 1000);
    await expect(rateLimit(makeRequest("5.5.5.5"))).resolves.toBeUndefined();
    vi.useRealTimers();
  });
});