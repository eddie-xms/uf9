import { Gamepad2, Users, Trophy, Swords, Dice5, Zap, LayoutGrid } from 'lucide-react'

export const gameCategories = [
  {
    icon: Gamepad2,
    titleKey: 'games.slots.title',
    descriptionKey: 'games.slots.description',
    count: '500+',
    color: 'red' as const,
  },
  {
    icon: Users,
    titleKey: 'games.liveCasino.title',
    descriptionKey: 'games.liveCasino.description',
    count: '50+',
    color: 'red' as const,
  },
  {
    icon: Trophy,
    titleKey: 'games.sportsbook.title',
    descriptionKey: 'games.sportsbook.description',
    count: '1000+',
    color: 'red' as const,
  },
  {
    icon: Dice5,
    titleKey: 'games.p2pPoker.title',
    descriptionKey: 'games.p2pPoker.description',
    count: '100+',
    color: 'red' as const,
  },
  {
    icon: Swords,
    titleKey: 'games.esports.title',
    descriptionKey: 'games.esports.description',
    count: '200+',
    color: 'red' as const,
  },
  {
    icon: Zap,
    titleKey: 'games.highFrequency.title',
    descriptionKey: 'games.highFrequency.description',
    count: '150+',
    color: 'red' as const,
  },
  {
    icon: LayoutGrid,
    titleKey: 'games.boardGames.title',
    descriptionKey: 'games.boardGames.description',
    count: '100+',
    color: 'red' as const,
  },
]
