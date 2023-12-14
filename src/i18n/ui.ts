export const languages = {
  en: "En",
  "zh-cn": "中文",
}

export const defaultLang = "zh-cn"

export const showDefaultLang = false

export const ui = {
  en: {
    "nav.project": "Wamo Project",
    "nav.wamotopia": "Wamotopia",
    "nav.city-guide": "City Guide",
    "nav.join": "Join",
    "hero.learn": "Apply for Builder Grant",
    "hero.join": "Join",
    "home.introduction": "WAMOTOPIA is a two-week cultural exchange event held in Chiang Mai.",
    "home.sub-introduction":
      "Bringing together the Web3 community and digital nomads, aiming to innovate, collaborate, and shape the future together.",
  },
  ["zh-cn"]: {
    "nav.project": "瓦猫工程",
    "nav.wamotopia": "瓦猫托邦",
    "nav.city-guide": "城市指南",
    "nav.join": "加入",
    "hero.learn": "申请瓦猫活动资助",
    "hero.join": "我想加入共创",
    "home.introduction": "WAMOTOPIA 是在清迈举办的为期两周的文化交汇活动",
    "home.sub-introduction":
      "融合了 Web3 社区和数字游民，旨在一起创新、协作，并共同塑造未来",
  },
} as const

export type LangKeys = keyof typeof ui
