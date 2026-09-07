import { useEffect, useRef, useState } from 'react'

/** Revela a seção quando ela entra na tela. Respeita "reduzir movimento". */
export default function Reveal({ id, children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={
        'transition-all duration-700 ease-out ' +
        (visible ? 'translate-y-0 opacity-100 ' : 'translate-y-8 opacity-0 ') +
        className
      }
    >
      {children}
    </section>
  )
}
