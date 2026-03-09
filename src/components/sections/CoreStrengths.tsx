import { motion } from 'framer-motion'
import { Banknote, Cpu, BarChart3, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/i18n'

const strengthIcons = [Banknote, Cpu, BarChart3, Shield]

export function CoreStrengths() {
  const { t } = useTranslation()

  return (
    <section className="relative py-14 md:py-20">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background-secondary/30 to-background hidden dark:block" />

      <div className="relative container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-cjk mb-4">
            {t('partner.coreStrengths.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t('coreStrengths.subtitle')}
          </p>
        </motion.div>

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
                i % 2 === 0 ? 'text-brand-red-400' : 'text-brand-red-400'
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
    </section>
  )
}
