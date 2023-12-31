import { useLayoutEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { getRelativeLocaleUrl } from "astro:i18n"
import { useTranslator } from "@/i18n/hook"
import { Disclosure, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import { cn } from "../utils/ui"
import { siteConfig } from "@/utils/config"

const HEADER_THROTTLE = 120

export function FixedHeader() {
  const { t, lang } = useTranslator()
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, (value: number) => {
    let opacity = 0
    opacity = value > HEADER_THROTTLE ? 0.318 : value / 100
    return `rgba(255, 133, 106, ${opacity})`
  })
  const blur = useTransform(scrollY, (value: number) => {
    let blurValue = value >= 0 && value < 100 ? (value / 100) * 10 : 10

    return `blur(${blurValue}px)`
  })

  const [isOpen, setIsOpen] = useState(false)
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isOpen])

  return (
    <Disclosure as="header" className={cn("overflow-x-auto")}>
      {({ open }) => (
        <>
          <motion.div
            className="px-6 pt-4 pb-2 lg:px-10 lg:pt-8 lg:pb-6 flex justify-between items-center fixed z-40 top-0 inset-x-0 transition-colors duration-300 ease-in-out"
            style={{
              backgroundColor,
              backdropFilter: blur,
              WebkitBackdropFilter: blur,
            }}
          >
            <img src="/logo.svg" className="w-32" />

            <div className="hidden lg:flex justify-between items-center gap-12">
              <div className="flex gap-8 items-start">
                <a
                  href={siteConfig.engineering}
                  className="font-bold relative text-white hover:decoration-white decoration-transparent decoration-4 underline underline-offset-8 transition-colors py-2 px-4"
                >
                  {t("nav.project")}
                </a>

                <a
                  href={siteConfig.engineering}
                  className="font-bold relative text-white hover:decoration-white decoration-transparent decoration-4 underline underline-offset-8 transition-colors py-2 px-4"
                >
                  {t("nav.wamotopia")}
                </a>

                <a
                  href={siteConfig.guide}
                  className="font-bold relative text-white hover:decoration-white decoration-transparent decoration-4 underline underline-offset-8 transition-colors py-2 px-4"
                >
                  {t("nav.city-guide")}
                </a>

                <a
                  href={siteConfig.applyToJoinForm}
                  target="_blank"
                  className="font-bold relative text-white hover:decoration-white decoration-transparent decoration-4 underline underline-offset-8 transition-colors py-2 px-4"
                >
                  {t("nav.join")}
                </a>

                <a
                  href={siteConfig.applyGrantForm}
                  target="_blank"
                  className="font-bold relative text-white hover:decoration-white decoration-transparent decoration-4 underline underline-offset-8 transition-colors py-2 px-4"
                >
                  {t("nav.grant")}
                </a>
              </div>

              <a
                className="text-[#3b82f6] hover:font-bold"
                href={getRelativeLocaleUrl(lang === "en" ? "zh-cn" : "en", "/")}
              >
                <span className={cn(lang === "zh-cn" && "font-bold text-lg")}>
                  中文
                </span>{" "}
                /{" "}
                <span className={cn(lang === "en" && "font-bold text-lg")}>
                  En
                </span>
              </a>

              <div className="flex gap-5">
                <a href={siteConfig.twitter} target="_blank">
                  <img src="/x-logo.svg" className="w-5" />
                </a>
                <a href={siteConfig.telegram} target="_blank">
                  <img src="/telegram-logo.svg" className="w-5" />
                </a>
              </div>
            </div>

            <div className="flex items-center lg:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button
                className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-black"
                onClick={() => {
                  setIsOpen((x) => !x)
                }}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open nav menu</span>
                {open ? (
                  <XMarkIcon className="block h-12 w-12" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-12 w-12" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </motion.div>

          <Transition
            leave="transition-opacity"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as="nav"
            className="lg:hidden flex w-full bg-[#ff856a] bg-opacity-90"
          >
            <Disclosure.Panel className="flex fixed z-30 inset-0 w-full bg-inherit px-8 pt-[120px] overflow-auto">
              <div className="pb-3 w-full text-white text-2xl">
                <Disclosure.Button
                  as="a"
                  href={siteConfig.engineering}
                  className="uppercase block py-5 font-medium border-b border-white hover:opacity-80"
                >
                  {t("nav.project")}
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href={siteConfig.engineering}
                  className="uppercase block py-5 font-medium border-b border-white hover:opacity-80"
                >
                  {t("nav.wamotopia")}
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href={siteConfig.guide}
                  className="uppercase block py-5 font-medium border-b border-white hover:opacity-80"
                >
                  {t("nav.city-guide")}
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href={siteConfig.applyToJoinForm}
                  className="uppercase block py-5 font-medium border-b border-white hover:opacity-80"
                >
                  {t("nav.join")}
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
