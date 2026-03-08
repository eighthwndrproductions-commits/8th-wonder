import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Route, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Have a Chat',
    description:
      "Flick us a message or give us a bell. Tell us what you need, where, and when — we'll handle the rest. No awkward sales pitch, just a straight-up conversation.",
  },
  {
    icon: Route,
    number: '02',
    title: 'We Plan the Flight',
    description:
      "We'll scope the location, check the airspace, plan the shots, and sort all the logistics. You don't need to worry about any of the technical stuff — that's on us.",
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Get Stunning Content',
    description:
      "Edited, polished, and delivered fast. Photos, video, or both — ready to use on your website, socials, listings, or reports. Content you'll actually be proud to share.",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-3">
            Dead Simple
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            How It Works
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            No complicated process. No confusing packages. Just three easy steps
            between you and incredible aerial content.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 opacity-30" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                className="relative text-center flex flex-col items-center gap-5"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Number + Icon */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center relative z-10 group hover:scale-105 transition-transform duration-300">
                    <Icon className="text-amber-400" size={32} />
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 gradient-amber rounded-full flex items-center justify-center text-white text-xs font-bold z-20">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-block gradient-amber hover:scale-105 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 glow-amber"
          >
            Start with Step 1 — It's Free
          </a>
        </motion.div>
      </div>
    </section>
  )
}
