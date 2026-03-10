import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, ArrowDown } from 'lucide-react'
import { useTranslation } from '@/i18n'
import { cn } from '@/lib/utils'

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`
  return n.toLocaleString()
}

export function DividendFormula() {
  const { t } = useTranslation()
  const [personalTurnover, setPersonalTurnover] = useState(10_000_000)
  const [shareholding, setShareholding] = useState(50)

  const companyTurnover = 100_000_000
  const companyNetProfit = 2_000_000
  const contributionRatio = personalTurnover / companyTurnover
  const profitShare = contributionRatio * companyNetProfit
  const dailyDividend = profitShare * (shareholding / 100)

  return (
    <section id="dividends" className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(230,0,0,0.06),transparent)] hidden dark:block" />

      <div className="relative container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cjk mb-4">
            {t('dividendFormula.heading')} <span className="text-gradient-red">{t('dividendFormula.headingHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            {t('dividendFormula.subtitle')}
          </p>
        </motion.div>

        {/* Two-column: Formula flow left, Calculator right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left: Visual Formula Pipeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-0"
          >
            {/* Step 1 */}
            <div className="relative bg-card rounded-t-2xl border border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-red-400 bg-brand-red-500/10 px-2 py-0.5 rounded-full">
                  Step 01
                </span>
                <span className="text-xs text-muted-foreground">{t('dividendFormula.ratio')}</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                <FormulaCell label={t('dividendFormula.personalTurnover')} value="10M" />
                <Operator>÷</Operator>
                <FormulaCell label={t('dividendFormula.companyTurnover')} value="100M" />
                <Operator>=</Operator>
                <FormulaCell label={t('dividendFormula.ratio')} value="10%" highlighted />
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center relative z-10">
              <div className="w-10 h-10 -my-3 rounded-full bg-card border border-border-subtle flex items-center justify-center shadow-sm">
                <ArrowDown size={16} className="text-brand-red-400" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-card border border-border-subtle border-t-0 p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-red-400 bg-brand-red-500/10 px-2 py-0.5 rounded-full">
                  Step 02
                </span>
                <span className="text-xs text-muted-foreground">{t('dividendFormula.dailyDividend')}</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                <FormulaCell label={t('dividendFormula.ratio')} value="10%" highlighted />
                <Operator>×</Operator>
                <FormulaCell label={t('dividendFormula.netProfit')} value="2M" />
                <Operator>×</Operator>
                <FormulaCell label={t('dividendFormula.shareholding')} value="50%" />
                <Operator>=</Operator>
                <FormulaCell label={t('dividendFormula.dailyDividend')} value="100,000" result />
              </div>
            </div>

            {/* Result Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={cn(
                'relative rounded-b-2xl p-6 md:p-8 text-center overflow-hidden',
                'bg-linear-to-br from-brand-red-500 to-brand-red-700',
                'shadow-[0_8px_40px_-12px_rgba(230,0,0,0.4)]'
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
              <div className="relative">
                <p className="text-white/70 text-sm font-medium mb-1">{t('dividendFormula.dailyDividend')}</p>
                <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
                  100,000
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Interactive Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl border border-border-subtle p-6 md:p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-60 h-60 bg-brand-red-500/5 rounded-full blur-3xl hidden dark:block" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-brand-red-500/15 flex items-center justify-center">
                    <Calculator size={20} className="text-brand-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-cjk text-foreground">{t('dividendFormula.calculatorTitle')}</h3>
                    <p className="text-sm text-muted-foreground">{t('dividendFormula.calculatorSubtitle')}</p>
                  </div>
                </div>

                <div className="space-y-8 mb-8">
                  {/* Personal Turnover Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-base font-medium text-foreground-secondary">
                        {t('dividendFormula.personalTurnover')}
                      </label>
                      <span className="text-lg font-bold text-foreground font-mono tabular-nums bg-background-secondary dark:bg-surface-800 px-3 py-1 rounded-lg">
                        {formatNumber(personalTurnover)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1_000_000}
                      max={50_000_000}
                      step={1_000_000}
                      value={personalTurnover}
                      onChange={(e) => setPersonalTurnover(Number(e.target.value))}
                      className={cn(
                        'w-full h-2 rounded-full appearance-none cursor-pointer',
                        'bg-background-secondary dark:bg-surface-700',
                        '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-red-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-brand-red-500/30',
                        '[&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-red-500 [&::-moz-range-thumb]:border-0'
                      )}
                    />
                  </div>

                  {/* Shareholding Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-base font-medium text-foreground-secondary">
                        {t('dividendFormula.shareholding')}
                      </label>
                      <span className="text-lg font-bold text-foreground font-mono tabular-nums bg-background-secondary dark:bg-surface-800 px-3 py-1 rounded-lg">
                        {shareholding}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={50}
                      step={5}
                      value={shareholding}
                      onChange={(e) => setShareholding(Number(e.target.value))}
                      className={cn(
                        'w-full h-2 rounded-full appearance-none cursor-pointer',
                        'bg-background-secondary dark:bg-surface-700',
                        '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-red-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-brand-red-500/30',
                        '[&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-red-500 [&::-moz-range-thumb]:border-0'
                      )}
                    />
                  </div>
                </div>

                {/* Calculator Result */}
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  <div className="text-center p-4 rounded-xl bg-background-secondary dark:bg-surface-800/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">{t('dividendFormula.yourRatio')}</p>
                    <p className="text-xl font-bold text-foreground font-mono tabular-nums">
                      {(contributionRatio * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-background-secondary dark:bg-surface-800/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">{t('dividendFormula.profitShare')}</p>
                    <p className="text-xl font-bold text-foreground font-mono tabular-nums">
                      {formatNumber(profitShare)}
                    </p>
                  </div>
                  <div className={cn(
                    'text-center p-4 rounded-xl border',
                    'bg-brand-red-50 border-brand-red-200 dark:bg-brand-red-500/10 dark:border-brand-red-500/20'
                  )}>
                    <p className="text-xs font-medium text-brand-red-600 dark:text-brand-red-400 mb-1">{t('dividendFormula.projectedDaily')}</p>
                    <p className="text-xl font-bold text-brand-red-600 dark:text-brand-red-400 font-mono tabular-nums">
                      {dailyDividend.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground space-y-1">
                  <p>{t('dividendFormula.disclaimer1')}</p>
                  <p>{t('dividendFormula.disclaimer2')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* === Sub-components === */

function FormulaCell({ label, value, highlighted, result }: {
  label: string
  value: string
  highlighted?: boolean
  result?: boolean
}) {
  return (
    <div className={cn(
      'flex flex-col items-center gap-1 px-4 py-3 rounded-xl min-w-20',
      result
        ? 'bg-brand-red-50 border-2 border-brand-red-300 dark:bg-brand-red-500/15 dark:border-brand-red-500/40'
        : highlighted
          ? 'bg-brand-red-50 border border-brand-red-200 dark:bg-brand-red-500/10 dark:border-brand-red-500/25'
          : 'bg-background-secondary border border-border-subtle dark:bg-surface-800'
    )}>
      <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">{label}</span>
      <span className={cn(
        'text-lg md:text-xl font-bold font-mono tabular-nums',
        result ? 'text-brand-red-600 dark:text-brand-red-400' : 'text-foreground'
      )}>
        {value}
      </span>
    </div>
  )
}

function Operator({ children }: { children: string }) {
  return (
    <span className="text-lg font-bold text-muted-foreground select-none">
      {children}
    </span>
  )
}
