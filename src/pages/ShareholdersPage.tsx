import { motion } from 'framer-motion'
import { ShareholderHero } from '@/components/sections/ShareholderHero'
import { ProfitSharingModel } from '@/components/sections/ProfitSharingModel'
import { DividendFormula } from '@/components/sections/DividendFormula'
import { GrowthEcosystem } from '@/components/sections/GrowthEcosystem'
import { RetentionSystem } from '@/components/sections/RetentionSystem'
import { GlobalPayment } from '@/components/sections/GlobalPayment'
import { ClosedLoopGrowth } from '@/components/sections/ClosedLoopGrowth'
import { ShareholderCTA } from '@/components/sections/ShareholderCTA'
import { EdgeArc } from '@/components/ui/EdgeArc'

export function ShareholdersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-x-clip">
        <EdgeArc side="left" />
        <EdgeArc side="right" />
        <ShareholderHero />
      </div>
      <div className="relative overflow-hidden">
        <ProfitSharingModel />
      </div>
      <div className="relative overflow-hidden">
        <DividendFormula />
      </div>
      <div className="relative overflow-hidden">
        <GrowthEcosystem />
      </div>
      <div className="relative overflow-hidden">
        <RetentionSystem />
      </div>
      <div className="relative overflow-hidden">
        <GlobalPayment />
      </div>
      <div className="relative overflow-hidden">
        <ClosedLoopGrowth />
      </div>
      <div className="relative overflow-hidden">
        <ShareholderCTA />
      </div>
    </motion.div>
  )
}
