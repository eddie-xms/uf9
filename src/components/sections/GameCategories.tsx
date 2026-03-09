import { useRef, useState } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Shield, Clock, Zap } from 'lucide-react'
import { SlotsIcon, LiveCasinoIcon, SportsbookIcon, EsportsIcon, BoardGamesIcon } from '@/components/icons/GameIcons'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { useTranslation } from '@/i18n'

const gameFeatures = [
  { icon: SlotsIcon, key: 'slots', image: '/game/category/Slot.png' },
  { icon: LiveCasinoIcon, key: 'liveCasino', image: '/game/category/LiveCasino.png' },
  { icon: SportsbookIcon, key: 'sportsbook', image: '/game/category/Sport.png' },
  { icon: EsportsIcon, key: 'esports', image: '/game/category/Esports.png' },
  { icon: BoardGamesIcon, key: 'boardGames', image: '/game/category/Premium-Games.png' },
]

const CARD_WIDTH = 380
const CARD_GAP = 20

export function GameCategories() {
  const { t } = useTranslation()
  const constraintsRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const totalWidth = gameFeatures.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP

  const highlights = [
    { icon: Sparkles, label: t('games.highlights.games'), description: t('games.highlights.gamesDesc') },
    { icon: Zap, label: t('games.highlights.fast'), description: t('games.highlights.fastDesc') },
    { icon: Shield, label: t('games.highlights.secure'), description: t('games.highlights.secureDesc') },
    { icon: Clock, label: t('games.highlights.service'), description: t('games.highlights.serviceDesc') },
  ]

  function scrollTo(index: number) {
    const clamped = Math.max(0, Math.min(index, gameFeatures.length - 1))
    setActiveIndex(clamped)
    const containerWidth = constraintsRef.current?.offsetWidth ?? 0
    const maxScroll = Math.max(0, totalWidth - containerWidth)
    const target = Math.min(clamped * (CARD_WIDTH + CARD_GAP), maxScroll)
    animate(x, -target, { type: 'spring', stiffness: 300, damping: 30 })
  }

  function handleDragEnd() {
    const currentX = x.get()
    const index = Math.round(Math.abs(currentX) / (CARD_WIDTH + CARD_GAP))
    scrollTo(index)
  }

  return (
    <section id="games" className="relative py-14 md:py-20">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cjk mb-4">
            {t('games.heading')} <span className="text-gradient-red">{t('games.headingHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            {t('games.subtitle')}
          </p>
        </motion.div>

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border-subtle"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-red-500/10 flex items-center justify-center text-brand-red-400 shrink-0">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-base font-bold text-foreground">{item.label}</p>
                <p className="text-sm text-faint-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => scrollTo(activeIndex - 1)}
            className={cn(
              'absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border-subtle shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer',
              activeIndex === 0 && 'opacity-30 pointer-events-none'
            )}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollTo(activeIndex + 1)}
            className={cn(
              'absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border-subtle shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer',
              activeIndex === gameFeatures.length - 1 && 'opacity-30 pointer-events-none'
            )}
          >
            <ChevronRight size={20} />
          </button>

          {/* Carousel track */}
          <div ref={constraintsRef} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={constraintsRef}
              onDragEnd={handleDragEnd}
              className="flex cursor-grab active:cursor-grabbing"
              style={{ x, gap: CARD_GAP }}
            >
              {gameFeatures.map((game) => {
                const prefix = `games.${game.key}`
                return (
                  <motion.div
                    key={game.key}
                    className="shrink-0 select-none"
                    style={{ width: CARD_WIDTH }}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <div className="h-full rounded-2xl bg-card border border-border-subtle overflow-hidden group hover:border-brand-red-500/30 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(230,0,0,0.12)]">
                      {/* Image Zone */}
                      <div className="relative h-[220px] overflow-hidden">
                        <img
                          src={game.image}
                          alt={t(`${prefix}.title`)}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        {/* Dark vignette overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4))]" />
                        {/* Bottom gradient fade to card bg */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/30 to-transparent" />
                        {/* Top edge subtle red glow on hover */}
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red-500 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                        {/* Icon badge — bottom left */}
                        <div className="absolute bottom-3 left-4 w-9 h-9 rounded-full bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] flex items-center justify-center shadow-lg">
                          <game.icon className="w-[18px] h-[18px] text-brand-red-400" />
                        </div>

                        {/* Count pill — bottom right */}
                        <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-full bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] shadow-lg">
                          <span className="text-xs font-semibold text-foreground">
                            {t(`${prefix}.count`)} {t('games.gamesAvailable')}
                          </span>
                        </div>
                      </div>

                      {/* Content Zone */}
                      <div className="p-5 pt-2 flex flex-col flex-1">
                        <h3 className="text-xl font-bold font-cjk text-foreground mb-1">
                          {t(`${prefix}.title`)}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                          {t(`${prefix}.description`)}
                        </p>

                        {/* Compact 2-col bullets */}
                        <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
                          {[1, 2, 3, 4].map((n) => (
                            <li key={n} className="flex items-start gap-1.5 text-xs text-foreground-secondary">
                              <div className="w-1 h-1 rounded-full bg-brand-red-400 shrink-0 mt-1.5" />
                              <span className="leading-tight">{t(`${prefix}.bullet${n}`)}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <Button variant="primary" size="sm" rounded="full" className="group/btn self-start">
                          {t('games.playNow')}
                          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {gameFeatures.map((game, i) => (
              <button
                key={game.key}
                onClick={() => scrollTo(i)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300 cursor-pointer',
                  i === activeIndex
                    ? 'w-6 bg-brand-red-400'
                    : 'bg-border hover:bg-muted-foreground'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
