import { motion } from 'framer-motion'
import { useTranslation } from '@/i18n'
import { cn } from '@/lib/utils'
import { TickIcon, CrossIcon } from '@/components/icons/TickCrossIcons'

const legacyKeys = ['commission', 'fixedRatio', 'noProfit', 'incomeCap'] as const
const uf9Keys = ['profitSharing', 'contributionDividend', 'netProfit', 'growthExpansion'] as const

export function ProfitSharingModel() {
  const { t } = useTranslation()

  return (
    <section id="profit-model" className="relative py-14 md:py-20">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background-secondary/30 to-background hidden dark:block" />

      <div className="relative container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cjk mb-4">
            {t('profitModel.heading')} <span className="text-gradient-red">{t('profitModel.headingHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            {t('profitModel.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Legacy Platform Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border-subtle relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red-500/5 rounded-full blur-3xl hidden dark:block" />
            <div className="relative">
              <h3 className="text-2xl font-bold font-cjk mb-6 text-foreground-secondary">
                {t('profitModel.legacyTitle')}
              </h3>
              <ul className="space-y-4">
                {legacyKeys.map((key, i) => (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CrossIcon className="mt-0.5 w-5 h-5 shrink-0" />
                    <div>
                      <p className="text-base font-medium text-foreground-secondary">{t(`profitModel.legacy.${key}.title`)}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{t(`profitModel.legacy.${key}.desc`)}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* UF9 Shareholder Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
              'bg-card rounded-2xl p-8 border border-brand-red-500/30 relative overflow-hidden',
              'shadow-[0_0_60px_-15px_rgba(230,0,0,0.15)]'
            )}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red-500/8 rounded-full blur-3xl hidden dark:block" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(230,0,0,0.04),transparent)] hidden dark:block" />
            <div className="relative">
              <h3 className="text-2xl font-bold font-cjk mb-6 text-foreground">
                {t('profitModel.uf9Title')}
              </h3>
              <ul className="space-y-4">
                {uf9Keys.map((key, i) => (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <TickIcon className="mt-0.5 w-5 h-5 shrink-0" />
                    <div>
                      <p className="text-base font-medium text-foreground">{t(`profitModel.uf9.${key}.title`)}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{t(`profitModel.uf9.${key}.desc`)}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cjk mb-4">
              {t('partner.comparison.heading')} <span className="text-gradient-red">{t('partner.comparison.headingHighlight')}</span>
            </h3>
            <p className="text-muted-foreground text-xl">{t('partner.comparison.subtitle')}</p>
          </div>

          <div>
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
      </div>
    </section>
  )
}
