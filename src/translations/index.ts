import { createI18n } from 'vue-i18n';
// @ts-ignore
import { messages, defaultLocale } from '@/translations/Messages';

export const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages,
});
