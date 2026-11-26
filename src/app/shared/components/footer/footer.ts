import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  host: { role: 'contentinfo' },
})
export class Footer {
  protected readonly i18n = inject(I18nService);
  protected readonly year = new Date().getFullYear();
}