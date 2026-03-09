import { motion } from 'framer-motion'
import { UserCheck } from 'lucide-react'
import { useTranslation } from '@/i18n'
import { cn } from '@/lib/utils'
import { TickIcon, CrossIcon } from '@/components/icons/TickCrossIcons'

/* ── Animated percentage label that counts up ── */
function AnimatedLabel({
  x, y, value, color, delay,
}: {
  x: number; y: number; value: string; color: string; delay: number
}) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <rect
        x={x - 20} y={y - 14} width={40} height={18} rx={4}
        fill={color} fillOpacity={0.15}
      />
      <text
        x={x} y={y - 2}
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
        fill={color}
      >
        {value}
      </text>
    </motion.g>
  )
}

/* ── Pulsing dot at curve endpoint ── */
function EndpointDot({ cx, cy, color, delay }: {
  cx: number; cy: number; color: string; delay: number
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <motion.circle
        cx={cx} cy={cy} r={3}
        fill="none" stroke={color} strokeWidth={1}
        initial={{ r: 3, opacity: 0.6 }}
        animate={{ r: 10, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
      <circle cx={cx} cy={cy} r={3} fill={color} />
      <circle cx={cx} cy={cy} r={1.2} fill="white" fillOpacity={0.8} />
    </motion.g>
  )
}

/* ── Combined overlay chart ── */
function RetentionChart() {
  // Legacy path: starts ~90%, steep drop to ~15%
  const legacyPath = 'M 40 28 C 65 28, 80 38, 105 85 C 130 128, 145 138, 185 140 L 280 142'
  // Legacy area fill
  const legacyArea = `${legacyPath} L 280 155 L 40 155 Z`

  // UF9 path: starts ~90%, gentle dip to ~70%, recovers to ~80%
  const uf9Path = 'M 40 28 C 65 28, 85 40, 115 55 C 145 70, 160 58, 195 48 C 225 40, 255 42, 280 44'
  // UF9 area fill
  const uf9Area = `${uf9Path} L 280 155 L 40 155 Z`

  const yLabels = [
    { y: 28, label: '90%' },
    { y: 60, label: '70%' },
    { y: 95, label: '45%' },
    { y: 130, label: '20%' },
  ]

  const xLabels = ['D1', 'D7', 'D14', 'D30', 'D60', 'D90']

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card border border-border-subtle rounded-2xl p-5 md:p-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-40 h-40 bg-brand-red-500/5 rounded-full blur-3xl hidden dark:block" />

      {/* Legend */}
      <div className="flex items-center gap-6 mb-4 relative">
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.75 rounded-full bg-linear-to-r from-brand-red-500 to-brand-red-400" />
          <span className="text-xs font-semibold text-brand-red-400">UF9 LTV</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.75 rounded-full bg-muted-foreground/30" />
          <span className="text-xs font-medium text-muted-foreground">Legacy</span>
        </div>
      </div>

      <svg viewBox="0 0 300 170" className="w-full h-auto relative" aria-label="Retention curve comparison">
        <defs>
          <linearGradient id="retUf9Grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E60000" />
            <stop offset="100%" stopColor="#FF3333" />
          </linearGradient>
          <linearGradient id="retUf9Fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E60000" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#E60000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="retLegacyFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <filter id="retGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal grid lines */}
        {[28, 60, 95, 130].map((y) => (
          <line
            key={y}
            x1="40" y1={y} x2="280" y2={y}
            stroke="currentColor" strokeOpacity={0.07}
            strokeDasharray="3 5"
          />
        ))}

        {/* Y-axis labels */}
        {yLabels.map(({ y, label }) => (
          <text
            key={y}
            x="36" y={y + 3}
            textAnchor="end"
            className="fill-muted-foreground"
            fontSize="7"
            fontFamily="Inter, sans-serif"
          >
            {label}
          </text>
        ))}

        {/* X-axis labels */}
        {xLabels.map((label, i) => {
          const x = 40 + (i * 240) / 5
          return (
            <g key={label}>
              <line
                x1={x} y1="148" x2={x} y2="152"
                stroke="currentColor" strokeOpacity={0.15}
              />
              <text
                x={x} y="162"
                textAnchor="middle"
                className="fill-muted-foreground"
                fontSize="7"
                fontFamily="Inter, sans-serif"
              >
                {label}
              </text>
            </g>
          )
        })}

        {/* Axes */}
        <line x1="40" y1="16" x2="40" y2="150" stroke="currentColor" strokeOpacity={0.12} />
        <line x1="40" y1="150" x2="280" y2="150" stroke="currentColor" strokeOpacity={0.12} />

        {/* Legacy area fill */}
        <motion.path
          d={legacyArea}
          fill="url(#retLegacyFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Legacy curve */}
        <motion.path
          d={legacyPath}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.25}
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* UF9 area fill */}
        <motion.path
          d={uf9Area}
          fill="url(#retUf9Fill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        {/* UF9 curve */}
        <motion.path
          d={uf9Path}
          fill="none"
          stroke="url(#retUf9Grad)"
          strokeWidth={2.5}
          strokeLinecap="round"
          filter="url(#retGlow)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />

        {/* Endpoint dots */}
        <EndpointDot cx={280} cy={44} color="#E60000" delay={1.5} />
        <EndpointDot cx={280} cy={142} color="#888888" delay={1.2} />

        {/* Percentage annotations */}
        <AnimatedLabel x={280} y={30} value="~80%" color="#E60000" delay={1.6} />
        <AnimatedLabel x={280} y={155} value="~15%" color="#888888" delay={1.3} />

        {/* Gap annotation arrow */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
        >
          <line x1="295" y1="50" x2="295" y2="138" stroke="#E60000" strokeWidth={1} strokeOpacity={0.4} />
          <polygon points="295,50 292,56 298,56" fill="#E60000" fillOpacity={0.4} />
          <polygon points="295,138 292,132 298,132" fill="#E60000" fillOpacity={0.4} />
          <text x="296" y="98" textAnchor="middle" fontSize="7" fontWeight="700" fill="#E60000" fillOpacity={0.6}
            fontFamily="Inter, sans-serif" writingMode="tb"
          >
            GAP
          </text>
        </motion.g>
      </svg>
    </motion.div>
  )
}

