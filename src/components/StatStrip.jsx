import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Timer, Zap, MessageCircle } from 'lucide-react'

function CountUp({ target, suffix = '', duration = 2 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target, duration])

  return <span ref={ref}>{value}{suffix}</span>
}

const stats = [
  {
    icon: TrendingUp,
    target: 403,
    suffix: '%',
    label: 'more enquiries on listings with video content',
  },
  {
    icon: Zap,
    target: 68,
    suffix: '%',
    label: 'faster sales for listings with aerial imagery',
  },
  {
    icon: Timer,
    target: 83,
    suffix: '%',
    label: 'of marketers say aerial content boosts engagement',
  },
  {
    icon: MessageCircle,
    target: 24,
    suffix: 'hr',
    label: 'personal response — usually much sooner',
  },
]

export default function StatStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="relative py-14 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900" />
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #06b6d4 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 mb-3">
                  <Icon className="text-amber-400" size={20} />
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-white/60 text-sm leading-snug">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
