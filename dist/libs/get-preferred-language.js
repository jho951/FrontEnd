import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants';
export function getPreferredLanguage(request) {
    const header = request.headers.get('accept-language') ?? '';
    const langs = header.split(',').map(l => l.split(';')[0]);
    for (const lang of langs) {
        const short = lang.slice(0, 2).toLowerCase();
        if (SUPPORTED_LANGUAGES.includes(short)) {
            return short;
        }
    }
    return DEFAULT_LANGUAGE;
}
