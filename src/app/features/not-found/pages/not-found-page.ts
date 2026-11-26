import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="placeholder">
      <h1>404 · {{ i18n.t('notFound.title') }}</h1>
      <a routerLink="/">{{ i18n.t('notFound.back') }}</a>
    </section>
  `,
  styles: `
    .placeholder {
      padding: 88px 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
      font-size: 18px;
    }
    h1 {
      font-size: clamp(36px, 6vw, 56px);
    }
  `,
})
export class NotFoundPage {
  protected readonly i18n = inject(I18nService);
}