export const languages = {
  en: "En",
  'zh-cn': "中文",
}

export const defaultLang = "en"

export const showDefaultLang = false

export const ui = {
  en: {
    "nav.project": "Wamo Project",
    "nav.wamotopia": "Wamotopia",
    "nav.city-guide": "City Guide",
    "nav.join": "Join",
  },
  ['zh-cn']: {
    "nav.project": "瓦猫工程",
    "nav.wamotopia": "瓦猫托邦",
    "nav.city-guide": "城市指南",
    "nav.join": "加入",
  },
} as const

export type LangKeys = keyof typeof ui
