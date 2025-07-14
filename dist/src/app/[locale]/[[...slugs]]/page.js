import { jsx as _jsx } from "react/jsx-runtime";
import { notFound } from 'next/navigation';
import { SUPPORTED_LOCALES } from '@/constants';
import HomePage from '@/features/home/HomePage';
import EditPage from '@/features/edit/EditPage';
function isLocale(value) {
    return SUPPORTED_LOCALES.includes(value);
}
export default async function Page({ params }) {
    const { locale: rawLocale, slugs = [] } = params;
    if (!isLocale(rawLocale)) {
        if (!rawLocale.endsWith('.png')) {
            console.warn(`❗ 잘못된 locale 요청됨: ${rawLocale}`);
        }
        notFound();
    }
    const locale = rawLocale;
    if (slugs.length === 0) {
        return _jsx(HomePage, { locale: locale });
    }
    if (slugs[0] === 'edit') {
        return _jsx(EditPage, { locale: locale });
    }
    return _jsx("div", { children: "404 Not Found" });
}
