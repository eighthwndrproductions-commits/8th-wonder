import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background video with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        {/* Dark fallback behind video */}
        <div className="absolute inset-0 bg-slate-900" />
        {/* Video (on top of fallback) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-110 z-[1] -scale-x-100"
        >
          <source src="https://videos.pexels.com/video-files/8379207/8379207-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic gradient overlay — lighter to let the video breathe */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/60 z-[2]" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(15,23,42,0.35) 100%)' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-left text-white px-6 max-w-7xl mx-auto w-full"
        style={{ opacity }}
      >
        <motion.p
          className="text-amber-400 font-semibold tracking-[0.3em] uppercase text-xs mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          South East Queensland &nbsp;·&nbsp; CASA Licensed Drone Operator
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your World Looks<br />
          Better{' '}
          <span className="gradient-amber-text">
            From Up Here.
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Aerial photography & videography that gives your business the edge it deserves. Based in SEQ, available everywhere.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href="#contact"
            className="gradient-amber hover:scale-105 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 glow-amber"
          >
            Get a Free Quote
          </a>
          <a
            href="#portfolio"
            className="border border-white/30 text-white hover:border-white hover:bg-white/10 font-semibold px-10 py-4 rounded-full text-base transition-all duration-300 backdrop-blur-sm"
          >
            See Our Work
          </a>
        </motion.div>
      </motion.div>

    </section>
  )
}
