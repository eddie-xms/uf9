import { motion } from 'framer-motion'
import { ArrowRight, Download, QrCode, Smartphone, Shield, Zap, Headphones, Lock } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { AppleIcon, GooglePlayIcon } from '@/components/icons/StoreIcons'
import { useTranslation } from '@/i18n'

const badgeIcons = [Smartphone, Zap, Headphones, Lock]

export function DownloadApp() {
  const { t, tArray } = useTranslation()
  const badges = tArray('download.badges')

  return (
    <section id="download" className="relative py-20 md:py-28 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-brand-red-50/40 dark:to-brand-red-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(230,0,0,0.08),transparent)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(230,0,0,0.15),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="relative container-main">
        {/* Header — centered */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-cjk leading-tight mb-5">
              {t('download.title1')}
              <span className="text-gradient-red"> {t('download.title2')}</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              {t('download.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Main showcase — phone center, flanked by info */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-center">

          {/* Left column — CTAs + badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end gap-8 order-2 lg:order-1"
          >
            {/* CTA buttons stacked */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <Button variant="primary" size="lg" rounded="full" className="group w-full justify-center" asChild>
                <a href="https://uf9asia.com/en/home" target="_blank" rel="noopener noreferrer">
                  {t('download.registerFree')}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" rounded="full" className="w-full justify-center" asChild>
                <a href="https://uf9asia.com/en/home" target="_blank" rel="noopener noreferrer">
                  <Download size={18} />
                  {t('download.downloadApp')}
                </a>
              </Button>
            </div>

            {/* Feature badges — 2×2 grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {badges.map((item, i) => {
                const Icon = badgeIcons[i] || Shield
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-card border border-border/60 hover:border-brand-red-500/20 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-red-500/10 dark:bg-brand-red-500/15 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-brand-red-500" />
                    </div>
                    <span className="text-sm font-medium text-foreground leading-tight">{item}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Center — Phone hero */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center order-1 lg:order-2 lg:mx-8"
          >
            {/* Glow ring behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 rounded-full bg-[radial-gradient(circle,rgba(230,0,0,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(230,0,0,0.2)_0%,transparent_70%)] blur-xl" />

            {/* Phone container with perspective */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              {/* Phone frame */}
              <div className="w-56 md:w-60 h-[440px] md:h-[480px] rounded-[2.8rem] bg-gradient-to-b from-zinc-800 to-zinc-900 dark:from-zinc-700 dark:to-zinc-900 p-[3px] shadow-[0_25px_80px_rgba(0,0,0,0.25),0_0_40px_rgba(230,0,0,0.1)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(230,0,0,0.15)]">
                <div className="w-full h-full rounded-[2.6rem] overflow-hidden relative bg-black">
                  <img src="/mobile.png" alt="UF9 App" className="w-full h-full object-cover" />
                  {/* Screen shine */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 animate-screen-reflect bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-24 h-6 rounded-b-2xl bg-black z-20" />

              {/* Bottom glow reflection */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-12 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(230,0,0,0.12),transparent)] blur-md" />
            </motion.div>
          </motion.div>

          {/* Right column — QR + Store badges */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center lg:items-start gap-6 order-3"
          >
            {/* QR Code card */}
            <div className="w-full max-w-xs rounded-2xl border border-border/60 bg-card p-5 hover:border-brand-red-500/20 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 rounded-xl bg-white p-2 shrink-0 shadow-sm">
                  <div className="w-full h-full bg-zinc-100 dark:bg-zinc-200 rounded-lg flex items-center justify-center">
                    <QrCode size={48} className="text-brand-red-600" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{t('download.scanToDownload')}</p>
                  <p className="text-sm text-muted-foreground">{t('download.iosAndroid')}</p>
                </div>
              </div>

              {/* Store buttons */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://uf9asia.com/en/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/8 border border-border/40 hover:border-brand-red-500/20 transition-all group"
                >
                  <AppleIcon className="w-5 h-5 text-foreground" />
                  <div className="leading-none">
                    <div className="text-[10px] text-muted-foreground mb-0.5">{t('download.downloadOn')}</div>
                    <div className="text-sm font-semibold text-foreground">{t('download.appStore')}</div>
                  </div>
                </a>
                <a
                  href="https://uf9asia.com/en/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/8 border border-border/40 hover:border-brand-red-500/20 transition-all group"
                >
                  <GooglePlayIcon className="w-5 h-5 text-foreground" />
                  <div className="leading-none">
                    <div className="text-[10px] text-muted-foreground mb-0.5">{t('download.getItOn')}</div>
                    <div className="text-sm font-semibold text-foreground">{t('download.googlePlay')}</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-red-500/20 to-transparent" />
    </section>
  )
}
