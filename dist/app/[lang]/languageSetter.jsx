'use client';
import { useEffect } from 'react';
export default function LanguageSetter({ lang }) {
    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);
    return null;
}
