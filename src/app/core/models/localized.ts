import { Lang } from '../i18n/lang';

export type Localized<T = string> = Record<Lang, T>;