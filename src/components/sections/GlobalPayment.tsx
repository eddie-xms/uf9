import { motion } from 'framer-motion'
import { Wallet } from 'lucide-react'
import { useTranslation } from '@/i18n'
import {
  VisaIcon,
  MastercardIcon,
  BitcoinIcon,
  UsdtIcon,
  DuitNowIcon,
} from '@/components/icons/PaymentIcons'
import flagMY from '@/components/icons/flag/my.png'
import flagSG from '@/components/icons/flag/sg.png'
import flagVN from '@/components/icons/flag/vn.png'
import flagTH from '@/components/icons/flag/thai.png'
import flagID from '@/components/icons/flag/id.png'

const CURRENCIES = [
  { code: 'MYR', flag: flagMY, country: 'Malaysia' },
  { code: 'SGD', flag: flagSG, country: 'Singapore' },
  { code: 'VND', flag: flagVN, country: 'Vietnam' },
  { code: 'THB', flag: flagTH, country: 'Thailand' },
  { code: 'IDR', flag: flagID, country: 'Indonesia' },
  { code: 'USDT', flag: '', country: 'Tether' },
]

const MAP_POINTS = [
  { id: 'TH', label: 'Thailand', currency: 'THB', x: 140, y: 85 },
  { id: 'VN', label: 'Vietnam', currency: 'VND', x: 210, y: 110 },
  { id: 'MY', label: 'Malaysia', currency: 'MYR', x: 160, y: 175 },
  { id: 'SG', label: 'Singapore', currency: 'SGD', x: 170, y: 200 },
  { id: 'ID', label: 'Indonesia', currency: 'IDR', x: 195, y: 245 },
]

function PulsingDot({ cx, cy, delay = 0 }: { cx: number; cy: number; delay?: number }) {
  return (
    <g>
      {/* Pulsing ring */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={4}
        fill="none"
        stroke="#E60000"
        strokeWidth={1.5}
        initial={{ r: 4, opacity: 0.8 }}
        animate={{ r: 14, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, delay, ease: 'easeOut' }}
      />
      {/* Solid dot */}
      <circle cx={cx} cy={cy} r={4} fill="#E60000" />
      {/* Bright center */}
      <circle cx={cx} cy={cy} r={1.5} fill="#FF3333" />
    </g>
  )
}

function SEAsiaMap() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className=""
    >
      <svg viewBox="0 0 360 300" className="w-full h-auto" aria-label="Southeast Asia payment coverage map">
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E60000" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#E60000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background glow */}
        <circle cx="180" cy="150" r="140" fill="url(#mapGlow)" />

        {/* Simplified landmass outlines — dot-matrix style grid */}
        {/* Thailand */}
        {[
          [120, 55], [130, 55], [140, 55],
          [120, 65], [130, 65], [140, 65], [150, 65],
          [125, 75], [135, 75], [145, 75],
          [130, 85], [140, 85], [150, 85],
          [135, 95], [145, 95],
          [130, 105], [140, 105],
          [125, 115], [135, 115],
          [130, 125], [140, 125],
          [135, 135], [145, 135],
        ].map(([x, y], i) => (
          <circle key={`th-${i}`} cx={x} cy={y} r={2} className="fill-muted-foreground/20 dark:fill-white/15" />
        ))}

        {/* Vietnam */}
        {[
          [195, 65], [205, 65],
          [200, 75], [210, 75],
          [205, 85], [215, 85],
          [200, 95], [210, 95], [220, 95],
          [210, 105], [220, 105],
          [205, 115], [215, 115],
          [200, 125], [210, 125],
          [195, 135], [205, 135],
          [200, 145], [210, 145],
          [205, 155], [215, 155],
        ].map(([x, y], i) => (
          <circle key={`vn-${i}`} cx={x} cy={y} r={2} className="fill-muted-foreground/20 dark:fill-white/15" />
        ))}

        {/* Malaysia (peninsula) */}
        {[
          [135, 145], [145, 145],
          [140, 155], [150, 155], [160, 155],
          [145, 165], [155, 165], [165, 165],
          [150, 175], [160, 175], [170, 175],
          [155, 185], [165, 185],
          [160, 195], [170, 195],
        ].map(([x, y], i) => (
          <circle key={`my-${i}`} cx={x} cy={y} r={2} className="fill-muted-foreground/20 dark:fill-white/15" />
        ))}

        {/* Borneo (Malaysia East + Indonesia) */}
        {[
          [230, 155], [240, 155], [250, 155],
          [225, 165], [235, 165], [245, 165], [255, 165],
          [230, 175], [240, 175], [250, 175], [260, 175],
          [225, 185], [235, 185], [245, 185], [255, 185],
          [230, 195], [240, 195], [250, 195],
        ].map(([x, y], i) => (
          <circle key={`bo-${i}`} cx={x} cy={y} r={2} className="fill-muted-foreground/20 dark:fill-white/15" />
        ))}

        {/* Indonesia (Java + Sumatra) */}
        {[
          [100, 205], [110, 205], [120, 205],
          [105, 215], [115, 215], [125, 215], [135, 215],
          [130, 225], [140, 225], [150, 225],
          [155, 235], [165, 235], [175, 235],
          [180, 245], [190, 245], [200, 245], [210, 245],
          [215, 255], [225, 255], [235, 255], [245, 255],
          [250, 265], [260, 265], [270, 265],
        ].map(([x, y], i) => (
          <circle key={`id-${i}`} cx={x} cy={y} r={2} className="fill-muted-foreground/20 dark:fill-white/15" />
        ))}

        {/* Philippines hint */}
        {[
          [270, 75], [280, 75],
          [265, 85], [275, 85], [285, 85],
          [270, 95], [280, 95],
          [275, 105], [285, 105],
          [270, 115], [280, 115],
        ].map(([x, y], i) => (
          <circle key={`ph-${i}`} cx={x} cy={y} r={2} className="fill-muted-foreground/20 dark:fill-white/10" />
        ))}

        {/* Connection lines between points */}
        {MAP_POINTS.slice(0, -1).map((point, i) => {
          const next = MAP_POINTS[i + 1]
          return (
            <line
              key={`line-${i}`}
              x1={point.x}
              y1={point.y}
              x2={next.x}
              y2={next.y}
              stroke="#E60000"
              strokeWidth={0.5}
              strokeOpacity={0.2}
              strokeDasharray="3 3"
            />
          )
        })}

        {/* Country markers with pulsing dots */}
        {MAP_POINTS.map((point, i) => (
          <g key={point.id}>
            <PulsingDot cx={point.x} cy={point.y} delay={i * 0.4} />
            <text
              x={point.x + (point.id === 'SG' ? 12 : point.id === 'VN' ? 12 : -8)}
              y={point.y + (point.id === 'SG' ? 4 : point.id === 'TH' ? -10 : point.id === 'VN' ? -8 : -10)}
              textAnchor={point.id === 'SG' || point.id === 'VN' ? 'start' : 'end'}
              className="fill-foreground-secondary dark:fill-white/70 text-[8px] font-mono font-bold"
            >
              {point.currency}
            </text>
            <text
              x={point.x + (point.id === 'SG' ? 12 : point.id === 'VN' ? 12 : -8)}
              y={point.y + (point.id === 'SG' ? 14 : point.id === 'TH' ? 0 : point.id === 'VN' ? 2 : 0)}
              textAnchor={point.id === 'SG' || point.id === 'VN' ? 'start' : 'end'}
              className="fill-muted-foreground text-[6px]"
            >
              {point.label}
            </text>
          </g>
        ))}
      </svg>
    </motion.div>
  )
}

export function GlobalPayment() {
  const { t, tArray } = useTranslation()

  return (
    <section className="relative py-14 md:py-20">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background-secondary/20 to-background hidden dark:block" />

      <div className="relative container-main">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cjk mb-4">
            {t('globalPayment.heading')}{' '}
            <span className="text-gradient-red">{t('globalPayment.headingHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            {t('globalPayment.subtitle')}
          </p>
        </motion.div>

        {/* Two-column layout: map left, card right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: SE Asia dot-matrix map */}
          <SEAsiaMap />

          {/* Right: Payment details card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border-subtle relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl bg-brand-red-500 hidden dark:block" />

            <div className="flex items-center gap-3 mb-3">
              <Wallet className="w-6 h-6 shrink-0 text-brand-red-400" />
              <h4 className="text-xl font-bold font-cjk text-foreground">
                {t('partner.systems.payment.title')}
              </h4>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              {t('partner.systems.payment.desc')}
            </p>

            {/* Currency grid with flags */}
            <div className="grid grid-cols-3 gap-2">
              {CURRENCIES.map((c) => (
                <div
                  key={c.code}
                  className="flex flex-col items-center gap-1 py-3 px-2 rounded-xl bg-background-secondary dark:bg-surface-800/50 border border-border-subtle hover:border-brand-red-500/30 transition-colors"
                >
                  {c.flag ? (
                    <img src={c.flag} alt={c.country} className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <UsdtIcon size={32} />
                  )}
                  <span className="text-sm font-mono font-bold text-foreground">{c.code}</span>
                  <span className="text-[10px] text-muted-foreground">{c.country}</span>
                </div>
              ))}
            </div>

            {/* Payment methods */}
            <div className="mt-6 pt-5 border-t border-border-subtle">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                {t('globalPayment.paymentMethods')}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <VisaIcon size={32} className="opacity-60 hover:opacity-100 transition-opacity" />
                <MastercardIcon size={32} className="opacity-60 hover:opacity-100 transition-opacity" />
                <BitcoinIcon size={32} className="opacity-60 hover:opacity-100 transition-opacity" />
                <UsdtIcon size={32} className="opacity-60 hover:opacity-100 transition-opacity" />
                <DuitNowIcon size={32} className="opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Feature points */}
            <ul className="mt-5 space-y-1.5">
              {tArray('partner.systems.payment.points').map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-foreground-secondary">
                  <div className="w-1 h-1 rounded-full shrink-0 bg-brand-red-400" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
