declare const __CAMP_PASSWORD_HASH__: string;

export const AUTH_KEY = "camp_auth";
export const AUTH_VALUE = "unlocked";

export function getPasswordHash(): string {
  return __CAMP_PASSWORD_HASH__;
}

export async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function isUnlocked(): boolean {
  try {
    return localStorage.getItem(AUTH_KEY) === AUTH_VALUE;
  } catch {
    return false;
  }
}

export function unlock(): void {
  localStorage.setItem(AUTH_KEY, AUTH_VALUE);
}

export function lock(): void {
  localStorage.removeItem(AUTH_KEY);
}

export async function tryUnlock(password: string): Promise<boolean> {
  const hash = await sha256Hex(password.trim());
  if (hash !== getPasswordHash()) return false;
  unlock();
  return true;
}
