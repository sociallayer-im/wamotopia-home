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
    "nav.grant": "Apply for Builder Grant",
    "hero.housing": "Housing",
    "hero.learn": "Create Event",
    "hero.join": "Join",
    "home.introduction": "WAMOTOPIA is a two-week cultural exchange event held in Chiang Mai.",
    "home.sub-introduction":
      "Bringing together the Web3 community and digital nomads, aiming to innovate, collaborate, and shape the future together.",
  },
  ["zh-cn"]: {
    "nav.project": "瓦猫工程",
    "nav.wamotopia": "瓦猫托邦",
    "nav.city-guide": "城市指南",
    "nav.grant": "申请瓦猫活动资助",
    "nav.join": "加入瓦猫",
    "hero.housing": "住在瓦猫广场",
    "hero.learn": "发起活动",
    "hero.join": "我想加入共创",
    "home.introduction": "WAMOTOPIA 是在清迈举办的为期两周的文化交汇活动",
    "home.sub-introduction":
      "融合了 Web3 社区和数字游民，旨在一起创新、协作，并共同塑造未来",
  },
} as const

export type LangKeys = keyof typeof ui
