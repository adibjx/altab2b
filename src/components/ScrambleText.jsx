import { useEffect, useRef, useState } from 'react'

const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/'

export default function ScrambleText({ text, className, tick = 38, lockStep = 1.4, window: scrambleWindow = 9 }) {
  const [display, setDisplay] = useState(text)
  const intervalRef = useRef(null)

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(text)
      return
    }

    const total = text.length
    let frame = 0

    intervalRef.current = setInterval(() => {
      let out = ''
      let done = 0
      for (let i = 0; i < total; i++) {
        const ch = text[i]
        if (ch === ' ') {
          out += ' '
          done++
          continue
        }
        const lockAt = i * lockStep + scrambleWindow
        if (frame >= lockAt) {
          out += ch
          done++
        } else {
          out += POOL[Math.floor(Math.random() * POOL.length)]
        }
      }
      setDisplay(out)
      frame++
      if (done === total) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }, tick)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [text, tick, lockStep, scrambleWindow])

  return (
    <span className={className} aria-label={text} role="text">
      <span aria-hidden="true">{display}</span>
    </span>
  )
}
