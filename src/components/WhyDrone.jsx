import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Eye, Clock, DollarSign, Share2 } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Elevate How You Show Up',
    body: "First impressions matter. Aerial content signals that you take your work seriously — and that attention to detail carries through to everything you do.",
    span: 'md:col-span-3',
  },
  {
    icon: Eye,
    title: 'Content People Actually Remember',
    body: "There's something about a sweeping aerial shot that stops people mid-scroll. It creates an emotional response that flat photography simply can't.",
    span: 'md:col-span-3',
  },
  {
    icon: DollarSign,
    title: 'Better Outcomes for Your Clients',
    body: "Listings with drone photography sell up to 68% faster. Buyers connect emotionally when they see a property in full context — and that connection drives decisions.",
    span: 'md:col-span-2',
  },
  {
    icon: Clock,
    title: 'More Time for What Matters',
    body: "A single drone flight gives you a comprehensive site overview in minutes. Less time documenting on foot, more time running the project.",
    span: 'md:col-span-2',
  },
  {
    icon: Share2,
    title: 'One Shoot. Weeks of Content.',
    body: "Every flight generates a library of premium content. Website, social media, pitch decks, reports — it's an asset that keeps working long after we've landed.",
    span: 'md:col-span-2',
  },
]

export default function WhyDrone() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-3">
            Why It Matters
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            What Drone Footage<br />Does for Your Business
          </h2>
          <p className="text-slate-500 text-xl leading-relaxed">
            The right aerial content doesn't just look impressive — it changes how people
            feel about you before they've even made contact.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 sm:gap-5">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                className={`${benefit.span} group relative bg-slate-50 border border-slate-200 hover:border-amber-400 rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col gap-4 transition-all duration-300 cursor-default`}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-amber-600" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {benefit.body}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Pull quote */}
        <motion.div
          className="mt-20 relative rounded-3xl p-10 md:p-14 text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-slate-900" />
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: 'radial-gradient(circle at top right, #f59e0b, transparent 60%), radial-gradient(circle at bottom left, #06b6d4, transparent 60%)' }}
          />
          <div className="relative z-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug max-w-3xl mx-auto mb-6">
              We don't just capture footage — we help you tell a story
              that <span className="gradient-amber-text">stays with people</span>.
            </p>
            <a
              href="#contact"
              className="inline-block gradient-amber hover:scale-105 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 glow-amber"
            >
              Let's Talk About Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
