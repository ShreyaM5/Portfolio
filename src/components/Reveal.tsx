import { useEffect, useRef, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  variant?: 'up' | 'left' | 'right'
  delay?: number
}

function Reveal({ children, className = '', variant = 'up', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add('visible')
            }, delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const cls = variant === 'left' ? 'reveal-left' : variant === 'right' ? 'reveal-right' : 'reveal'

  return (
    <div ref={ref} className={`${cls} ${className}`}>
      {children}
    </div>
  )
}

export default Reveal
