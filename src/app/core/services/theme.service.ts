import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';
import { readStorage, writeStorage } from '../utils/storage';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';
const DEFAULT_THEME: Theme = 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  /** Tema actual. Oscuro por defecto si no hay uno guardado. */
  readonly theme = signal<Theme>(this.readInitialTheme());

  constructor() {
    // Aplica el tema en <html data-theme="..."> y lo guarda.
    effect(() => {
      const theme = this.theme();
      this.document.documentElement.setAttribute('data-theme', theme);
      writeStorage(STORAGE_KEY, theme);
    });
  }

  toggle(): void {
    this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  private readInitialTheme(): Theme {
    const saved = readStorage(STORAGE_KEY);
    return saved === 'light' || saved === 'dark' ? saved : DEFAULT_THEME;
  }
}