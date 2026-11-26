import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-experience-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1 class="placeholder">{{ i18n.t('nav.experience') }}</h1>`,
  styles: `
    .placeholder {
      padding: 88px 0;
      font-size: clamp(36px, 6vw, 56px);
    }
  `,
})
export class ExperiencePage {
  protected readonly i18n = inject(I18nService);
}