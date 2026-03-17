import { ShareCardData } from "./types";

function toBase64url(str: string): string {
  const b64 = typeof Buffer !== "undefined"
    ? Buffer.from(str).toString("base64")
    : btoa(unescape(encodeURIComponent(str)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64url(str: string): string {
  const b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  const padded = b64 + "=".repeat((4 - (b64.length % 4)) % 4);
  if (typeof Buffer !== "undefined") {
    return Buffer.from(padded, "base64").toString("utf-8");
  }
  return decodeURIComponent(escape(atob(padded)));
}

export function encodeCardData(data: ShareCardData): string {
  return toBase64url(JSON.stringify(data));
}

export function decodeCardData(encoded: string): ShareCardData | null {
  try {
    return JSON.parse(fromBase64url(encoded)) as ShareCardData;
  } catch {
    return null;
  }
}
