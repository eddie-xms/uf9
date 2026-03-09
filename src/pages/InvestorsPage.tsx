import { motion } from 'framer-motion'
import { InvestorHero } from '@/components/sections/InvestorHero'
import { ProfitSharingModel } from '@/components/sections/ProfitSharingModel'
import { DividendFormula } from '@/components/sections/DividendFormula'
import { GrowthEcosystem } from '@/components/sections/GrowthEcosystem'
import { RetentionSystem } from '@/components/sections/RetentionSystem'
import { GlobalPayment } from '@/components/sections/GlobalPayment'
import { ClosedLoopGrowth } from '@/components/sections/ClosedLoopGrowth'
import { InvestorCTA } from '@/components/sections/InvestorCTA'

function EdgeArc({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left'
  return (
    <img
      src={isLeft ? '/icon/left.svg' : '/icon/right.svg'}
      alt=""
      className={`absolute top-1/2 -translate-y-1/2 h-[80%] w-auto opacity-15 dark:opacity-30 pointer-events-none hidden lg:block ${
        isLeft ? 'left-0' : 'right-0'
      }`}
    />
  )
}

export function InvestorsPage() {
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
        <InvestorHero />
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
        <InvestorCTA />
      </div>
    </motion.div>
  )
}
