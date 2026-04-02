'use client'

import { useRef } from 'react'

export default function MarqueeStrip() {
  const innerRef = useRef<HTMLDivElement>(null)

  const items = ['Digital Strategy', 'AI Enablement', 'Customer Experience', 'Ecommerce', 'MarTech', 'Growth']
  const doubled = [...items, ...items]

  const handleMouseEnter = () => {
    if (innerRef.current) {
      innerRef.current.style.animationPlayState = 'paused'
    }
  }

  const handleMouseLeave = () => {
    if (innerRef.current) {
      innerRef.current.style.animationPlayState = 'running'
    }
  }

  return (
    <div
      className="bg-gold py-7 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={innerRef}
        className="flex gap-20 items-center whitespace-nowrap"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-20 flex-shrink-0">
            <span className="font-display text-[18px] font-light italic text-near-black">{item}</span>
            <span className="w-1 h-1 rounded-full bg-near-black opacity-40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
