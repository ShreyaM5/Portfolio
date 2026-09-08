import { BadgeCheck, Briefcase, ExternalLink, Users } from 'lucide-react'
import { experience, roles } from '../data'
import Reveal from './Reveal'

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 relative bg-white dark:bg-[#040410] text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-code text-xs tracking-widest text-blue-600 dark:text-violet-400">
              03
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text" style={{ fontFamily: "'Chicle', serif", fontWeight: 700 }}>
              Experience
            </h2>
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/[6%]" />
          </div>
        </Reveal>

        <div className="space-y-8 mb-16 mt-14">
          {experience.map((job, ji) => (
            <Reveal key={job.role + job.company} delay={ji * 100} variant="left">
              <div className="group relative bg-gray-50 dark:bg-[#0e0e28] rounded-2xl border border-gray-200 dark:border-white/[6%] p-8 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all hover:-translate-y-1.5">
                {/* Highlight bar */}
                <div
                  className="absolute inset-y-0 left-0 w-1 rounded-l-2xl opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(180deg, #3B82F6, #22D3EE)' }}
                />

                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] bg-blue-500/[6%] dark:bg-violet-600/[8%] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-500/10 dark:bg-violet-600/10 flex-shrink-0">
                    <Briefcase size={24} className="text-blue-600 dark:text-violet-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {job.role}
                      </h3>
                    </div>
                    <p className="text-blue-600 dark:text-violet-400 font-medium mt-1">
                      {job.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-[#5A5A80]">
                      {job.period} · {job.location}
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-700 dark:text-[#9AA0BE]">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="text-blue-500 dark:text-violet-400 mt-1">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {job.certificateUrl && (
                        <a
                          href={job.certificateUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-500/30 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                        >
                          <BadgeCheck size={16} /> {job.certificateLabel}
                        </a>
                      )}
                      {job.publicationUrl && (
                        <a
                          href={job.publicationUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/30 text-sm font-medium text-blue-600 dark:text-violet-400 hover:bg-blue-500/10 dark:hover:bg-violet-500/10 transition-colors"
                        >
                          <ExternalLink size={16} /> {job.publicationLabel}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Positions of responsibility */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10">
              <Users size={22} className="text-blue-600 dark:text-violet-400" />
            </span>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Positions of Responsibility
            </h3>
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/[6%]" />
          </div>
        </Reveal>
        <div className="space-y-4">
          {roles.map((r, ri) => (
            <Reveal key={r.role} delay={ri * 100}>
              <div className="group bg-gray-50 dark:bg-[#0e0e28] rounded-xl border border-gray-200 dark:border-white/[6%] p-5 hover:border-blue-400/40 hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Users size={18} className="text-blue-600 dark:text-violet-400" />
                  </span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {r.role}
                    </h4>
                    <p className="text-sm text-blue-600 dark:text-violet-400">{r.org}</p>
                    <p className="text-xs text-gray-500 dark:text-[#5A5A80] mb-2">{r.period}</p>
                    <p className="text-sm text-gray-600 dark:text-[#9AA0BE]">{r.details}</p>
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

export default Experience