import { Logo } from "@src/components/icons"
import Link from "next/link"
import { FC } from "react"

type Props = {}

export const Header: FC<Props> = (props) => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="items-center md:flex">
          <Link href="/">
            <div className="block" aria-label="トップに移動">
              <Logo />
            </div>
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
          <Link href="/articles">
            <div
              className="ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12"
              aria-label="articlesページに移動"
            >
              Articles
            </div>
          </Link>
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
