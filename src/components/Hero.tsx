import { ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, MailIcon } from './BrandIcons'
import { personalInfo } from '../data'

function Hero() {
  const socials = [
    { href: personalInfo.github, label: 'GitHub', icon: GithubIcon },
    { href: personalInfo.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
    { href: `mailto:${personalInfo.email}`, label: 'Email', icon: MailIcon },
  ]

  const badges = ['B.Tech CSE (AI)', 'DRDO ISSA Intern', 'Springer Author', 'Flipkart GRiD Semi-Finalist']

  const marqueeItems = ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Reinforcement Learning', 'Deep Learning', 'C++', 'MySQL', 'Matplotlib', 'Seaborn', 'Git', 'GitHub']

  return (
    <section
      id="home"
      className="font-heading min-h-screen flex flex-col justify-center pt-16 bg-gray-50 dark:bg-[#040410] text-gray-800 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-100"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 rounded-full blur-[130px] bg-blue-500/10 dark:bg-violet-600/15 pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-50px] w-80 h-80 rounded-full blur-[110px] bg-emerald-500/10 dark:bg-cyan-500/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 animate-fade-in">
            <p className="text-sm text-blue-600 dark:text-violet-400 tracking-[0.3em] uppercase mb-4">
              Hi, I'm
            </p>
            <h1
              className="text-5xl md:text-7xl font-extrabold leading-[0.95] mb-6 text-gray-900 dark:text-white"
              style={{ fontFamily: "'HK Grotesk Wide', sans-serif" }}
            >
              <span className="gradient-text inline-block">{personalInfo.name}</span>
            </h1>

            <p className="text-lg mb-8 text-gray-600 dark:text-[#9AA0BE] max-w-xl">
              {personalInfo.heroDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((b) => (
                <span
                  key={b}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-colors"
                  style={{
                    color: '#3B82F6',
                    background: 'rgba(59,130,246,0.08)',
                    borderColor: 'rgba(59,130,246,0.25)',
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl font-semibold text-white inline-flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-transform"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #22D3EE)' }}
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl border font-semibold text-gray-800 dark:text-gray-100 border-gray-300 dark:border-violet-500/25 hover:border-blue-500 dark:hover:border-violet-400 transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={s.label}
                    className="p-3 border rounded-xl border-gray-300 dark:border-white/10 text-gray-600 dark:text-gray-300 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/5 hover:text-blue-600 dark:hover:text-white hover:border-blue-500 transition-all"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Photo frame */}
          <div className="lg:w-2/5 flex justify-center animate-slide-up">
            <div className="relative">
              {/* Soft glow behind */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-emerald-500/20 blur-3xl" />

              {/* Gradient border frame */}
              <div
                className="relative w-64 h-80 md:w-72 md:h-96 rounded-[2rem] p-[3px]"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #22D3EE, #10B981)' }}
              >
                <div className="w-full h-full rounded-[calc(2rem-3px)] bg-gray-100 dark:bg-[#08081c] overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}about.jpeg`}
                    alt="Shreya Maurya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Accent dots */}
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-500 animate-float" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-emerald-500 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="w-full overflow-hidden border-t border-gray-200 dark:border-white/5 mt-16 py-4">
        <div className="animate-marquee flex whitespace-nowrap gap-8 w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-xs tracking-widest text-gray-500 dark:text-[#4A4A6A] flex items-center gap-8"
            >
              {item} <span className="text-blue-500/50 dark:text-violet-400/50">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero