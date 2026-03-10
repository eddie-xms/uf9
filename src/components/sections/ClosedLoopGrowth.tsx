import { motion } from 'framer-motion'
import {
  TrendingUp, Users, RefreshCw, DollarSign,
  PieChart, Database, Rocket
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/i18n'

const pillarIcons = [TrendingUp, Users, RefreshCw, DollarSign, PieChart, Database, Rocket]

export function ClosedLoopGrowth() {
  const { t } = useTranslation()

  return (
    <section className="relative py-14 md:py-20">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background-secondary/30 to-background hidden dark:block" />

      <div className="relative container-main">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-cjk mb-2">
            {t('partner.closedLoop.title')} <span className="text-gradient-red">{t('partner.closedLoop.titleHighlight')}</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {t('partner.closedLoop.subtitle')}
          </p>
        </motion.div>

        {/* Two-column layout: flywheel left, cards right */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center">
          {/* Left: Animated flywheel diagram */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="aspect-square relative">
              {/* Rotating dashed ring */}
              <svg
                className="absolute inset-[8%] w-[84%] h-[84%] animate-[spin_30s_linear_infinite]"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="4 6"
                  className="text-brand-red-500/60"
                />
              </svg>

              {/* 7 icon nodes with labels */}
              {pillarIcons.map((Icon, i) => {
                const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2
                const R = 42
                const x = 50 + R * Math.cos(angle)
                const y = 50 + R * Math.sin(angle)

                return (
                  <div
                    key={i}
                    className="absolute -ml-8 -mt-6 w-16 flex flex-col items-center gap-1 z-10 group"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-card border border-brand-red-500/20 flex items-center justify-center text-brand-red-500 shadow-[0_2px_12px_rgba(230,0,0,0.08)] group-hover:border-brand-red-500/40 group-hover:shadow-[0_2px_20px_rgba(230,0,0,0.15)] transition-all duration-300 cursor-default">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground whitespace-nowrap font-mono tracking-wide">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold font-cjk text-foreground-secondary text-center leading-tight">
                      {t(`partner.closedLoop.pillars.${i}.title`)}
                    </span>
                  </div>
                )
              })}

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 rounded-full bg-card border border-brand-red-500/15 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(230,0,0,0.06)]">
                  <span className="text-2xl font-bold text-brand-red-500 leading-none font-display">
                    {t('partner.closedLoop.centerCount')}
                  </span>
                  <span className="text-[9px] text-muted-foreground uppercase tracking-widest mt-0.5 font-bold">
                    {t('partner.closedLoop.centerLabel')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pillar cards */}
          <div className="grid sm:grid-cols-2 gap-3">
            {pillarIcons.map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={cn(
                  'bg-card rounded-2xl p-5 border border-border-subtle hover:border-brand-red-500/25 transition-colors relative overflow-hidden',
                  i === 6 && 'sm:col-span-2'
                )}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center shrink-0',
                    'bg-brand-red-500/15 text-brand-red-400'
                  )}>
                    <Icon size={16} />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="text-base font-bold font-cjk text-foreground mb-1">
                  {t(`partner.closedLoop.pillars.${i}.title`)}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`partner.closedLoop.pillars.${i}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
