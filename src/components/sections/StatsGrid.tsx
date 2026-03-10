import { motion, animate, useMotionValue, useTransform, useInView } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { useEffect, useRef } from 'react'
import {
  VisaIcon,
  MastercardIcon,
  BitcoinIcon,
  UsdtIcon,
  DuitNowIcon,
} from '@/components/icons/PaymentIcons'
import { useTranslation } from '@/i18n'

const providers = [
  { name: 'Evolution', src: '/provider/Evolution White.png' },
  { name: 'JDB', src: '/provider/JDB White.png' },
  { name: 'PG', src: '/provider/PG White.png' },
  { name: 'Pragmatic', src: '/provider/Pramatic White.png' },
  { name: 'FACHAI', src: '/provider/FACHAI.png' },
]

const gameImages = [
  '/game/games 1.png',
  '/game/game 2.png',
  '/game/game 3.png',
  '/game/game 4.png',
  '/game/game 5.png',
]

function AnimatedSparkles() {
  const randomMove = () => Math.random() * 2 - 1
  const randomOpacity = () => Math.random()
  const random = () => Math.random()

  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            zIndex: 1,
          }}
          className="inline-block bg-brand-red-400"
        />
      ))}
    </div>
  )
}

function IconContainer({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`rounded-full flex items-center justify-center bg-glass-bg shadow-[0px_0px_8px_0px_rgba(230,0,0,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] ${className}`}
    >
      {children}
    </div>
  )
}

function CenterCardSkeleton() {
  const scale = [1, 1.1, 1]
  const transform = ['translateY(0px)', 'translateY(-4px)', 'translateY(0px)']

  useEffect(() => {
    const sequence: Parameters<typeof animate>[0] = [
      ['.sparkle-1', { scale, transform }, { duration: 0.8 }],
      ['.sparkle-2', { scale, transform }, { duration: 0.8 }],
      ['.sparkle-3', { scale, transform }, { duration: 0.8 }],
      ['.sparkle-4', { scale, transform }, { duration: 0.8 }],
      ['.sparkle-5', { scale, transform }, { duration: 0.8 }],
    ]

    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    } as Parameters<typeof animate>[1])
  }, [])

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      {/* Radial red glow at top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(230,0,0,0.08),transparent_70%)] pointer-events-none" />

      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <IconContainer className="h-10 w-10 sparkle-1">
          <img src={gameImages[0]} alt="Game" width={40} height={40} className="rounded-full object-cover" />
        </IconContainer>
        <IconContainer className="h-14 w-14 sparkle-2">
          <img src={gameImages[1]} alt="Game" width={56} height={56} className="rounded-full object-cover" />
        </IconContainer>
        <IconContainer className="h-20 w-20 sparkle-3">
          <img src={gameImages[2]} alt="Game" width={80} height={80} className="rounded-full object-cover" />
        </IconContainer>
        <IconContainer className="h-14 w-14 sparkle-4">
          <img src={gameImages[3]} alt="Game" width={56} height={56} className="rounded-full object-cover" />
        </IconContainer>
        <IconContainer className="h-10 w-10 sparkle-5">
          <img src={gameImages[4]} alt="Game" width={40} height={40} className="rounded-full object-cover" />
        </IconContainer>
      </div>

      {/* Primary beam */}
      <div className="h-40 w-px absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-linear-to-b from-transparent via-brand-red-400 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-5">
          <AnimatedSparkles />
        </div>
      </div>

      {/* Reverse beam */}
      <div className="h-40 w-px absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-linear-to-b from-transparent via-brand-red-400/60 to-transparent animate-move" style={{ animationDelay: '2.5s', animationDirection: 'reverse' }}>
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -right-5">
          <AnimatedSparkles />
        </div>
      </div>
    </div>
  )
}

function StatCard({
  children,
  className = '',
  motionProps,
}: {
  children: React.ReactNode
  className?: string
  motionProps?: Record<string, unknown>
}) {
  return (
    <motion.div
      {...motionProps}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
      className="group rounded-3xl p-px bg-linear-to-b from-border-subtle to-transparent hover:from-brand-red-500/30 hover:to-transparent transition-all duration-500"
    >
      <div className={`bg-card rounded-[calc(1.5rem-1px)] p-6 flex flex-col justify-between relative overflow-hidden h-full group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-500 ${className}`}>
        {children}
      </div>
    </motion.div>
  )
}

function GrowthBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1 text-base text-muted-foreground mt-2">
      <TrendingUp className="w-4 h-4" />
      <span>{children}</span>
    </div>
  )
}

function AnimatedNumber({ to, suffix = '', duration = 1.5 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) => {
    if (to % 1 !== 0) return v.toFixed(1)
    return Math.round(v).toString()
  })

  useEffect(() => {
    if (isInView) {
      animate(motionVal, to, { duration, ease: 'easeOut' })
    }
  }, [isInView, motionVal, to, duration])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = v + suffix
    })
    return unsubscribe
  }, [rounded, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export function StatsGrid() {
  const { t } = useTranslation()

  return (
    <section id="stats" className="py-20">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cjk mb-4">
            {t('stats.heading')} <span className="text-gradient-red">{t('stats.headingHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 max-w-5xl mx-auto">
          {/* Card 1 - Providers */}
          <StatCard
            motionProps={{
              initial: { opacity: 0, x: -20, y: -10 },
              whileInView: { opacity: 1, x: 0, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0 },
            }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {providers.map((provider) => (
                <img
                  key={provider.name}
                  src={provider.src}
                  alt={provider.name}
                  className="h-10 w-auto object-contain brightness-0 dark:brightness-100"
                />
              ))}
            </div>
            <div>
              <p className="text-muted-foreground text-base">{t('stats.providers')}</p>
              <p className="text-5xl md:text-6xl font-bold font-cjk">
                <AnimatedNumber to={50} suffix="+" />
              </p>
              <GrowthBadge>{t('stats.providersGrowth')}</GrowthBadge>
            </div>
          </StatCard>

          {/* Card 2 - Games (tall, spans 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:row-span-2 rounded-3xl p-px bg-linear-to-b from-brand-red-500/20 to-transparent"
          >
            <div className="bg-card rounded-[calc(1.5rem-1px)] text-center min-h-70 md:min-h-0 p-0 flex flex-col justify-between relative overflow-hidden h-full">
              <CenterCardSkeleton />
              <div className="relative z-10 p-6 pt-0">
                <p className="text-muted-foreground text-base mb-1">{t('stats.games')}</p>
                <p className="text-5xl md:text-6xl font-bold font-cjk">
                  <AnimatedNumber to={1000} suffix="+" duration={2} />
                </p>
                <GrowthBadge>{t('stats.gamesGrowth')}</GrowthBadge>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Withdrawal Speed */}
          <StatCard
            className="justify-between"
            motionProps={{
              initial: { opacity: 0, x: 20, y: -10 },
              whileInView: { opacity: 1, x: 0, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.15 },
            }}
          >
            <div className="flex justify-end">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src="/rocket.png"
                  alt="Rocket"
                  className="h-20 w-auto object-contain"
                />
              </motion.div>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold font-cjk">
                <AnimatedNumber to={3} /><span className="text-3xl"> {t('stats.withdrawalUnit')}</span>
              </p>
              <p className="text-muted-foreground text-base">{t('stats.withdrawal')}</p>
              <GrowthBadge>{t('stats.withdrawalGrowth')}</GrowthBadge>
            </div>
          </StatCard>

          {/* Card 4 - Payment Methods */}
          <StatCard
            motionProps={{
              initial: { opacity: 0, x: -20, y: 10 },
              whileInView: { opacity: 1, x: 0, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.2 },
            }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <VisaIcon size={40} />
              <MastercardIcon size={40} />
              <BitcoinIcon size={40} />
              <UsdtIcon size={40} />
              <DuitNowIcon size={40} />
            </div>
            <div>
              <p className="text-muted-foreground text-base">{t('stats.payment')}</p>
              <p className="text-5xl md:text-6xl font-bold font-cjk">
                <AnimatedNumber to={150} suffix="+" />
              </p>
              <GrowthBadge>{t('stats.paymentGrowth')}</GrowthBadge>
            </div>
          </StatCard>

          {/* Card 5 - Uptime */}
          <StatCard
            className="justify-between"
            motionProps={{
              initial: { opacity: 0, x: 20, y: 10 },
              whileInView: { opacity: 1, x: 0, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.25 },
            }}
          >
            <div className="flex justify-end">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src="/clock.png"
                  alt="Clock"
                  className="h-20 w-auto object-contain"
                />
              </motion.div>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold font-cjk">
                <AnimatedNumber to={99.9} suffix="%" />
              </p>
              <p className="text-muted-foreground text-base">{t('stats.uptime')}</p>
              <GrowthBadge>{t('stats.uptimeGrowth')}</GrowthBadge>
            </div>
          </StatCard>
        </div>
      </div>
    </section>
  )
}
