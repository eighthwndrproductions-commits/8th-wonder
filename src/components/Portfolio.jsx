import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'

const showreelVideoId = 'b0SMaPLhe2g'

const portfolioItems = [
  {
    id: 1,
    category: 'Real Estate',
    title: 'Noosa Hinterland Estate',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    videoId: 'dv09CfEMIiM',
  },
  {
    id: 2,
    category: 'Marine & Tourism',
    title: 'Raby Bay Marina Showcase',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    videoId: 'dv09CfEMIiM',
  },
  {
    id: 3,
    category: 'Construction',
    title: 'Brisbane Infrastructure Project',
    image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=800&q=80',
    videoId: 'dv09CfEMIiM',
  },
  {
    id: 4,
    category: 'Hospitality & Events',
    title: 'Gold Coast Music Festival',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
    videoId: 'dv09CfEMIiM',
  },
  {
    id: 5,
    category: 'Sport & Recreation',
    title: 'Moreton Bay Sailing Regatta',
    image: 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800&q=80',
    videoId: 'dv09CfEMIiM',
  },
  {
    id: 6,
    category: 'Schools & Education',
    title: 'Brisbane Grammar Campus Aerial',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    videoId: 'dv09CfEMIiM',
  },
]

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeVideo])

  return (
    <section id="portfolio" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)' }}
      />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See It for Yourself
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of aerial work across South East Queensland. Every shot
            tells a story from a perspective you've never seen before.
          </p>
        </motion.div>

        {/* Showreel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-800 shadow-2xl shadow-black/40">
            <iframe
              src={`https://www.youtube.com/embed/${showreelVideoId}?rel=0`}
              title="8th Wonder Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-center text-slate-500 text-sm mt-4">
            Watch our showreel — placeholder video, real content coming soon.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 cursor-pointer"
              onClick={() => setActiveVideo(item.videoId)}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight mb-3">{item.title}</h3>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Play size={16} />
                  <span>View Project</span>
                </div>
              </div>
              {/* Play icon center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="text-white ml-1" size={28} fill="white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-slate-600 text-sm">
            Placeholder images & videos shown — real project content coming soon.
          </p>
        </motion.div>
      </div>

      {/* YouTube video overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setActiveVideo(null)}
            />

            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10 cursor-pointer"
            >
              <X className="text-white" size={20} />
            </button>

            {/* Video container */}
            <motion.div
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Project Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
