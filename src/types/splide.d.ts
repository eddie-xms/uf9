declare module '@splidejs/react-splide' {
  import type { ComponentProps, ReactNode } from 'react'

  interface SplideProps extends ComponentProps<'div'> {
    options?: Record<string, unknown>
    'aria-label'?: string
    children?: ReactNode
  }

  interface SplideSlideProps extends ComponentProps<'li'> {
    children?: ReactNode
  }

  export const Splide: React.FC<SplideProps>
  export const SplideSlide: React.FC<SplideSlideProps>
}

declare module '@splidejs/react-splide/css'
