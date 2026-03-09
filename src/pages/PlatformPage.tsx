import { motion } from 'framer-motion'
import { Hero } from '@/components/sections/Hero'
import { StatsGrid } from '@/components/sections/StatsGrid'
import { GameCategories } from '@/components/sections/GameCategories'
import { DownloadApp } from '@/components/sections/DownloadApp'

export function PlatformPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <StatsGrid />
      <GameCategories />
      <DownloadApp />
    </motion.div>
  )
}
