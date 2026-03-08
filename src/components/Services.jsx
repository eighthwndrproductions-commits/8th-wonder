import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, HardHat, Anchor, UtensilsCrossed, Trophy, GraduationCap, Clapperboard } from 'lucide-react'

const services = [
  {
    icon: HardHat,
    title: 'Construction,\nDevelopment & Agriculture',
    hook: 'Track progress. Impress stakeholders.',
    description:
      'Regular aerial documentation that keeps your clients, investors, and project managers in the loop. Professional progress records, site surveys, and marketing content for off-the-plan campaigns.',
    features: ['Weekly progress documentation', 'Site surveys & inspections', 'Off-the-plan marketing content', 'Stakeholder reporting visuals'],
    cta: 'Get a project quote',
  },
  {
    icon: Anchor,
    title: 'Marine & Tourism',
    hook: 'Make them feel it before they get there.',
    description:
      "There's no better way to show off waterfront life than from above. Whether you're a charter operator, marina, resort, or tourism operator — we create the kind of content that turns browsers into bookers.",
    features: ['Marina & waterfront showcases', 'Charter & tour promotion', 'Resort & destination content', 'Campaign-ready video & photo'],
    cta: 'Attract more visitors',
  },
  {
    icon: Home,
    title: 'Real Estate',
    hook: 'Listings that stop the scroll.',
    description:
      'Emotions are triggered in seconds. Aerial photography and video give your listings the edge — showcasing the property, the street, and the lifestyle in a way that photos from the ground never will.',
    features: ['Aerial photography & video', 'Neighbourhood & lifestyle context', 'Twilight & golden hour sessions', 'Social media ready content', 'Property boundary & land overviews', 'Acreage & rural property showcases', 'Agent branding packages'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    cta: 'Sell properties faster',
    featured: true,
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality & Events',
    hook: 'Content that fills seats.',
    description:
      "Venues, restaurants, weddings, festivals, markets — aerial content gives your space a wow factor that ground-level photos can't touch. Perfect for socials, websites, and seasonal campaigns.",
    features: ['Venue & restaurant showcases', 'Wedding & function coverage', 'Festival & market aerials', 'Social media content packages'],
    cta: 'Showcase your venue',
  },
  {
    icon: Trophy,
    title: 'Sport & Recreation',
    hook: 'A perspective the crowd never sees.',
    description:
      "From sailing regattas to athletics carnivals, aerial coverage adds a cinematic dimension to any sporting event. Great for club promos, highlight reels, and sponsor content.",
    features: ['Race & event coverage', 'Club promotional content', 'Training facility aerials', 'Highlight reels & recaps'],
    cta: 'Cover your next event',
  },
  {
    icon: GraduationCap,
    title: 'Schools & Education',
    hook: 'Your campus from its best angle.',
    description:
      "Stunning aerial views of your grounds, facilities, and community — ideal for enrolment campaigns, prospectuses, and website banners. One shoot, years of value.",
    features: ['Campus aerial photography', 'Enrolment campaign content', 'Sports day & event coverage', 'Prospectus & website visuals'],
    cta: 'Showcase your campus',
  },
  {
    icon: Clapperboard,
    title: 'Documentaries & TV',
    hook: 'Aerial storytelling at its finest.',
    description:
      "Whether it's a feature documentary, short film, or branded content piece — aerial footage adds a cinematic scale that grounds your story in place. We work with filmmakers and production teams to capture exactly the shots you need.",
    features: ['Cinematic aerial sequences', 'Location scouting flights', 'Director-guided shooting', 'Raw or graded delivery'],
    cta: 'Plan your shoot',
  },
]

function ServiceCard({ service, i, inView }) {
  const Icon = service.icon
  return (
    <motion.div
      className={`group relative rounded-2xl p-6 sm:p-8 flex flex-col gap-4 sm:gap-5 transition-all duration-500 h-full ${
        service.featured
          ? 'bg-slate-800 text-white border border-slate-700'
          : 'bg-white border border-slate-200 hover:border-amber-400/60 hover:shadow-xl hover:shadow-slate-200/80'
      }`}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      {service.featured && (
        <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase gradient-amber text-white px-3 py-1 rounded-full">
          Highest Demand
        </span>
      )}

      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          service.featured
            ? 'gradient-amber'
            : 'bg-amber-50 border border-amber-200 group-hover:scale-110'
        }`}>
          <Icon className={service.featured ? 'text-white' : 'text-amber-500'} size={24} />
        </div>
        <div>
          <h3 className={`text-xl font-bold leading-tight ${service.featured ? 'text-white' : 'text-slate-800'}`}>
            {service.title.split('\n').map((line, idx) => (
              <span key={idx}>{idx > 0 && <br />}{line}</span>
            ))}
          </h3>
          <p className={`text-sm font-medium ${service.featured ? 'text-amber-400' : 'text-amber-600'}`}>
            {service.hook}
          </p>
        </div>
      </div>

      <p className={`text-sm leading-relaxed ${service.featured ? 'text-slate-300' : 'text-slate-500'}`}>
        {service.description}
      </p>

      <ul className="flex flex-col gap-2">
        {service.features.map((feature) => (
          <li key={feature} className={`flex items-center gap-2 text-sm ${service.featured ? 'text-slate-300' : 'text-slate-600'}`}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-amber-400" />
            {feature}
          </li>
        ))}
      </ul>

      {service.image && (
        <div className="rounded-xl overflow-hidden flex-1 max-h-52">
          <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover" />
        </div>
      )}

      <a
        href="#contact"
        className={`mt-auto inline-flex items-center gap-2 font-semibold text-sm transition-all group/link ${
          service.featured
            ? 'gradient-amber text-white px-6 py-3 rounded-full hover:scale-105 glow-amber-sm self-start'
            : 'text-amber-600 hover:text-amber-500'
        }`}
      >
        {service.cta}
        <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
      </a>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const construction = services[0]
  const marine = services[1]
  const realEstate = services[2]
  const hospitality = services[3]
  const sport = services[4]
  const schools = services[5]
  const documentaries = services[6]

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-3">
            Who We Serve
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Built for Your Industry
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We don't do generic. Every industry has different needs — here's how we deliver for each.
          </p>
        </motion.div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Row 1, Col 1 */}
          <ServiceCard service={construction} i={0} inView={inView} />
          {/* Row 1, Col 2 */}
          <ServiceCard service={marine} i={1} inView={inView} />
          {/* Row 1-2, Col 3 — Real Estate spans 2 rows */}
          <div className="lg:row-span-2">
            <ServiceCard service={realEstate} i={2} inView={inView} />
          </div>
          {/* Row 2, Col 1 */}
          <ServiceCard service={hospitality} i={3} inView={inView} />
          {/* Row 2, Col 2 */}
          <ServiceCard service={sport} i={4} inView={inView} />
          {/* Row 3, Col 1 — Image box */}
          <motion.div
            className="rounded-2xl overflow-hidden relative"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1607309843659-f4ad95cf3277?w=800&q=80"
              alt="Aerial drone view of the Gold Coast"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Row 3, Col 2 */}
          <ServiceCard service={schools} i={6} inView={inView} />
          {/* Row 3, Col 3 */}
          <ServiceCard service={documentaries} i={7} inView={inView} />
        </div>

        <motion.p
          className="text-center text-slate-700 text-base mt-12 leading-relaxed max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="font-bold">Don't see your industry listed?</span><br />
          <a href="#contact" className="text-amber-500 hover:text-amber-400 font-semibold transition-colors">Reach out anyway</a> — we may be able to help, or at the very least connect you with someone who can.
        </motion.p>
      </div>
    </section>
  )
}
