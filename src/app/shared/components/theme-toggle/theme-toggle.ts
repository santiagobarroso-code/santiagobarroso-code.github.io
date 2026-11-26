import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../../core/services/i18n.service';
import { ThemeService } from '../../../core/services/theme.service';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-theme-toggle',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  private readonly themeService = inject(ThemeService);
  protected readonly i18n = inject(I18nService);

  protected readonly isDark = computed(() => this.themeService.theme() === 'dark');

  protected readonly label = computed(() =>
    this.i18n.t(this.isDark() ? 'a11y.switchToLight' : 'a11y.switchToDark'),
  );

  protected toggle(): void {
    this.themeService.toggle();
  }
}