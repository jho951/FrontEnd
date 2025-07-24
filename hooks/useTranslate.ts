import { useContext } from 'react';
import { TranslationsContext } from '@/context';

function useTranslation() {
  const context = useContext(TranslationsContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationsProvider');
  }
  return context;
}

export { useTranslation };
