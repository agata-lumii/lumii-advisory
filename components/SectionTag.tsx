'use client'

interface Props {
  children: React.ReactNode
  light?: boolean
}

export default function SectionTag({ children, light }: Props) {
  return (
    <div className={`flex items-center gap-4 mb-5 ${light ? 'text-gold' : 'text-gold'}`}>
      <div className="w-8 h-px bg-gold flex-shrink-0" />
      <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">
        {children}
      </span>
    </div>
  )
}
