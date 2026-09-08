import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { personalInfo } from '../data'
import Reveal from './Reveal'

function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const socials = [
    {
      label: 'GitHub',
      href: personalInfo.github,
      icon: <GithubIcon size={22} />,
      color: 'hover:border-gray-500 hover:text-gray-900 dark:hover:text-white',
    },
    {
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      icon: <LinkedinIcon size={22} />,
      color: 'hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: <Mail size={22} />,
      color: 'hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400',
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 relative bg-gray-50 dark:bg-[#08081c] text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="absolute top-[-60px] left-[-50px] w-80 h-80 rounded-full blur-[130px] bg-emerald-500/5 dark:bg-cyan-500/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-code text-xs tracking-widest text-blue-600 dark:text-violet-400">
              05
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text" style={{ fontFamily: "'Chicle', serif", fontWeight: 700 }}>
              Get In Touch
            </h2>
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/[6%]" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-gray-600 dark:text-[#9AA0BE] max-w-xl mb-14">
            Feel free to reach out for project collaborations, internships, research
            opportunities, or just to say hello.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <Reveal variant="left">
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-emerald-500" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-600 dark:text-[#9AA0BE] hover:text-blue-600 dark:hover:text-violet-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-blue-600 dark:text-violet-400" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-[#9AA0BE]">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="left" delay={100}>
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                      aria-label={s.label}
                      title={s.label}
                      className={`p-3 rounded-xl border border-gray-300 dark:border-white/10 text-gray-500 dark:text-gray-300 transition-all hover:-translate-y-1 hover:shadow-lg ${s.color}`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal variant="right">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-[#0e0e28] p-8 rounded-2xl border border-gray-200 dark:border-white/[6%] shadow-sm"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/[10%] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-violet-400 bg-transparent text-gray-900 dark:text-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/[10%] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-violet-400 bg-transparent text-gray-900 dark:text-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/[10%] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-violet-400 bg-transparent text-gray-900 dark:text-white transition-colors"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl font-semibold text-white inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #22D3EE)' }}
              >
                <Send size={18} /> {sent ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact