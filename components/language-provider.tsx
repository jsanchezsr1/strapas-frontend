'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  defaultLanguage,
  LANGUAGE_OPTIONS,
  type Language,
} from '@/lib/i18n';

const STORAGE_KEY = 'site-language';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  languages: typeof LANGUAGE_OPTIONS;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLanguage;
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (savedLanguage && LANGUAGE_OPTIONS.some((option) => option.code === savedLanguage)) {
    return savedLanguage as Language;
  }

  return defaultLanguage;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, languages: LANGUAGE_OPTIONS }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
