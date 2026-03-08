import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, Camera, MapPin } from 'lucide-react'

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '100+', label: 'Flights Completed' },
  { value: '8+', label: 'Industries Served' },
  { value: '100%', label: 'Licensed & Insured' },
]

const badges = [
  { icon: Shield, text: 'CASA Licensed Operator' },
  { icon: Award, text: 'Fully Insured' },
  { icon: Camera, text: 'DJI Certified Equipment' },
  { icon: MapPin, text: 'Based in South East QLD' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80"
                alt="Drone operators flying at sunset"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-slate-900 text-white rounded-2xl p-4 md:p-5 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-4xl font-bold gradient-amber-text">100+</p>
              <p className="text-sm text-slate-400 mt-1">Flights Completed</p>
            </motion.div>
            {/* Decorative accent */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl opacity-20 -z-10"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)' }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-3">
              The Team Behind the Lens
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Your Vision. Your Story.<br />Our Obsession.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              8th Wonder is a boutique drone operation based in South East Queensland.
              Every shoot is handled personally — from the first conversation through to
              final delivery. You'll always know who you're working with.
            </p>
            <p className="text-slate-500 leading-relaxed mb-4">
              We started because we genuinely love what we do — there's nothing quite like
              seeing a place from above for the first time and knowing you've captured
              something special. That passion shows in every frame.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              We plan every flight deliberately so that when we land, you have exactly
              what you came for. No guesswork. Just results you're proud to share.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {badges.map((badge, i) => {
                const Icon = badge.icon
                return (
                  <motion.div
                    key={badge.text}
                    className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-amber-400/50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  >
                    <Icon className="text-amber-500 flex-shrink-0" size={20} />
                    <span className="text-sm font-medium text-slate-700">{badge.text}</span>
                  </motion.div>
                )
              })}
            </div>

            <a
              href="#contact"
              className="inline-block gradient-amber hover:scale-105 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 glow-amber-sm"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-slate-200">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-slate-800 mb-1">{stat.value}</p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
