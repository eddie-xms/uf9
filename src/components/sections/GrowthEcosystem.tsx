import { motion } from 'framer-motion'
import { Radio, Users, Tv } from 'lucide-react'
import { useTranslation } from '@/i18n'
import { cn } from '@/lib/utils'

/* ── Triangle node positions (in SVG viewBox 300×280) ── */
const NODES = [
  { id: 'streamer', x: 150, y: 45, icon: 'users', label: 1 },   // apex
  { id: 'platform', x: 55, y: 230, icon: 'tv', label: 0 },      // bottom-left
  { id: 'agent', x: 245, y: 230, icon: 'radio', label: 2 },     // bottom-right
]

/* ── Connection edges ── */
const EDGES = [
  { from: 0, to: 1 }, // streamer -> platform
  { from: 1, to: 2 }, // platform -> agent
  { from: 2, to: 0 }, // agent -> streamer
]

/* ── Pure SVG network diagram ── */
function NetworkDiagram() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card border border-border-subtle rounded-2xl p-6 md:p-8 relative overflow-hidden flex items-center justify-center"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,0,0,0.04),transparent_70%)] hidden dark:block" />

      <svg viewBox="0 0 300 280" className="w-full max-w-sm h-auto relative">
        <defs>
          <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E60000" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#FF3333" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E60000" stopOpacity="0.5" />
          </linearGradient>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer rotating dashed ring */}
        <g className="origin-center animate-[spin_40s_linear_infinite]" style={{ transformOrigin: '150px 150px' }}>
          <circle
            cx="150" cy="150" r="120"
            fill="none" stroke="#E60000" strokeOpacity={0.06}
            strokeWidth={1} strokeDasharray="6 8"
          />
        </g>

        {/* Inner ring */}
        <circle
          cx="150" cy="150" r="85"
          fill="none" stroke="#E60000" strokeOpacity={0.04}
          strokeWidth={1}
        />

        {/* Connection lines with animated dash flow */}
        {EDGES.map((edge, i) => {
          const from = NODES[edge.from]
          const to = NODES[edge.to]
          // Midpoint offset for slight curve
          const mx = (from.x + to.x) / 2
          const my = (from.y + to.y) / 2
          // Push midpoint toward center for slight curve
          const cx = mx + (150 - mx) * 0.25
          const cy = my + (150 - my) * 0.25
          const d = `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`

          return (
            <g key={i}>
              {/* Static path */}
              <motion.path
                d={d}
                fill="none"
                stroke="#E60000"
                strokeOpacity={0.12}
                strokeWidth={1.5}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              />
              {/* Animated flowing dash overlay */}
              <path
                d={d}
                fill="none"
                stroke="url(#edgeGrad)"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeDasharray="8 16"
                className="animate-[dash_3s_linear_infinite]"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
              {/* Arrowhead at midpoint */}
              <circle cx={cx} cy={cy} r={2} fill="#E60000" fillOpacity={0.25} />
            </g>
          )
        })}

        {/* Center hub */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
        >
          <circle cx="150" cy="150" r="18" fill="currentColor" fillOpacity={0.03} stroke="#E60000" strokeOpacity={0.15} strokeWidth={1} />
          <text x="150" y="147" textAnchor="middle" fontSize="8" fontWeight="800" fill="#E60000" fillOpacity={0.6}
            fontFamily="Inter, sans-serif" letterSpacing="0.1em"
          >
            3-WAY
          </text>
          <text x="150" y="158" textAnchor="middle" fontSize="6" fill="currentColor" fillOpacity={0.4}
            fontFamily="Inter, sans-serif"
          >
            ECOSYSTEM
          </text>
        </motion.g>

        {/* Nodes */}
        {NODES.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.12 }}
          >
            {/* Pulsing ring */}
            <motion.circle
              cx={node.x} cy={node.y} r={22}
              fill="none" stroke="#E60000" strokeWidth={1}
              initial={{ r: 22, opacity: 0.4 }}
              animate={{ r: 32, opacity: 0 }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8, ease: 'easeOut' }}
            />
            {/* Node background */}
            <circle cx={node.x} cy={node.y} r={22}
              fill="currentColor" fillOpacity={0.03}
              stroke="#E60000"
              strokeOpacity={i === 0 ? 0.35 : 0.2}
              strokeWidth={i === 0 ? 2 : 1.5}
              filter={i === 0 ? 'url(#nodeGlow)' : undefined}
            />
            {/* Inner glow */}
            <circle cx={node.x} cy={node.y} r={22}
              fill="#E60000" fillOpacity={0.06}
            />
            {/* Icon placeholder — Lucide icons can't render in SVG, use simple symbols */}
            {node.icon === 'users' && (
              <g fill="none" stroke="#E60000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={node.x - 4} cy={node.y - 4} r={3} />
                <path d={`M ${node.x - 10} ${node.y + 6} a 6 6 0 0 1 12 0`} />
                <circle cx={node.x + 6} cy={node.y - 4} r={2.5} />
                <path d={`M ${node.x + 1} ${node.y + 6} a 5 5 0 0 1 10 0`} />
              </g>
            )}
            {node.icon === 'tv' && (
              <g fill="none" stroke="#E60000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <rect x={node.x - 9} y={node.y - 7} width={18} height={12} rx={2} />
                <line x1={node.x - 4} y1={node.y + 8} x2={node.x + 4} y2={node.y + 8} />
              </g>
            )}
            {node.icon === 'radio' && (
              <g fill="none" stroke="#E60000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={node.x} cy={node.y + 2} r={2} />
                <path d={`M ${node.x - 5} ${node.y - 3} a 7 7 0 0 1 10 0`} />
                <path d={`M ${node.x - 8} ${node.y - 6} a 11 11 0 0 1 16 0`} />
              </g>
            )}
            {/* Label */}
            <text
              x={node.x}
              y={node.y + (i === 0 ? -32 : 40)}
              textAnchor="middle"
              className="fill-foreground"
              fontSize="10"
              fontWeight="700"
              fontFamily="'Noto Sans TC', sans-serif"
            >
              {t(`growthEcosystem.participants.${node.label}.title`)}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* CSS for dash animation */}
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -48; }
        }
      `}</style>
    </motion.div>
  )
}

/* ── Participant icons for cards ── */
const participantIcons = [Tv, Users, Radio]

export function GrowthEcosystem() {
  const { t, tArray } = useTranslation()

  return (
    <section id="growth" className="relative py-14 md:py-20">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background-secondary/20 to-background hidden dark:block" />

      <div className="relative container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cjk mb-4">
            {t('growthEcosystem.heading')} <span className="text-gradient-red">{t('growthEcosystem.headingHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            {t('growthEcosystem.subtitle')}
          </p>
        </motion.div>

        {/* Two-column: Network visualization left, Cards right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Pure SVG network diagram */}
          <NetworkDiagram />

          {/* Right: Participant cards + Detail card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Three participant cards */}
            {[0, 1, 2].map((i) => {
              const Icon = participantIcons[i]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className={cn(
                    'bg-card rounded-2xl p-5 border transition-colors relative overflow-hidden',
                    i === 1
                      ? 'border-brand-red-500/30 shadow-[0_0_30px_-10px_rgba(230,0,0,0.12)]'
                      : 'border-border-subtle hover:border-brand-red-500/20'
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                      'bg-brand-red-500/15 text-brand-red-400'
                    )}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-cjk text-foreground mb-1">
                        {t(`growthEcosystem.participants.${i}.title`)}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`growthEcosystem.participants.${i}.desc`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Tagline banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className={cn(
                'rounded-2xl p-4 text-center relative overflow-hidden',
                'bg-linear-to-br from-brand-red-500 to-brand-red-700',
                'shadow-[0_6px_30px_-8px_rgba(230,0,0,0.35)]'
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
              <p className="relative text-sm md:text-base font-bold font-cjk text-white tracking-wide">
                {t('growthEcosystem.tagline')}
              </p>
            </motion.div>

            {/* Traffic system detail card */}
            <div className="bg-card rounded-2xl p-5 border border-border-subtle relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 blur-3xl bg-brand-red-500 hidden dark:block" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Radio className="w-5 h-5 shrink-0 text-brand-red-400" />
                  <h4 className="text-base font-bold font-cjk text-foreground">
                    {t('partner.systems.traffic.title')}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {t('partner.systems.traffic.desc')}
                </p>
                <ul className="space-y-1.5">
                  {tArray('partner.systems.traffic.points').map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-foreground-secondary">
                      <div className="w-1 h-1 rounded-full shrink-0 bg-brand-red-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
