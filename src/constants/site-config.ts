import type { Locale } from '@/i18n'

export const siteConfig = {
  contact: {
    telegram: 'https://t.me/uf9official',
    line: 'https://line.me/ti/p/@uf9',
    email: 'support@uf9.com',
    liveChat: 'https://uf9.com/chat',
  },

  social: {
    telegram: 'https://t.me/uf9channel',
    facebook: 'https://facebook.com/uf9official',
    instagram: 'https://instagram.com/uf9official',
    twitter: 'https://x.com/uf9official',
  },

  links: {
    register: 'https://uf9.com/register',
    login: 'https://uf9.com/login',
    downloadApp: 'https://uf9.com/download',
    gameLobby: 'https://uf9.com/games',
  },

  pdf: {
    shareholder: {
      en: { dir: '/pdf/en/uf9-shareholder', pages: 14 },
      'zh-CN': { dir: '/pdf/cn/uf9-shareholder', pages: 14 },
    } satisfies Record<Locale, { dir: string; pages: number }>,
    platform: {
      en: { dir: '/pdf/en/uf9-platform', pages: 14 },
      'zh-CN': { dir: '/pdf/cn/uf9-platform', pages: 14 },
    } satisfies Record<Locale, { dir: string; pages: number }>,
  },
} as const