export function RetentionSystem() {
  const { t, tArray } = useTranslation()

  return (
    <section className="relative py-14 md:py-20">
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
            {t('retentionSystem.heading')} <span className="text-gradient-red">{t('retentionSystem.headingHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            {t('retentionSystem.subtitle')}
          </p>
        </motion.div>

        {/* Two-column: Chart left, Comparison right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-10">
          {/* Left: Combined overlay chart */}
          <RetentionChart />

          {/* Right: Stacked comparison cards */}
          <div className="space-y-4">
            {/* Legacy card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-5 border border-border-subtle"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-0.75 rounded-full bg-muted-foreground/30" />
                <h3 className="text-lg font-bold font-cjk text-foreground-secondary">
                  {t('retentionSystem.legacyTitle')}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {(['noSegmentation', 'noStrategy', 'noRetention'] as const).map((key) => (
                  <li key={key} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CrossIcon className="w-4 h-4 shrink-0" />
                    {t(`retentionSystem.legacy.${key}`)}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* UF9 card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={cn(
                'bg-card rounded-2xl p-5 border border-brand-red-500/30',
                'shadow-[0_0_40px_-10px_rgba(230,0,0,0.12)]'
              )}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-0.75 rounded-full bg-linear-to-r from-brand-red-500 to-brand-red-400" />
                <h3 className="text-lg font-bold font-cjk text-foreground">
                  {t('retentionSystem.uf9Title')}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {(['smartSegmentation', 'oneOnOne', 'campaignSupport', 'userLoyalty'] as const).map((key) => (
                  <li key={key} className="flex items-center gap-3 text-sm text-foreground-secondary">
                    <TickIcon className="w-4 h-4 shrink-0" />
                    {t(`retentionSystem.uf9.${key}`)}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Detail card integrated */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-5 border border-border-subtle relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 blur-3xl bg-brand-red-500 hidden dark:block" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <UserCheck className="w-5 h-5 shrink-0 text-brand-red-400" />
                  <h4 className="text-base font-bold font-cjk text-foreground">
                    {t('partner.systems.followup.title')}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {t('partner.systems.followup.desc')}
                </p>
                <ul className="space-y-1.5">
                  {tArray('partner.systems.followup.points').map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-foreground-secondary">
                      <div className="w-1 h-1 rounded-full shrink-0 bg-brand-red-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
