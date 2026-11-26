import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  it('restores the saved language', () => {
    localStorage.setItem('lang', 'en');
    const service = TestBed.inject(I18nService);
    expect(service.lang()).toBe('en');
  });

  it('translates keys in the current language', () => {
    localStorage.setItem('lang', 'es');
    const service = TestBed.inject(I18nService);
    expect(service.t('nav.about')).toBe('Sobre mí');

    service.setLang('en');
    expect(service.t('nav.about')).toBe('About');
  });

  it('updates <html lang> and saves the language', () => {
    localStorage.setItem('lang', 'es');
    const service = TestBed.inject(I18nService);
    service.setLang('en');
    TestBed.tick();
    expect(document.documentElement.lang).toBe('en');
    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('localizes bilingual content', () => {
    localStorage.setItem('lang', 'en');
    const service = TestBed.inject(I18nService);
    expect(service.localize({ es: 'Hola', en: 'Hello' })).toBe('Hello');
  });
});