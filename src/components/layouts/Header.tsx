import { Logo, MenuIcon } from "@src/components/icons"
import Link from "next/link"
import React, { FC } from "react"
import { LangSwitcher } from ".."

type Props = {}

export const Header: FC<Props> = (props: Props) => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="items-center md:flex">
          <Link href="/">
            <a className="block" aria-label="トップに移動">
              <Logo />
            </a>
          </Link>
        </div>

        <div className="flex text-sm">
          {/* <Link href="/blog">
            <a
              className="font-medium text-gray-500 hover:text-gray-900"
              aria-label="ブログページに移動"
            >
              Blog
            </a>
          </Link> */}
          <div className="pr-8">
            <LangSwitcher />
          </div>

          {/* <Link href="/articles">
            <a
              className="ml-4 text-gray-700 hover:text-gray-900 sm:ml-12"
              aria-label="articlesページに移動"
            >
              Articles
            </a>
          </Link> */}
          <MenuIcon />
          {/* <Link href="/contact">
            <a className="ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12">
              Contact
            </a>
          </Link> */}
        </div>
      </div>
    </header>
  )
}
