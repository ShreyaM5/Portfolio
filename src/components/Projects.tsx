import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { projects } from '../data'
import Reveal from './Reveal'

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative bg-gray-50 dark:bg-[#08081c] text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-code text-xs tracking-widest text-blue-600 dark:text-violet-400">
              02
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text" style={{ fontFamily: "'Chicle', serif", fontWeight: 700 }}>
              Projects
            </h2>
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/[6%]" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-gray-600 dark:text-[#9AA0BE] max-w-xl mb-14">
            Real-world projects spanning Reinforcement Learning, Machine Learning, and
            interactive data visualization.
          </p>
        </Reveal>

        <div className="space-y-10">
          {projects.map((project, pi) => (
            <Reveal key={project.title} delay={pi * 100}>
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/[6%] bg-white dark:bg-[#08081c] transition-all hover:border-blue-300 dark:hover:border-blue-500/30">
                {/* Gradient top bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: 'linear-gradient(90deg, #3B82F6, #22D3EE)' }}
                />

                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] bg-blue-500/5 dark:bg-violet-600/[8%] group-hover:opacity-100 transition-opacity opacity-0 pointer-events-none" />

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-code text-xs tracking-widest text-indigo-600 dark:text-indigo-400">
                      PROJECT 0{pi + 1}
                    </span>
                    <div className="h-px flex-1 bg-gray-200 dark:bg-white/[5%]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                    {project.title}
                  </h3>
                  <ul className="mb-6 space-y-2 text-gray-700 dark:text-[#9AA0BE] text-sm">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-blue-500 dark:text-violet-400 mt-1">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-white dark:bg-white/[4%] border border-gray-200 dark:border-white/[8%] text-[11px] text-gray-700 dark:text-[#9AA0BE] rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) =>
                      link.icon === 'github' ? (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-white/[8%] text-sm text-gray-700 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-500/40 transition-colors"
                        >
                          <GithubIcon size={16} /> {link.label}
                        </a>
                      ) : (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white hover:scale-[1.03] transition-transform"
                          style={{ background: 'linear-gradient(135deg, #3B82F6, #22D3EE)' }}
                        >
                          <ExternalLink size={16} /> {link.label}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects