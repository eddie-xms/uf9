import { useState } from 'react'
import { Menu, X, TrendingUp, Gamepad2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { shareholderNavLinks, platformNavLinks } from '@/constants/navigation'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { useTranslation } from '@/i18n'
import { cn } from '@/lib/utils'

const tabs = [
  { key: 'shareholders', path: '/shareholders', labelKey: 'nav.shareholders', icon: TrendingUp },
  { key: 'platform', path: '/platform', labelKey: 'nav.platform', icon: Gamepad2 },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const activeTab = location.pathname.startsWith('/platform') ? 'platform' : 'shareholders'
  const contextNavLinks = activeTab === 'shareholders' ? shareholderNavLinks : platformNavLinks

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="container-main">
        <div className="flex items-center justify-center gap-4">
          {/* Desktop Pill Navbar */}
          <div className="hidden lg:flex items-center gap-5 px-5 py-2.5 rounded-full bg-background-secondary/80 backdrop-blur-lg border border-border-subtle shadow-lg shadow-shadow">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/shareholders') }} className="shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <img src="/logo.png" alt="UF9" className="h-9 w-auto" />
              </motion.div>
            </a>

            {/* Tab Switcher */}
            <div className="flex items-center rounded-full bg-foreground/6 p-1 border border-border-subtle/50">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.key
                return (
                  <button
                    key={tab.key}
                    onClick={() => navigate(tab.path)}
                    className={cn(
                      'relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200',
                      isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute inset-0 rounded-full bg-brand-red-500"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Icon size={15} />
                      {t(tab.labelKey)}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Context Nav Links */}
            <nav className="flex items-center gap-1">
              {contextNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-brand-red-400 transition-colors duration-300"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <AnimatedThemeToggler className="h-9 w-9 flex items-center justify-center rounded-full bg-foreground/6 border border-border-subtle/50 text-muted-foreground hover:text-foreground transition-colors cursor-pointer [&>svg]:size-4" />
            </div>
          </div>

          {/* Mobile Header */}
          <div className="flex lg:hidden w-full items-center justify-between">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-background-secondary/80 backdrop-blur-lg border border-border-subtle shadow-lg shadow-shadow">
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/shareholders') }} className="shrink-0">
                <img src="/logo.png" alt="UF9" className="h-7 w-auto" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative h-8 w-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Menu
                  className={cn(
                    'h-4 w-4 absolute transition-all',
                    mobileOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  )}
                />
                <X
                  className={cn(
                    'h-4 w-4 absolute transition-all',
                    mobileOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <motion.div
          initial={false}
          animate={{
            height: mobileOpen ? 'auto' : 0,
            opacity: mobileOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="lg:hidden overflow-hidden mt-3"
        >
          <nav className="flex flex-col gap-1 p-4 rounded-2xl bg-background-secondary/90 backdrop-blur-lg border border-border-subtle">
            {/* Mobile Tab Switcher */}
            <div className="flex items-center rounded-full bg-foreground/6 p-1 border border-border-subtle/50 mb-3">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.key
                return (
                  <button
                    key={tab.key}
                    onClick={() => { navigate(tab.path); setMobileOpen(false) }}
                    className={cn(
                      'relative flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-sm font-semibold transition-colors',
                      isActive ? 'text-white' : 'text-muted-foreground'
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="tab-indicator-mobile"
                        className="absolute inset-0 rounded-full bg-brand-red-500"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Icon size={14} />
                      {t(tab.labelKey)}
                    </span>
                  </button>
                )
              })}
            </div>

            {contextNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium text-muted-foreground hover:text-brand-red-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t(link.labelKey)}
              </a>
            ))}
            <div className="flex items-center justify-center gap-2 mt-3">
              <LanguageSwitcher />
              <AnimatedThemeToggler className="h-9 w-9 flex items-center justify-center rounded-full bg-foreground/6 border border-border-subtle/50 text-muted-foreground hover:text-foreground transition-colors cursor-pointer [&>svg]:size-4" />
            </div>
          </nav>
        </motion.div>
      </div>
    </header>
  )
}
