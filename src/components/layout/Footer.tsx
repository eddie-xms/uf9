import { useTranslation } from '@/i18n'

export function Footer() {
  const { t, tArray } = useTranslation()

  const sections = [
    { titleKey: 'footer.quickLinks', itemsKey: 'footer.quickLinksItems' },
    { titleKey: 'footer.gamesTitle', itemsKey: 'footer.gamesItems' },
    { titleKey: 'footer.support', itemsKey: 'footer.supportItems' },
    { titleKey: 'footer.contactUs', itemsKey: 'footer.contactItems' },
  ]

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="h-px bg-linear-to-r from-transparent via-brand-red-500/30 to-transparent" />

      <div className="container-main">
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img src="/logo.png" alt="UF9" className="h-12 w-auto mb-4" />
            <p className="text-faint-foreground text-base leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-faint-foreground text-sm">
              <span className="font-bold text-muted-foreground">{t('footer.age')}</span>
              <span>{t('footer.responsible')}</span>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.titleKey}>
              <h4 className="text-base font-bold text-foreground mb-4 font-cjk">
                {t(section.titleKey)}
              </h4>
              <ul className="space-y-2">
                {tArray(section.itemsKey).map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base text-faint-foreground hover:text-brand-red-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-faint-foreground text-base">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4 text-faint-foreground text-sm">
            <span>{t('footer.licensed')}</span>
            <span>·</span>
            <span>{t('footer.ssl')}</span>
            <span>·</span>
            <span>{t('footer.fairPlay')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
