import { GraduationCap, Star, Cpu, BrainCircuit, Database, GitBranch } from 'lucide-react'
import { education, coursework } from '../data'
import Reveal from './Reveal'

function About() {
  const focusAreas = [
    { icon: Cpu, label: 'Reinforcement Learning', color: '#F59E0B' },
    { icon: BrainCircuit, label: 'Machine Learning', color: '#7C3AED' },
    { icon: Database, label: 'Data Science & Analytics', color: '#06B6D4' },
    { icon: GitBranch, label: 'AI-Powered Solutions', color: '#3B82F6' },
  ]

  return (
    <section
      id="about"
      className="font-poppins py-20 bg-white dark:bg-[#08081c] text-gray-800 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute bottom-[-80px] right-[-60px] w-72 h-72 rounded-full blur-[120px] bg-blue-500/5 dark:bg-violet-600/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-14">
            <span className="font-code text-xs tracking-widest text-blue-600 dark:text-violet-400">
              01
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text" style={{ fontFamily: "'Chicle', serif", fontWeight: 700 }}>
              About Me
            </h2>
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/[6%]" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
          <div>
            <Reveal variant="left">
              <div className="flex items-center gap-6 mb-8">
                {/* Photo frame */}
                <div className="relative w-48 h-56 rounded-2xl overflow-hidden border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-[#08081c] flex-shrink-0">
                  <img
                    src="/about.jpeg"
                    alt="Shreya Maurya"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1"
                    style={{ background: 'linear-gradient(90deg, #3B82F6, #22D3EE)' }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    Who I Am
                  </h3>
                  <p className="text-gray-600 dark:text-[#9AA0BE] leading-relaxed">
                    Computer Science undergraduate specializing in AI at IGDTUW. My focus is
                    on Reinforcement Learning, Machine Learning, and building intelligent
                    systems that solve real-world problems.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="left" delay={100}>
              <div className="grid md:grid-cols-2 gap-4">
                {focusAreas.map((f) => {
                  const Icon = f.icon
                  return (
                    <div
                      key={f.label}
                      className="group flex items-center gap-3 bg-gray-50 dark:bg-[#0e0e28] p-4 rounded-xl border border-gray-200 dark:border-white/[6%] hover:border-gray-300 dark:hover:border-white/[12%] transition-all hover:-translate-y-1"
                    >
                      <span
                        className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: `${f.color}14`, color: f.color }}
                      >
                        <Icon size={22} />
                      </span>
                      <span className="font-medium text-sm text-gray-800 dark:text-gray-100">
                        {f.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>

          {/* Right column: Education + Coursework cards */}
          <div className="space-y-6">
            <Reveal variant="right">
              <div className="bg-gray-50 dark:bg-[#0e0e28] rounded-2xl border border-gray-200 dark:border-white/[6%] p-6 hover:border-gray-300 dark:hover:border-white/[12%] transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10 dark:bg-violet-600/10">
                    <GraduationCap size={22} className="text-blue-600 dark:text-violet-400" />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Education</h4>
                </div>
                <div className="space-y-5">
                  {education.map((ed) => (
                    <div key={ed.school} className="relative pl-5 border-l-2 border-gray-200 dark:border-white/[8%]">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-600 dark:bg-violet-400" />
                      <p className="font-semibold text-gray-900 dark:text-white">{ed.degree}</p>
                      <p className="text-sm text-blue-600 dark:text-violet-400">{ed.school}</p>
                      <p className="text-sm text-gray-600 dark:text-[#9AA0BE]">{ed.details}</p>
                      {ed.gpa && (
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                          ★ {ed.gpa}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 dark:text-[#5A5A80]">
                        {ed.period} · {ed.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="bg-gray-50 dark:bg-[#0e0e28] rounded-2xl border border-gray-200 dark:border-white/[6%] p-6 hover:border-gray-300 dark:hover:border-white/[12%] transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/10">
                    <Star size={22} className="text-emerald-500" />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 rounded-full border text-xs font-medium text-gray-700 dark:text-[#9AA0BE] border-gray-300 dark:border-white/[8%] hover:border-blue-500 transition-colors"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About