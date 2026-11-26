import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationKey } from '../../../core/i18n/translation-key';
import { I18nService } from '../../../core/services/i18n.service';
import { Icon } from '../icon/icon';
import { LangToggle } from '../lang-toggle/lang-toggle';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

interface NavLink {
  path: string;
  label: TranslationKey;
  exact: boolean;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, Icon, LangToggle, ThemeToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    role: 'banner',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Navbar {
  protected readonly i18n = inject(I18nService);

  protected readonly links: readonly NavLink[] = [
    { path: '/', label: 'nav.home', exact: true },
    { path: '/projects', label: 'nav.projects', exact: false },
    { path: '/about', label: 'nav.about', exact: true },
    { path: '/experience', label: 'nav.experience', exact: true },
    { path: '/contact', label: 'nav.contact', exact: true },
  ];

  protected readonly menuOpen = signal(false);

  protected readonly menuLabel = computed(() =>
    this.i18n.t(this.menuOpen() ? 'a11y.closeMenu' : 'a11y.openMenu'),
  );

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}