import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const commercialLinks = [
  { label: 'Industries', href: '#services' },
  { label: 'Services', href: '#deliverables' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const isNature = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // IntersectionObserver for commercial page sections
  useEffect(() => {
    if (isNature) return

    const sectionIds = commercialLinks.map((link) => link.href.replace('#', ''))
    const observers = []

    const heroEl = document.getElementById('hero')
    if (heroEl) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection('')
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      heroObserver.observe(heroEl)
      observers.push(heroObserver)
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [isNature])

  // Reset state on route change
  useEffect(() => {
    setMenuOpen(false)
    setActiveSection('')
    window.scrollTo(0, 0)
  }, [location.pathname])

  if (isNature) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0d0d0d]/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-[#f5f0e8] transition-opacity hover:opacity-80 flex items-center gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo size="small" />
            <span
              className="text-[#8faa8f] text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '0.7rem', letterSpacing: '0.15em' }}
            >
              earth
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link
              to="/otherindustries"
              className="group relative text-[#f59e0b] text-xs font-medium tracking-[0.2em] uppercase pb-1"
            >
              Other Industries
              <span className="absolute bottom-0 left-0 h-[2px] bg-[#f59e0b] rounded-full transition-all duration-300 w-0 group-hover:w-full" />
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-[#f5f0e8]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden bg-[#0d0d0d] border-t border-[#2d4a2d]/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col px-6 py-4 gap-4">
                <Link
                  to="/otherindustries"
                  className="text-[#f59e0b] hover:text-[#f5f0e8] text-sm tracking-[0.15em] uppercase transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Other Industries
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    )
  }

  // Commercial page navbar (original)
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <a href="#hero" className={`transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}>
          <Logo size="small" />
        </a>

        {/* Desktop nav */}
        <nav className={`hidden md:flex items-center gap-8 transition-all duration-500 ${
          scrolled ? 'ml-auto' : 'mx-auto'
        }`}>
          {commercialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors duration-300 pb-1 ${
                scrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-amber-500 rounded-full transition-all duration-300 ${
                  activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 ml-8">
          <Link
            to="/"
            className="bg-[#2a5440] text-white border border-[#2a5440] hover:bg-transparent hover:text-[#2a5440] transition-all duration-300 px-4 py-1.5"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            visit earth
          </Link>
          <a
            href="#contact"
            className="gradient-amber hover:scale-105 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 glow-amber-sm"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden ml-auto p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-slate-100 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {commercialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    activeSection === link.href ? 'text-amber-500' : 'text-slate-600 hover:text-amber-500'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/"
                className="bg-[#2a5440] text-white border border-[#2a5440] hover:bg-transparent hover:text-[#2a5440] transition-all duration-300 px-4 py-1.5 text-center mt-2"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
                onClick={() => setMenuOpen(false)}
              >
                visit earth
              </Link>
              <a
                href="#contact"
                className="gradient-amber text-white font-semibold px-5 py-2.5 rounded-full text-center transition-all mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
