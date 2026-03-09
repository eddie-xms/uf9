import { motion, animate } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { useEffect } from 'react'
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

      <div className="h-40 w-px absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-linear-to-b from-transparent via-brand-red-400 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-5">
          <AnimatedSparkles />
        </div>
      </div>
    </div>
  )
}

function StatCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-card rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden ${className}`}>
      {children}
    </div>
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

export function StatsGrid() {
  const { t } = useTranslation()

  return (
    <section className="py-20">
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
          <StatCard>
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
              <p className="text-5xl md:text-6xl font-bold font-cjk">{t('stats.providersCount')}</p>
              <GrowthBadge>{t('stats.providersGrowth')}</GrowthBadge>
            </div>
          </StatCard>

          {/* Card 2 - Games (tall, spans 2 rows) */}
          <StatCard className="md:row-span-2 text-center min-h-[280px] md:min-h-0 p-0">
            <CenterCardSkeleton />
            <div className="relative z-10 p-6 pt-0">
              <p className="text-muted-foreground text-base mb-1">{t('stats.games')}</p>
              <p className="text-5xl md:text-6xl font-bold font-cjk">{t('stats.gamesCount')}</p>
              <GrowthBadge>{t('stats.gamesGrowth')}</GrowthBadge>
            </div>
          </StatCard>

          {/* Card 3 - Withdrawal Speed */}
          <StatCard className="justify-between">
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
              <p className="text-5xl md:text-6xl font-bold font-cjk">{t('stats.withdrawalCount')}<span className="text-3xl"> {t('stats.withdrawalUnit')}</span></p>
              <p className="text-muted-foreground text-base">{t('stats.withdrawal')}</p>
              <GrowthBadge>{t('stats.withdrawalGrowth')}</GrowthBadge>
            </div>
          </StatCard>

          {/* Card 4 - Payment Methods */}
          <StatCard>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <VisaIcon size={40} />
              <MastercardIcon size={40} />
              <BitcoinIcon size={40} />
              <UsdtIcon size={40} />
              <DuitNowIcon size={40} />
            </div>
            <div>
              <p className="text-muted-foreground text-base">{t('stats.payment')}</p>
              <p className="text-5xl md:text-6xl font-bold font-cjk">{t('stats.paymentCount')}</p>
              <GrowthBadge>{t('stats.paymentGrowth')}</GrowthBadge>
            </div>
          </StatCard>

          {/* Card 5 - Uptime */}
          <StatCard className="justify-between">
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
              <p className="text-5xl md:text-6xl font-bold font-cjk">{t('stats.uptimeCount')}</p>
              <p className="text-muted-foreground text-base">{t('stats.uptime')}</p>
              <GrowthBadge>{t('stats.uptimeGrowth')}</GrowthBadge>
            </div>
          </StatCard>
        </div>
      </div>
    </section>
  )
}
