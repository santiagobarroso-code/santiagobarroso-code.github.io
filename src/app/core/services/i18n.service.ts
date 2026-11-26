import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';
import { en } from '../i18n/en';
import { Translations, es } from '../i18n/es';
import { DEFAULT_LANG, Lang, isLang } from '../i18n/lang';
import { TranslationKey } from '../i18n/translation-key';
import { Localized } from '../models/localized';
import { readStorage, writeStorage } from '../utils/storage';

const STORAGE_KEY = 'lang';
const DICTIONARIES: Record<Lang, Translations> = { es, en };

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  /** Idioma actual. Leerlo dentro de una plantilla la actualiza al cambiar. */
  readonly lang = signal<Lang>(this.detectInitialLang());

  constructor() {
    // Cada vez que cambia el idioma: actualiza <html lang> y lo guarda.
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang;
      writeStorage(STORAGE_KEY, lang);
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  /** Texto de la interfaz para una clave, en el idioma actual. */
  t(key: TranslationKey): string {
    const value = key
      .split('.')
      .reduce<unknown>(
        (node, part) => (node as Record<string, unknown> | undefined)?.[part],
        DICTIONARIES[this.lang()],
      );
    return typeof value === 'string' ? value : key;
  }

  /** Devuelve la versión en el idioma actual de un contenido bilingüe. */
  localize<T>(value: Localized<T>): T {
    return value[this.lang()];
  }

  /**
   * Orden de prioridad: idioma guardado → idioma del navegador → español.
   */
  private detectInitialLang(): Lang {
    const saved = readStorage(STORAGE_KEY);
    if (isLang(saved)) {
      return saved;
    }
    const browser = this.document.defaultView?.navigator.language ?? '';
    return browser.toLowerCase().startsWith('en') ? 'en' : DEFAULT_LANG;
  }
}