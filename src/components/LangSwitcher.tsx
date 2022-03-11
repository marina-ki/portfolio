import { useRouter } from "next/dist/client/router"
import React, { FC } from "react"

type Props = {}

export const LangSwitcher: FC<Props> = (props) => {
  const {} = props
  const aClassName = (active: boolean) =>
    `flex text-sm leading-6 font-semibold pt-3 pb-2.5 ${
      active ? "border-b-2" : ""
    } -mb-px text-sky-500 border-current`
  const { locale } = useRouter()
  console.log("🚀debug ~ file: LangSwitcher.tsx ~ line 11 ~ locale", locale)

  return (
    // <div className="flex gap-2 ml-4 font-medium text-gray-700  sm:ml-12 ">
    //   <p className="hover:border-b-2 border-gray-500">日本語</p>
    //   <p className="border-blue-700 border-b-2">English</p>

    // </div>
    <ul className="border-b border-slate-200 space-x-3 flex whitespace-nowrap dark:border-slate-200/5">
      <li>
        <h2>
          <a className={aClassName(locale === "en")} href="/">
            English
          </a>
        </h2>
      </li>
      <li>
        <h2>
          <a
            // className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700"
            href="/ja"
            className={aClassName(locale !== "en")}
          >
            日本語
          </a>
        </h2>
      </li>
    </ul>
  )
}
