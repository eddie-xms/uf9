import { useTranslation, type Locale } from '@/i18n'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useTranslation()

  const toggle = () => {
    setLocale(locale === 'en' ? 'zh-CN' : 'en' as Locale)
  }

  return (
    <button
      onClick={toggle}
      className={cn(
        'h-9 flex items-center gap-1.5 px-3 rounded-full text-sm font-medium transition-colors',
        'bg-foreground/6 border border-border-subtle/50',
        'text-muted-foreground hover:text-foreground cursor-pointer',
        className
      )}
    >
      <span className={cn(locale === 'en' && 'text-foreground font-bold')}>EN</span>
      <span className="text-border">|</span>
      <span className={cn(locale === 'zh-CN' && 'text-foreground font-bold')}>中文</span>
    </button>
  )
}
