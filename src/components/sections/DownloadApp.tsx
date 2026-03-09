import { motion } from 'framer-motion'
import { ArrowRight, Download, QrCode } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { AppleIcon, GooglePlayIcon } from '@/components/icons/StoreIcons'
import { useTranslation } from '@/i18n'

export function DownloadApp() {
  const { t, tArray } = useTranslation()

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-brand-red-900/40 via-background-secondary to-background hidden dark:block" />
      <div className="absolute -top-1/2 -right-1/4 w-200 h-200 bg-brand-red-500/8 rounded-full blur-[150px] hidden dark:block" />
      <div className="absolute -bottom-1/4 -left-1/4 w-150 h-150 bg-brand-red-500/5 rounded-full blur-[120px] hidden dark:block" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-red-500/30 to-transparent hidden dark:block" />

      <div className="relative container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-cjk leading-tight mb-4">
              {t('download.title1')}
              <br />
              <span className="text-gradient-red">{t('download.title2')}</span>
            </h2>

            <p className="text-muted-foreground text-xl mb-8 leading-relaxed max-w-lg">
              {t('download.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="primary" size="lg" rounded="full" className="group">
                {t('download.registerFree')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="primary" size="lg" rounded="full">
                <Download size={18} />
                {t('download.downloadApp')}
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-base text-faint-foreground">
              {tArray('download.badges').map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-brand-red-400">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Phone mockup + QR */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            {/* Phone Mockup */}
            <motion.div
              animate={{ y: [-8, 0, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="w-52 h-96 rounded-[2.5rem] border-2 border-brand-red-500/20 bg-surface-800 shadow-2xl shadow-shadow-heavy overflow-hidden relative">
                <div className="absolute inset-1 rounded-[2.2rem] bg-linear-to-b from-surface-700 to-surface-900 overflow-hidden">
                  <div className="h-6 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-3 rounded-full bg-black/50" />
                  </div>
                  <div className="p-3 flex flex-col gap-2">
                    <div className="flex justify-center py-3">
                      <img src="/logo.png" alt="UF9" className="h-10 w-auto" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {tArray('download.phoneTabs').map((g) => (
                        <div
                          key={g}
                          className="h-14 rounded-lg bg-linear-to-br from-brand-red-500/20 to-brand-red-500/10 border border-brand-red-500/10 flex items-center justify-center text-sm text-gray-400 font-cjk"
                        >
                          {g}
                        </div>
                      ))}
                    </div>
                    <div className="h-10 rounded-lg bg-linear-to-r from-brand-red-500 to-brand-red-600 flex items-center justify-center text-sm text-white font-bold">
                      {t('download.playNow')}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-brand-red-500/30" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-brand-red-500/20 rounded-full blur-md" />
            </motion.div>

            {/* QR Code + Store Badges */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-xl bg-white p-2 flex items-center justify-center">
                <div className="w-full h-full bg-surface-900 rounded-lg flex items-center justify-center">
                  <QrCode size={64} className="text-brand-red-400" />
                </div>
              </div>
              <p className="text-sm text-faint-foreground text-center">
                {t('download.scanToDownload')}<br />{t('download.iosAndroid')}
              </p>

              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border cursor-pointer hover:border-brand-red-500/30 transition-colors">
                  <AppleIcon className="w-6 h-6 text-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground">{t('download.downloadOn')}</div>
                    <div className="text-sm font-semibold text-foreground">{t('download.appStore')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border cursor-pointer hover:border-brand-red-500/30 transition-colors">
                  <GooglePlayIcon className="w-6 h-6 text-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground">{t('download.getItOn')}</div>
                    <div className="text-sm font-semibold text-foreground">{t('download.googlePlay')}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-red-500/20 to-transparent hidden dark:block" />
    </section>
  )
}
