import { en } from '../asserts/locales/en';
import { ko } from '../asserts/locales/ko';
const lookup = { en, ko };
export function getTranslation(locale) {
    const messages = lookup[locale] ?? lookup['en'];
    return { common: messages };
}
