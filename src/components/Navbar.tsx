import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

interface NavLink {
  href: string
  label: string
}

const links: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [dark, setDark] = useState(() => window.__initialTheme ?? true)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold gradient-text">
            SM.
          </a>

          <div className="hidden md:flex gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-base text-gray-700 dark:text-gray-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="theme-toggle p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link text-gray-700 dark:text-gray-200"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar