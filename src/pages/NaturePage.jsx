import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import './NaturePage.css'

// Stock images — replace all with real 8th Wonder drone content
const HERO_IMAGE = 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80'

const gallery = [
  { label: 'Rainforest Canopy Survey', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80' },
  { label: 'Reef & Coastal Mapping', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80' },
  { label: 'Surf Documentary', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80' },
]

const services = [
  {
    tag: 'conservation',
    title: 'ecology & wildlife',
    desc: "monitoring, mapping, and visual storytelling for regeneration, habitat restoration, and environmental research. for projects that span years, not days.",
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
  },
  {
    tag: 'agriculture',
    title: 'farming & land',
    desc: "crop health, irrigation, boundary mapping, and seasonal records. practical aerial data that helps you see the full picture and help make better calls.",
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
  },
  {
    tag: 'government',
    title: 'councils & planning',
    desc: "infrastructure audits, flood mapping, and community planning. clear, compliant, and actually useful aerial records for decision-makers.",
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80',
  },
  {
    tag: 'sport & creative',
    title: 'athletes & artists',
    desc: "trail, surf, climb, ride — we capture athletes, creators, and artists in the beautiful environments they call their playground.",
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=600&q=80',
  },
  {
    tag: 'film & story',
    title: 'documentary & film',
    desc: "we partner with directors, creators, and production houses to capture sequences that actually move people.",
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80',
  },
  {
    tag: 'impact',
    title: 'sustainability-first',
    desc: "low-impact flights, wildlife-conscious planning, and a genuine commitment to leaving every location better than we found it.",
    image: 'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=600&q=80',
  },
]

// Placeholder logos — replace with real client/partner logos
const logos = [
  'Red Bull',
  'Project Kaya',
  'Kojo',
  'Patagonia',
  'GoPro',
  'The North Face',
  'National Geographic',
  'Tourism & Events QLD',
]

export default function NaturePage() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    projectType: '',
    location: '',
    project: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('https://formspree.io/f/mzdjzwvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: '8th Wonder — Earth Enquiry',
        }),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      // silent fail — form stays visible so user can retry
    }
  }

  return (
    <div className="nature-page">

      {/* ===== 1. HERO ===== */}
      <section className="n-hero">
        <img className="n-hero__image" src={HERO_IMAGE} alt="Aerial rainforest canopy" />
        <div className="n-hero__overlay" />
        <div className="n-hero__content">
          <span className="n-tag n-tag--light">Drone Videography Studio</span>
          <h1>storytelling for the wild, the wonderful, and the people working to <em>protect it.</em></h1>
          <a href="#nature-enquire" className="n-hero__cta">Let's create something</a>
        </div>
        <div className="n-hero__scroll">
          <span>Scroll</span>
          <div className="n-hero__scroll-line" />
        </div>
      </section>

      {/* ===== 2. WHO WE ARE ===== */}
      <section className="n-intro">
        <div className="n-intro__inner">
          <div className="n-intro__left">
            <span className="n-tag n-tag--green">Who we are</span>
            <h2>
              a videography studio<br />
              with a focus and dedication<br />
              to nature.
            </h2>
          </div>
          <div className="n-intro__right">
            <p>
              we're a small crew based in south east queensland obsessed with capturing
              the natural world. forests, coastlines, farmland,
              wildlife — if it's outdoors, we want to film it.
            </p>
            <p>
              big productions to passion projects — we're here for all of it.
              sustainability isn't a buzzword for us, it's how we fly.
            </p>
            <p>
              we want to help you tell your story.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 3. WHAT WE DO ===== */}
      <section className="n-services">
        <div className="n-services__inner">
          <div className="n-services__header">
            <span className="n-tag n-tag--light">Specialties</span>
            <h2 className="n-services__title">our commitment.</h2>
          </div>
          <div className="n-services__card-grid">
            {services.map((s) => (
              <div key={s.title} className="n-svc-card">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="n-svc-card__overlay" />
                <div className="n-svc-card__content">
                  <span className="n-svc-card__tag">{s.tag}</span>
                  <div className="n-svc-card__title">{s.title}</div>
                  <div className="n-svc-card__desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. CAPABILITIES ===== */}
      <section className="n-capabilities">
        <div className="n-capabilities__inner">
          <div className="n-capabilities__header">
            <span className="n-tag n-tag--dark">Capabilities</span>
            <h2 className="n-capabilities__title">what we offer.</h2>
          </div>
          <div className="n-capabilities__grid">
            <div className="n-cap-col">
              <div className="n-cap-col__title">capture</div>
              <ul>
                <li>4K / 6K aerial video</li>
                <li>high-res aerial stills</li>
                <li>drone-mounted gimbal footage</li>
                <li>multi-flight project coverage</li>
                <li>GPS-tagged image logs</li>
              </ul>
            </div>
            <div className="n-cap-col">
              <div className="n-cap-col__title">post-production</div>
              <ul>
                <li>colour grading</li>
                <li>editorial cuts</li>
                <li>motion graphics & titles</li>
                <li>music licensing support</li>
                <li>export for broadcast, web, or social</li>
              </ul>
            </div>
            <div className="n-cap-col">
              <div className="n-cap-col__title">planning & logistics</div>
              <ul>
                <li>location scouting</li>
                <li>CASA flight approvals</li>
                <li>risk assessment & safety plans</li>
                <li>landowner coordination</li>
                <li>weather window scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. LOGO REEL ===== */}
      <section className="n-logos">
        <div className="n-logos__inner">
          <span className="n-tag n-tag--dark">Trusted By</span>
          <div className="n-logos__track">
            <div className="n-logos__slide">
              {/* Duplicate logos for seamless infinite scroll */}
              {[...logos, ...logos].map((name, i) => (
                <div key={`${name}-${i}`} className="n-logos__item">
                  {/* Replace with real SVG/PNG logos */}
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. SELECTED WORK ===== */}
      <section className="n-gallery">
        <div className="n-gallery__header">
          <span className="n-tag n-tag--light">Portfolio</span>
          <h2 className="n-gallery__title">selected work.</h2>
        </div>
        <div className="n-gallery__grid">
          {gallery.map((item) => (
            <div key={item.label} className="n-gal-item">
              <img src={item.image} alt={item.label} loading="lazy" />
              <div className="n-gal-item__info">
                <span className="n-gal-item__tag">Project</span>
                <span className="n-gal-item__name">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 7. ENQUIRE ===== */}
      <section className="n-enquire" id="nature-enquire">
        <div className="n-enquire__inner">
          <div className="n-enquire__left">
            <span className="n-tag n-tag--green">Get in Touch</span>
            <h2 className="n-enquire__headline">
              do you have a project<br />to execute?
            </h2>
            <p className="n-enquire__sub">
              fully planned project or half-baked idea — we love hearing
              about both. drop us a message and we'll figure out the
              rest together.
            </p>
            <a href="tel:+61460813424" className="n-enquire__phone">0460 813 424</a>
          </div>

          {submitted ? (
            <div style={{ padding: '3rem 0' }}>
              <p className="serif" style={{ fontSize: '1.75rem', color: '#1a1a1a', marginBottom: '1rem' }}>
                nice one!
              </p>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
                we'll get back to you within a day or two. looking forward to
                hearing more about what you're working on.
              </p>
            </div>
          ) : (
            <form className="n-form" onSubmit={handleSubmit}>
              <div className="n-form__row">
                <div className="n-form__field">
                  <label className="n-form__label" htmlFor="n-name">Name</label>
                  <input id="n-name" className="n-form__input" type="text" name="name" placeholder="your name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="n-form__field">
                  <label className="n-form__label" htmlFor="n-org">Organisation</label>
                  <input id="n-org" className="n-form__input" type="text" name="organisation" placeholder="company, crew, or just you" value={formData.organisation} onChange={handleChange} />
                </div>
              </div>

              <div className="n-form__row">
                <div className="n-form__field">
                  <label className="n-form__label" htmlFor="n-type">What kind of project?</label>
                  <select id="n-type" className="n-form__select" name="projectType" required value={formData.projectType} onChange={handleChange}>
                    <option value="" disabled>select...</option>
                    <option value="conservation">ecology / wildlife</option>
                    <option value="farming">farming / land</option>
                    <option value="council">councils / planning</option>
                    <option value="athletic">athletes / artists</option>
                    <option value="documentary">documentary / film</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="n-form__field">
                  <label className="n-form__label" htmlFor="n-location">Where?</label>
                  <input id="n-location" className="n-form__input" type="text" name="location" placeholder="gold coast, sunshine coast, etc." value={formData.location} onChange={handleChange} />
                </div>
              </div>

              <div className="n-form__field">
                <label className="n-form__label" htmlFor="n-project">Tell us about it</label>
                <textarea id="n-project" className="n-form__textarea" name="project" placeholder="what are you working on? even rough ideas are great — we love a good brainstorm." required value={formData.project} onChange={handleChange} />
              </div>

              <div className="n-form__field">
                <label className="n-form__label" htmlFor="n-email">Email <span style={{ color: '#c44' }}>*</span></label>
                <input id="n-email" className="n-form__input" type="email" name="email" placeholder="your@email.com" required value={formData.email} onChange={handleChange} />
              </div>

              <button type="submit" className="n-form__submit">
                Send it through &rarr;
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="n-footer">
        <div className="n-footer__inner">
          <div className="n-footer__brand">
            <Logo size="small" />
            <span
              className="n-footer__earth"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              earth
            </span>
          </div>
          <div className="n-footer__badges">
            <span className="n-tag n-tag--light">CASA Licensed</span>
            <span className="n-tag n-tag--light">Fully Insured</span>
            <span className="n-tag n-tag--light">SEQ Wide</span>
          </div>
          <Link to="/" className="n-footer__link">
            View Other Industries &rarr;
          </Link>
          <p className="n-footer__acknowledgement">
            8th Wonder acknowledges Aboriginal and Torres Strait Islander peoples as the First Australians and recognises their culture, history, diversity and deep connection to the Land, Seas and Waters of Queensland. We acknowledge the Traditional Custodians of the land and pay our respects to Elders past, present, and future.
          </p>
          <div className="n-footer__copy">
            &copy; {new Date().getFullYear()} 8th Wonder. South East Queensland.
          </div>
        </div>
      </footer>
    </div>
  )
}
