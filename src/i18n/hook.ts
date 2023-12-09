import { useEffect, useState } from "react"
import { defaultLang, type LangKeys } from "./ui"
import { getLangFromUrl, useTranslatedPath, useTranslations } from "./utils"

export function useTranslator() {
  const [lang, setLang] = useState<LangKeys>(defaultLang)

  useEffect(() => {
    setLang(getLangFromUrl(new URL(window.location.href)))
  }, [])

  const t = useTranslations(lang)
  const translatePath = useTranslatedPath(lang)

  return {
    t,
    translatePath,
    lang
  }
}
