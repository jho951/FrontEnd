import { SUPPORTED_LOCALES } from '@/constants';
export async function getTranslation(locale) {
    if (!SUPPORTED_LOCALES.includes(locale)) {
        console.warn(`❗ 잘못된 locale 요청됨: ${locale}`);
        return { common: {} };
    }
    try {
        const messages = await import(`@/asserts/locales/${locale}/common.json`);
        return { common: messages.default };
    }
    catch (error) {
        console.warn(`⚠️ 번역 파일을 불러올 수 없습니다: ${locale}/common.json`);
        return { common: {} };
    }
}
