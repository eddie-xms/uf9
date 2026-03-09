import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import en from './locales/en.json'
import zhCN from './locales/zh-CN.json'

export type Locale = 'en' | 'zh-CN'

const locales: Record<Locale, Record<string, unknown>> = { en, 'zh-CN': zhCN }

function resolve(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.')
  let current: unknown = obj
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined
    current = (current as Record<string, unknown>)[key]
  }
  return current
}

function getByPath(obj: Record<string, unknown>, path: string): string {
  const val = resolve(obj, path)
  return typeof val === 'string' ? val : path
}

function getArrayByPath(obj: Record<string, unknown>, path: string): string[] {
  const val = resolve(obj, path)
  return Array.isArray(val) ? val : []
}

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  tArray: (key: string) => string[]
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'uf9-lang'

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'zh-CN') return stored
  } catch {}
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }): ReactNode {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const t = useCallback((key: string): string => {
    const result = getByPath(locales[locale], key)
    if (result === key && locale !== 'en') {
      return getByPath(locales.en, key)
    }
    return result
  }, [locale])

  const tArray = useCallback((key: string): string[] => {
    const result = getArrayByPath(locales[locale], key)
    if (result.length === 0 && locale !== 'en') {
      return getArrayByPath(locales.en, key)
    }
    return result
  }, [locale])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tArray }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}
