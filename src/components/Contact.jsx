import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle } from 'lucide-react'

const services = [
  'Real Estate',
  'Construction, Development & Agriculture',
  'Marine & Tourism',
  'Hospitality & Events',
  'Sport & Recreation',
  'Schools & Education',
  'Documentaries & TV',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-5"
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
            Let's Do This
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Shoot Us a Message
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-6">
            Every great shoot starts with a conversation. Tell us what you've got in mind
            and we'll come back to you with a personalised quote — usually same day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6">Get in Touch Directly</h3>
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:eighthwndrproductions@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <Mail className="text-amber-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-slate-800 font-medium">eighthwndrproductions@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+61460813424" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <Phone className="text-amber-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Phone</p>
                    <p className="text-slate-800 font-medium">0460 813 424</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative bg-slate-900 rounded-2xl p-6 text-white overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }}
              />
              <div className="relative">
                <p className="font-bold text-lg mb-2">We'll Be in Touch</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  We respond to every enquiry personally, usually within a few hours.
                  Got something time-sensitive? Give us a call.
                </p>
                <p className="font-bold text-amber-400 text-base mb-2">Zero Pressure. Zero Commitment.</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Just a straight-up conversation about what you need and how we can help.
                  You've got absolutely nothing to lose.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full text-center gap-4 py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 rounded-full gradient-amber flex items-center justify-center">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">You're on the radar.</h3>
                <p className="text-slate-500 max-w-sm">
                  Your enquiry is in. We'll be in touch within 24 hours — usually much sooner.
                  Get ready to see your world from above.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                  className="mt-4 text-amber-500 font-semibold hover:underline cursor-pointer bg-transparent border-0"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700" htmlFor="name">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700" htmlFor="email">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="04XX XXX XXX"
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700" htmlFor="service">
                      Industry
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="border border-slate-200 rounded-xl px-4 py-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-white appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_0.5rem_center] bg-no-repeat"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700" htmlFor="message">
                    Tell us about your project <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What do you need? Where? When? Any other details that might help..."
                    className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="gradient-amber hover:scale-[1.02] text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer mt-2 glow-amber-sm"
                >
                  <Send size={18} />
                  Send Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
