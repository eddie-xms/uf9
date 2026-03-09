import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

/** Slot machine — cherry symbol */
export function SlotsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 5c1.5-2.5 4-3 6-2" />
      <path d="M13.2 5C12.4 3 10.4 2 8 2.5" />
      <circle cx="8" cy="11" r="4" />
      <circle cx="16" cy="11" r="4" />
      <path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
      <line x1="12" y1="15" x2="12" y2="21" />
    </svg>
  )
}

/** Roulette wheel — live casino */
export function LiveCasinoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    </svg>
  )
}

/** Trophy with ball — sportsbook */
export function SportsbookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="10" r="7" />
      <path d="M12 3a7 7 0 0 1 0 14" />
      <path d="M8.56 6.44l6.88 7.12" />
      <path d="M15.44 6.44l-6.88 7.12" />
      <path d="M12 3c-1.5 2-1.5 5 0 7s1.5 5 0 7" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="12" y1="17" x2="12" y2="20" />
    </svg>
  )
}

/** Playing cards — poker */
export function PokerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2" y="4" width="12" height="16" rx="2" />
      <path d="M8 8l-1.5 3L8 14l1.5-3L8 8z" fill="currentColor" />
      <rect x="10" y="4" width="12" height="16" rx="2" />
      <path d="M16 9v0" />
      <path d="M16 9c0-1 .5-2 1.5-2s1.5 1 1.5 2-.5 1.5-1.5 2.5L16 13h3" />
    </svg>
  )
}

/** Gaming controller — esports */
export function EsportsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 11h4M8 9v4" />
      <line x1="15" y1="12" x2="15.01" y2="12" />
      <line x1="18" y1="10" x2="18.01" y2="10" />
      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
    </svg>
  )
}

/** Lightning bolt — high frequency games */
export function HighFrequencyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" opacity="0.15" />
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

/** Chess knight — board & card games */
export function BoardGamesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 21h8M10 21v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3" />
      <path d="M9 17c-2-1-4-4-4-7 0-1.5.5-2.5 1.5-3.5L9 4l1 2h2l-1-3c2-.5 4 0 5 2 1.5 2.5 1 5.5-1 8-.5.6-1.2 1.2-2 1.7" />
      <circle cx="9" cy="8" r="1" fill="currentColor" />
    </svg>
  )
}
