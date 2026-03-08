import { useRef, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Mark Stevenson',
    role: 'Project Manager',
    company: 'Stevenson Civil Construction',
    industry: 'Construction',
    quote:
      "8th Wonder has become an essential part of our project documentation process. The aerial progress shots save us hours of site walks and give our clients and stakeholders a clear picture of where we're at. Highly recommend.",
    avatar: 'MS',
  },
  {
    name: 'Sarah Nguyen',
    role: 'Principal Agent',
    company: 'Coastal Property Group',
    industry: 'Real Estate',
    quote:
      'Our listings with drone footage consistently outperform those without — more enquiries, faster sales, better prices. The team at 8th Wonder are professional, punctual, and the quality of their work speaks for itself.',
    avatar: 'SN',
  },
  {
    name: 'Jamie Collins',
    role: 'Events Director',
    company: 'Collins Events Co.',
    industry: 'Events',
    quote:
      "We've used 8th Wonder for three major events now and they never disappoint. The aerial footage they captured at our festival was absolutely stunning — it's become the centrepiece of all our marketing materials.",
    avatar: 'JC',
  },
  {
    name: 'Dave Hartley',
    role: 'Farm Manager',
    company: 'Hartley Grain & Grazing',
    industry: 'Agriculture',
    quote:
      "Having aerial mapping done on our property has completely changed the way we manage our land. We spotted drainage issues we didn't even know about. Worth every cent and then some.",
    avatar: 'DH',
  },
]

// Triple the array for seamless looping
const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials]
const setLength = testimonials.length

function TestimonialCard({ t }) {
  return (
    <div className="flex-shrink-0 w-[90%] sm:w-[calc(50%-12px)] lg:w-[38%] snap-start bg-slate-900 rounded-2xl p-5 sm:p-6 flex flex-col relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }}
      />

      <Quote className="text-amber-500/30 mb-3" size={28} />

      <p className="text-white text-sm leading-relaxed font-light mb-6 flex-1 relative">
        "{t.quote}"
      </p>

      <div className="relative">
        <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full mb-3 inline-block">
          {t.industry}
        </span>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-amber flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
            {t.avatar}
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{t.name}</p>
            <p className="text-slate-400 text-xs">
              {t.role} — {t.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const scrollRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isResetting = useRef(false)

  const getCardWidth = useCallback(() => {
    if (!scrollRef.current) return 300
    const card = scrollRef.current.children[0]
    return card ? card.offsetWidth + 24 : 300 // card width + gap
  }, [])

  // Start at the middle set on mount
  useEffect(() => {
    if (!scrollRef.current) return
    const cardWidth = getCardWidth()
    scrollRef.current.scrollLeft = setLength * cardWidth
  }, [getCardWidth])

  // Reset scroll position when reaching cloned ends
  const handleScroll = useCallback(() => {
    if (isResetting.current || !scrollRef.current) return
    const el = scrollRef.current
    const cardWidth = getCardWidth()
    const oneSetWidth = setLength * cardWidth
    const middleEnd = oneSetWidth * 2

    if (el.scrollLeft >= middleEnd) {
      isResetting.current = true
      el.style.scrollBehavior = 'auto'
      el.scrollLeft = el.scrollLeft - oneSetWidth
      el.style.scrollBehavior = ''
      isResetting.current = false
    } else if (el.scrollLeft <= oneSetWidth - cardWidth) {
      isResetting.current = true
      el.style.scrollBehavior = 'auto'
      el.scrollLeft = el.scrollLeft + oneSetWidth
      el.style.scrollBehavior = ''
      isResetting.current = false
    }
  }, [getCardWidth])

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const cardWidth = getCardWidth()
    scrollRef.current.scrollBy({ left: direction * cardWidth, behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-3">
            Real Results
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Don't Just Take Our Word for It
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Here's what our clients across SEQ have to say about working with us.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative -mx-6">
            {/* Right edge fade */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pl-6 pr-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {loopedTestimonials.map((t, i) => (
                <TestimonialCard key={`${t.name}-${i}`} t={t} />
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="text-white" size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight className="text-white" size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
