import { SUPPORTED_LANGUAGES } from '@/constants';
export async function generateStaticParams() {
    return SUPPORTED_LANGUAGES.map(lang => ({ lang }));
}
