import { skillGroups } from '../data'
import Reveal from './Reveal'

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative bg-white dark:bg-[#040410] text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-hidden"
    >
      <div className="absolute top-[-60px] right-[-50px] w-72 h-72 rounded-full blur-[130px] bg-emerald-500/5 dark:bg-cyan-500/10 pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-50px] w-80 h-80 rounded-full blur-[120px] bg-blue-500/5 dark:bg-violet-600/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-code text-xs tracking-widest text-blue-600 dark:text-violet-400">
              04
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text" style={{ fontFamily: "'Chicle', serif", fontWeight: 700 }}>
              My Skills
            </h2>
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/[6%]" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-gray-600 dark:text-[#9AA0BE] max-w-xl mb-14">
            My technical toolkit across programming languages, machine learning, data
            science, and developer tools.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = group.icon
            return (
              <Reveal key={group.category} delay={gi * 80}>
                <div className="group h-full bg-gray-50 dark:bg-[#0e0e28] rounded-2xl border border-gray-200 dark:border-white/[6%] p-6 hover:border-gray-300 dark:hover:border-white/[12%] hover:-translate-y-1.5 transition-all overflow-hidden relative">
                  {/* Colored top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${group.color}, transparent)` }}
                  />

                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${group.color}14`, color: group.color }}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full border text-sm text-gray-700 dark:text-[#9AA0BE] hover:text-gray-900 dark:hover:text-white transition-colors border-gray-300 dark:border-white/[10%] hover:border-blue-400/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills