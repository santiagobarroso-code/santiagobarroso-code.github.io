import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    TestBed.resetTestingModule();
  });

  it('uses dark theme by default', () => {
    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('dark');
  });

  it('restores the saved theme', () => {
    localStorage.setItem('theme', 'light');
    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('light');
  });

  it('toggles the theme and applies it to <html>', () => {
    const service = TestBed.inject(ThemeService);
    service.toggle();
    TestBed.tick();
    expect(service.theme()).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});