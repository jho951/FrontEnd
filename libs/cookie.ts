export function setLanguageCookie(locale: string) {
  const encoded = encodeURIComponent(locale);
  document.cookie = `lang=${encoded}; path=/; max-age=2592000; SameSite=Lax`;
}

export function getLanguageCookie(): string | null {
  return (
    document.cookie
      .split('; ')
      .find(row => row.startsWith('lang='))
      ?.split('=')[1] ?? null
  );
}
