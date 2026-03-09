import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useOutsideClick } from '@/hooks/useOutsideClick'

type Testimonial = {
  name: string
  role: string
  initials: string
  rating: number
  quote: string
  fullTestimonial: string
}

const testimonials: Testimonial[] = [
  {
    name: 'James Z.',
    role: 'VIP Diamond Member',
    initials: 'JZ',
    rating: 5,
    quote: 'Been playing on UF9 for two years — withdrawals are always fast and customer service is top-notch.',
    fullTestimonial: 'Been playing on UF9 for two years — withdrawals are always fast and customer service is top-notch. I love their live baccarat, the video quality is crystal clear and the dealers are very professional. VIP perks are great too, with exclusive offers every month. Highly recommend to friends.',
  },
  {
    name: 'Sarah L.',
    role: 'Veteran Player',
    initials: 'SL',
    rating: 5,
    quote: 'Huge selection of slot games and I win often — the experience is fantastic!',
    fullTestimonial: 'Huge selection of slot games and I win often — the experience is fantastic! I\'ve tried many platforms, but UF9 has the most complete game library. Customer service is online 24/7 and resolves issues quickly. Most importantly, funds are secure and deposits and withdrawals are super convenient.',
  },
  {
    name: 'Michael W.',
    role: 'Sports Betting Enthusiast',
    initials: 'MW',
    rating: 5,
    quote: 'Sports betting odds are very competitive in the industry, and live betting is rock solid.',
    fullTestimonial: 'Sports betting odds are very competitive in the industry, and live betting is rock solid. I mainly bet on football and basketball, and UF9 covers a wide range of events — from the Big Five leagues to the Asian Cup. The data analytics feature is really useful and helps me make better decisions.',
  },
  {
    name: 'Emily C.',
    role: 'New Player',
    initials: 'EC',
    rating: 5,
    quote: 'The 100% first deposit bonus is an amazing deal, and customer service even taught me how to play.',
    fullTestimonial: 'The 100% first deposit bonus is an amazing deal, and customer service even taught me how to play. As a beginner, I had a lot of questions at first, but the support team answered everything patiently. The platform is easy to use and runs smoothly on mobile too. Recommended for anyone new to online gaming.',
  },
  {
    name: 'David L.',
    role: 'VIP Platinum Member',
    initials: 'DL',
    rating: 5,
    quote: 'The card game matchmaking system is very fair, and poker tournament prizes are generous.',
    fullTestimonial: 'The card game matchmaking system is very fair, and poker tournament prizes are generous. I join tournaments every week and the gameplay is incredibly smooth. UF9 does fairness right — every round has a verification mechanism. VIP service is excellent too, with a dedicated account manager.',
  },
  {
    name: 'Robert H.',
    role: 'Fishing Games Expert',
    initials: 'RH',
    rating: 5,
    quote: 'Fishing games have gorgeous graphics, diverse gameplay, and the rewards are amazing.',
    fullTestimonial: 'Fishing games have gorgeous graphics, diverse gameplay, and the rewards are amazing. Every time I log in there are different events, keeping the experience fresh. Playing multiplayer mode with friends is especially fun — competitive but fair. UF9 is the best online gaming platform I\'ve ever used.',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            'w-4 h-4',
            i < rating ? 'fill-brand-red-400 text-brand-red-400' : 'fill-border text-border'
          )}
        />
      ))}
    </div>
  )
}

function AvatarCircle({ initials, className }: { initials: string; className?: string }) {
  return (
    <div
      className={cn(
        'w-12 h-12 rounded-full bg-brand-red-500/20 flex items-center justify-center text-brand-red-400 font-bold text-xl',
        className
      )}
    >
      {initials}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  index,
  onOpen,
}: {
  testimonial: Testimonial
  index: number
  onOpen: () => void
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 * index, ease: 'easeOut' },
      }}
      onClick={onOpen}
      className="relative flex flex-col w-72 md:w-80 h-[280px] p-6 rounded-2xl bg-card border border-border-subtle text-left hover:border-brand-red-500/30 transition-colors group select-none"
    >
      <div className="absolute top-4 right-4 text-brand-red-500/20 text-5xl font-serif">"</div>

      <StarRating rating={testimonial.rating} />

      <p className="mt-4 text-foreground-secondary text-base md:text-lg leading-relaxed line-clamp-4 flex-1">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
        <AvatarCircle initials={testimonial.initials} />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground truncate">{testimonial.name}</p>
          <p className="text-base text-faint-foreground truncate">{testimonial.role}</p>
        </div>
      </div>

      <span className="absolute bottom-2 right-2 text-sm text-faint-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        Click to read more
      </span>
    </motion.button>
  )
}

function ExpandedTestimonial({
  testimonial,
  onClose,
}: {
  testimonial: Testimonial
  onClose: () => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useOutsideClick(containerRef, onClose)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-10 w-full max-w-lg bg-background-secondary rounded-2xl p-6 md:p-8 border border-border-subtle"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-card hover:bg-card-hover transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        <StarRating rating={testimonial.rating} />

        <p className="mt-6 text-foreground-secondary text-lg md:text-xl leading-relaxed">
          "{testimonial.fullTestimonial}"
        </p>

        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
          <AvatarCircle initials={testimonial.initials} className="w-14 h-14 text-2xl" />
          <div>
            <p className="font-bold text-foreground text-xl">{testimonial.name}</p>
            <p className="text-faint-foreground">{testimonial.role}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollability()
    window.addEventListener('resize', checkScrollability)
    return () => window.removeEventListener('resize', checkScrollability)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollStart(carouselRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    carouselRef.current.scrollLeft = scrollStart - walk
  }

  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  const scrollLeftFn = () => {
    carouselRef.current?.scrollBy({ left: -320, behavior: 'smooth' })
  }

  const scrollRightFn = () => {
    carouselRef.current?.scrollBy({ left: 320, behavior: 'smooth' })
  }

  return (
    <section className="py-20 overflow-hidden">
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
            Player <span className="text-gradient-red">Reviews</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Real reviews from real players — let our reputation speak for itself
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={checkScrollability}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={cn(
              'flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
              isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'
            )}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-start shrink-0">
                <TestimonialCard
                  testimonial={testimonial}
                  index={index}
                  onOpen={() => !isDragging && setSelectedTestimonial(testimonial)}
                />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={scrollLeftFn}
              disabled={!canScrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card hover:bg-card-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-border-subtle"
            >
              <ArrowLeft className="h-5 w-5 text-foreground-secondary" />
            </button>
            <button
              onClick={scrollRightFn}
              disabled={!canScrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card hover:bg-card-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-border-subtle"
            >
              <ArrowRight className="h-5 w-5 text-foreground-secondary" />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <ExpandedTestimonial
            testimonial={selectedTestimonial}
            onClose={() => setSelectedTestimonial(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
