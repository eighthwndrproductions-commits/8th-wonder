import Hero from '../components/Hero'
import StatStrip from '../components/StatStrip'
import WhyDrone from '../components/WhyDrone'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Deliverables from '../components/Deliverables'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function CommercialPage() {
  return (
    <>
      <main>
        <Hero />
        <StatStrip />
        <WhyDrone />
        <Services />
        <Deliverables />
        <HowItWorks />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
