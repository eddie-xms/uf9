export function EdgeArc({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left'
  return (
    <img
      src={isLeft ? '/icon/left.svg' : '/icon/right.svg'}
      alt=""
      className={`absolute top-1/2 -translate-y-1/2 h-[80%] w-auto opacity-15 dark:opacity-50 pointer-events-none hidden lg:block ${
        isLeft ? 'left-0' : 'right-0'
      }`}
    />
  )
}
