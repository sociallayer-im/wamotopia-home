import { motion, useScroll, useTransform } from "framer-motion"
import { getRelativeLocaleUrl } from "astro:i18n"
import { useElementInViewportProgress } from "@/hooks/use-element-in-viewport-progress"
import { cn } from "../utils/ui"
import { useTranslator } from "@/i18n/hook"

export function FixedHeader() {
  const { t, lang } = useTranslator()
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, (value: number) => {
    let opacity = 0

    opacity = value > 90 ? 0.318 : value / 100

    return `rgba(255, 133, 106, ${opacity})`
  })
  const blur = useTransform(scrollY, (value: number) => {
    let blurValue = value >= 0 && value < 100 ? (value / 100) * 10 : 10

    return `blur(${blurValue}px)`
  })

  return (
    <motion.div
      className={cn(
        "px-10 pt-8 pb-4 z-20 flex items-start justify-between fixed top-0 inset-x-0 overflow-x-auto transition-colors duration-300 ease-in-out",
      )}
      style={{
        backgroundColor,
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
      }}
    >
      <img src="/logo.svg" className="w-32" />

      <div className="flex justify-between items-center gap-12">
        <div className="flex gap-8 items-start">
          <a
            href="/"
            className="font-bold relative text-white hover:decoration-white decoration-transparent decoration-4 underline underline-offset-8 transition-colors"
          >
            {t("nav.project")}
          </a>

          <a
            href="/"
            className="font-bold relative text-white hover:decoration-white decoration-transparent decoration-4 underline underline-offset-8 transition-colors"
          >
            {t("nav.wamotopia")}
          </a>

          <a
            href="/"
            className="font-bold relative text-white hover:decoration-white decoration-transparent decoration-4 underline underline-offset-8 transition-colors"
          >
            {t("nav.city-guide")}
          </a>

          <a
            href="/"
            className="font-bold relative text-white hover:decoration-white decoration-transparent decoration-4 underline underline-offset-8 transition-colors"
          >
            {t("nav.join")}
          </a>
        </div>

        <a
          className="text-[#3b82f6] hover:font-bold"
          href={getRelativeLocaleUrl(lang === "en" ? "zh-cn" : "en", "/")}
        >
          <span className={cn(lang === "zh-cn" && "font-bold text-lg")}>
            中文
          </span>{" "}
          / <span className={cn(lang === "en" && "font-bold text-lg")}>En</span>
        </a>

        <div className="flex gap-5">
          <a href="" target="_blank">
            <img src="/x-logo.svg" className="w-5" />
          </a>
          <a href="" target="_blank">
            <img src="/telegram-logo.svg" className="w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
