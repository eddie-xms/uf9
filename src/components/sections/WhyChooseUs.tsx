import { motion } from 'framer-motion'
import {
  ArrowRight, Banknote, Cpu, BarChart3, Shield,
  Radio, UserCheck, Wallet,
  TrendingUp, Users, RefreshCw, DollarSign,
  PieChart, Database, Rocket
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { TickIcon, CrossIcon } from '@/components/icons/TickCrossIcons'
import { useTranslation } from '@/i18n'

const strengthIcons = [Banknote, Cpu, BarChart3, Shield]
const systemKeys = ['traffic', 'followup', 'payment'] as const
const systemIcons = [Radio, UserCheck, Wallet]
const systemColors = ['red', 'red', 'red'] as const
const pillarIcons = [TrendingUp, Users, RefreshCw, DollarSign, PieChart, Database, Rocket]

export function WhyChooseUs() {
  const { t, tArray } = useTranslation()

  return (
    <section id="about" className="relative py-14 md:py-20">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background-secondary/30 to-background hidden dark:block" />

      <div className="relative container-main space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cjk mb-4">
            {t('partner.heading')} <span className="text-gradient-red">{t('partner.headingHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            {t('partner.subtitle')}
          </p>
        </motion.div>

        {/* Core Strengths */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold font-cjk text-center mb-8"
          >
            {t('partner.coreStrengths.title')}
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {strengthIcons.map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border-subtle hover:border-brand-red-500/25 transition-colors"
              >
                <Icon className={cn(
                  'w-8 h-8 mb-4',
                  'text-brand-red-400'
                )} />
                <h4 className="text-foreground font-bold font-cjk mb-2">
                  {t(`partner.coreStrengths.items.${i}.title`)}
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t(`partner.coreStrengths.items.${i}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Three Systems */}
        <div className="grid lg:grid-cols-3 gap-6">
          {systemKeys.map((key, i) => {
            const Icon = systemIcons[i]
            const isRed = systemColors[i] === 'red'
            const prefix = `partner.systems.${key}`
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  'bg-card rounded-2xl p-6 border border-border-subtle relative overflow-hidden group transition-colors',
                  isRed ? 'hover:border-brand-red-500/30' : 'hover:border-brand-red-500/30'
                )}
              >
                <div className={cn(
                  'absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl hidden dark:block',
                  isRed ? 'bg-brand-red-500' : 'bg-brand-red-500'
                )} />

                <div className="flex items-center gap-3 mb-3">
                  <Icon className={cn(
                    'w-6 h-6 shrink-0',
                    'text-brand-red-400'
                  )} />
                  <h4 className="text-xl font-bold font-cjk text-foreground">
                    {t(`${prefix}.title`)}
                  </h4>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  {t(`${prefix}.desc`)}
                </p>

                <ul className="space-y-2">
                  {tArray(`${prefix}.points`).map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-foreground-secondary">
                      <div className={cn(
                        'w-1 h-1 rounded-full shrink-0',
                        isRed ? 'bg-brand-red-400' : 'bg-brand-red-400'
                      )} />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cjk mb-4">
              {t('partner.comparison.heading')} <span className="text-gradient-red">{t('partner.comparison.headingHighlight')}</span>
            </h3>
            <p className="text-muted-foreground text-xl">{t('partner.comparison.subtitle')}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Column headers */}
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 md:gap-4 mb-3">
              <div />
              <div className="text-center py-3 text-sm font-bold tracking-wide uppercase text-muted-foreground">
                {t('partner.comparison.headers.1')}
              </div>
              <div className="relative text-center py-3 text-sm font-bold tracking-wide uppercase text-brand-red-500 dark:text-brand-red-400">
                {t('partner.comparison.headers.2')}
                <div className="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-brand-red-500 dark:bg-brand-red-400 rounded-full" />
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-2.5">
              {[0, 1, 2, 3, 4, 5].map((rowIdx) => (
                <motion.div
                  key={rowIdx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * rowIdx }}
                  className="grid grid-cols-[1fr_1fr_1fr] gap-3 md:gap-4 items-stretch"
                >
                  {/* Label */}
                  <div className="flex items-center px-5 py-4 rounded-xl bg-card border border-border-subtle">
                    <span className="text-base font-bold font-cjk text-foreground">
                      {t(`partner.comparison.rows.${rowIdx}.0`)}
                    </span>
                  </div>

                  {/* Legacy */}
                  <div className="flex items-center gap-2.5 px-5 py-4 rounded-xl bg-card border border-border-subtle text-muted-foreground">
                    <CrossIcon className="w-5 h-5 shrink-0" />
                    <span className="text-base">
                      {t(`partner.comparison.rows.${rowIdx}.1`)}
                    </span>
                  </div>

                  {/* UF9 */}
                  <div className={cn(
                    'flex items-center gap-2.5 px-5 py-4 rounded-xl border text-foreground',
                    'bg-brand-red-50 border-brand-red-200 dark:bg-brand-red-500/10 dark:border-brand-red-500/25'
                  )}>
                    <TickIcon className="w-5 h-5 shrink-0" />
                    <span className="text-base font-medium">
                      {t(`partner.comparison.rows.${rowIdx}.2`)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dividend Formula */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl border border-brand-red-500/20 p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(230,0,0,0.06),transparent)] hidden dark:block" />
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold font-cjk mb-2">{t('partner.dividend.title')}</h3>
              <p className="text-base text-muted-foreground">{t('partner.dividend.subtitle')}</p>
            </div>

            {/* Formula */}
            <div className="flex items-center justify-center mb-8">
              <div className="px-6 py-4 rounded-xl bg-surface-800 border border-brand-red-500/20">
                <code className="text-foreground font-bold text-base sm:text-lg">
                  {t('partner.dividend.formula')}
                </code>
              </div>
            </div>

            {/* Details */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-surface-800/50">
                  <p className="text-base font-bold text-foreground mb-1">
                    {t(`partner.dividend.details.${i}.label`)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t(`partner.dividend.details.${i}.desc`)}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-base font-medium text-foreground">
              {t('partner.dividend.highlight')}
            </p>
          </div>
        </motion.div>

        {/* Closed-Loop Growth System */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-cjk mb-2">
              {t('partner.closedLoop.title')} <span className="text-gradient-red">{t('partner.closedLoop.titleHighlight')}</span>
            </h3>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              {t('partner.closedLoop.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pillarIcons.map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={cn(
                  'bg-card rounded-2xl p-5 border border-border-subtle hover:border-brand-red-500/25 transition-colors relative overflow-hidden',
                  i === 6 && 'sm:col-span-2 lg:col-span-1'
                )}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center shrink-0',
                    'bg-brand-red-500/15 text-brand-red-400'
                  )}>
                    <Icon size={16} />
                  </div>
                  <span className="text-sm text-faint-foreground font-mono">{String(i + 1).padStart(2, '0')}</span>
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="primary" size="lg" rounded="full" className="group">
            {t('partner.learnMore')}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
