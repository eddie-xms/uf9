import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import { EdgeArc } from '@/components/ui/EdgeArc'
import { FeatherLeft } from '@/components/icons/FeatherLeft'
import { FeatherRight } from '@/components/icons/FeatherRight'
import { useTranslation } from '@/i18n'


const innerProviders = [
  { name: 'FACHAI', src: '/provider/FACHAI.png' },
  { name: 'JDB', src: '/provider/JDB Black.png' },
]

const outerProviders = [
  { name: 'PG', src: '/provider/PG Black.png' },
  { name: 'Pragmatic', src: '/provider/Pramatic Black.png' },
  { name: 'Evolution', src: '/provider/Evolution Black.png' },
]

function ProviderIcon({ src, name }: { src: string; name: string }) {
  return (
    <div className="w-full h-full rounded-full bg-white dark:bg-white/90 border border-border-subtle shadow-lg shadow-shadow flex items-center justify-center p-1.5 overflow-hidden">
      <img src={src} alt={name} className="w-full h-full object-contain" />
    </div>
  )
}

export function Hero() {
  const { t, locale } = useTranslation()

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 min-h-screen flex items-center"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(204,0,0,0.35),transparent)] hidden dark:block" />
        <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(230,0,0,0.1),transparent)] hidden dark:block" />
        <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(204,0,0,0.08),transparent)] hidden dark:block" />
        <div className="absolute inset-0 dark:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.008)_2px,rgba(255,255,255,0.008)_4px)] hidden dark:block pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background hidden dark:block" />
      </div>

      <EdgeArc side="left" />
      <EdgeArc side="right" />

      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row gap-0 items-center max-w-4xl mx-auto">
          {/* Left — Content */}
          <div className="space-y-8 text-center lg:text-left lg:flex-7">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`${locale === 'zh-CN' ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold font-display leading-tight`}
            >
              {t('hero.title1')}
              <img src="/uf9_text_color.png" alt="UF9" className="inline-block h-[1em] align-baseline" />
              <br />
              <span className="text-foreground">{t('hero.title3')}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button variant="primary" size="lg" rounded="full" className="group" asChild>
                <a href="https://uf9asia.com/en/home" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" rounded="full" asChild>
                <a href="https://uf9asia.com/en/home" target="_blank" rel="noopener noreferrer">
                  {t('hero.ctaSecondary')}
                </a>
              </Button>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base text-faint-foreground italic"
            >
              {t('hero.tagline')}
            </motion.p>
          </div>

          {/* Right — Orbiting Circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex relative h-80 lg:h-96 lg:flex-none lg:w-80 flex-col items-center justify-center"
          >
            {/* Center Logo */}
            <div className="z-10 relative">
              <div className="absolute inset-0 rounded-full animate-pulse-ring border-2 border-brand-red-500/30" />
              <div className="w-20 h-20 rounded-full bg-card border-2 border-brand-red-500/30 shadow-[0_0_40px_rgba(230,0,0,0.2),0_0_80px_rgba(230,0,0,0.08)] flex items-center justify-center relative">
                <img src="/uf9.png" alt="UF9" className="h-12 w-auto" />
              </div>
            </div>

            {/* Inner orbit — providers */}
            <OrbitingCircles radius={100} iconSize={44} speed={0.8}>
              {innerProviders.map((p) => (
                <ProviderIcon key={p.name} src={p.src} name={p.name} />
              ))}
            </OrbitingCircles>

            {/* Outer orbit — providers */}
            <OrbitingCircles radius={180} iconSize={52} speed={0.5} reverse>
              {outerProviders.map((p) => (
                <ProviderIcon key={p.name} src={p.src} name={p.name} />
              ))}
            </OrbitingCircles>
          </motion.div>
        </div>

        {/* Verified By Badge — centered below grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center mt-12"
        >
          <div className="flex items-center gap-2 sm:gap-4">
            <FeatherLeft className="h-10 sm:h-14 w-auto text-muted-foreground/30 dark:text-muted-foreground/50" />
            <div className="flex flex-col items-center gap-0.5 sm:gap-1">
              <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest font-medium">
                {t('hero.verifiedBy')}
              </span>
              <img
                src="/bmm.png"
                alt="BMM"
                className="h-5 sm:h-6 w-auto"
              />
            </div>
            <FeatherRight className="h-10 sm:h-14 w-auto text-muted-foreground/30 dark:text-muted-foreground/50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
