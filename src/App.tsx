import './app.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/i18n'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { InvestorsPage } from '@/pages/InvestorsPage'
import { PlatformPage } from '@/pages/PlatformPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()

  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="dark">
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <ScrollToTop />
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to="/investors" replace />} />
                <Route path="/investors" element={<InvestorsPage />} />
                <Route path="/platform" element={<PlatformPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
