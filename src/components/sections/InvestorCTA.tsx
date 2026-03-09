import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Eye } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useTranslation } from '@/i18n'

const trustBadges = [Shield, Clock, Eye]

export function InvestorCTA() {
  const { t } = useTranslation()

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(230,0,0,0.08),transparent)] hidden dark:block" />

      <div className="relative container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cjk mb-4">
            {t('investorCTA.heading')} <span className="text-gradient-red">{t('investorCTA.headingHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-xl mb-8">
            {t('investorCTA.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button variant="primary" size="lg" rounded="full" className="group">
              {t('investorCTA.ctaPrimary')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" rounded="full">
              {t('investorCTA.ctaSecondary')}
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-2 text-base text-muted-foreground"
              >
                <Icon size={16} className="text-brand-red-400" />
                {t(`investorCTA.badges.${i}`)}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
