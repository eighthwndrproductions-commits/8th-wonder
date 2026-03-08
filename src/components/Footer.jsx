import { Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Who We Serve', href: '#services' },
  { label: 'What We Offer', href: '#deliverables' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Real Estate',
  'Construction & Development',
  'Marine & Tourism',
  'Hospitality & Events',
  'Sport & Recreation',
  'Schools & Education',
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-block mb-4">
              <Logo />
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
              Professional drone photography & videography across South East Queensland.
              Serving construction, real estate, marine & tourism, hospitality & events, sport & recreation, schools, documentaries & TV, and agriculture.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-slate-800 hover:bg-amber-500 hover:scale-110 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-500 mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-500 mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Acknowledgement of Country */}
        <div className="pt-6 pb-6">
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            8th Wonder acknowledges Aboriginal and Torres Strait Islander peoples as the First Australians and recognises their culture, history, diversity and deep connection to the Land, Seas and Waters of Queensland. We acknowledge the Traditional Custodians of the land and pay our respects to Elders past, present, and future.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} 8th Wonder. All rights reserved. South East Queensland, Australia.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-slate-800 hover:bg-amber-500 hover:scale-110 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
