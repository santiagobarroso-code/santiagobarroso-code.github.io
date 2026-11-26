export type Lang = 'es' | 'en';

export const SUPPORTED_LANGS: readonly Lang[] = ['es', 'en'];
export const DEFAULT_LANG: Lang = 'es';

export function isLang(value: unknown): value is Lang {
  return value === 'es' || value === 'en';
}