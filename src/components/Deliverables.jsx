import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Video, Map, Clapperboard, Image, MonitorPlay } from 'lucide-react'

const deliverables = [
  {
    icon: Camera,
    title: 'Aerial Photography',
    description: 'High-resolution stills from above — perfect for listings, websites, print, and marketing materials.',
  },
  {
    icon: Video,
    title: 'Aerial Video',
    description: 'Cinematic drone footage that tells a story. Smooth, stabilised 4K video for any platform.',
  },
  {
    icon: Clapperboard,
    title: 'Editing & Post-Production',
    description: 'Colour grading, music, transitions — we can deliver polished, ready-to-publish content or raw footage. Your call.',
  },
  {
    icon: Map,
    title: 'Mapping & Surveys',
    description: 'Orthomosaic maps, 3D models, and site surveys for construction, agriculture, and land management.',
  },
  {
    icon: Image,
    title: 'Social Media Content',
    description: 'Reels, shorts, and scroll-stopping visuals sized and optimised for Instagram, TikTok, Facebook, and LinkedIn.',
  },
  {
    icon: MonitorPlay,
    title: 'Website & Campaign Assets',
    description: 'Hero banners, background videos, and campaign visuals — everything you need to look world-class online.',
  },
]

export default function Deliverables() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="deliverables" className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-5"
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
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            More Than Just Drone Footage
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We handle everything from flight planning to final delivery — so you get polished, ready-to-use content without lifting a finger. Take the full package or just the services you need.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="group flex gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-amber-500" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          className="text-center text-slate-700 text-base mt-12 leading-relaxed max-w-3xl mx-auto border border-amber-400 rounded-xl px-6 py-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="font-bold">Not just aerial.</span><br />
          We also offer ground-level photography and videography — so you can get everything you need from a single shoot. Need help with marketing or social media management? We work with a trusted network of agencies who can take it from there.
        </motion.p>
      </div>
    </section>
  )
}
