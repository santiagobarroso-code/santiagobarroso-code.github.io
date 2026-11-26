import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Lang, SUPPORTED_LANGS } from '../../../core/i18n/lang';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-lang-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './lang-toggle.html',
  styleUrl: './lang-toggle.scss',
})
export class LangToggle {
  protected readonly i18n = inject(I18nService);
  protected readonly langs = SUPPORTED_LANGS;

  protected select(lang: Lang): void {
    this.i18n.setLang(lang);
  }
}