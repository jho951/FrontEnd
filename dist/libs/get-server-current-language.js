import { headers } from 'next/headers';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants';
export async function getServerCurrentLanguage() {
    const hdrs = await headers();
    const viaMiddleware = hdrs.get('x-middleware-path');
    const referer = hdrs.get('referer');
    const rawUrl = viaMiddleware ?? referer ?? '/';
    // 3) parse out the pathname
    const pathname = new URL(rawUrl, 'http://dummy').pathname;
    // 4) pick off the first segment as lang
    const first = pathname.split('/')[1];
    if (first && SUPPORTED_LANGUAGES.includes(first)) {
        return first;
    }
    // 5) fallback
    return DEFAULT_LANGUAGE;
}
