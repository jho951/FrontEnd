import { SUPPORTED_LOCALES } from '@/constants';
export async function generateStaticParams() {
    const basePaths = [[], ['edit']];
    return SUPPORTED_LOCALES.flatMap(locale => basePaths.map(slugs => ({
        locale,
        slugs,
    })));
}
