import { range } from "@src/utils/commonFuns"
import { ChevronLeftIcon, ChevronRightIcon } from "components"
import Link from "next/link"
import React, { FC } from "react"

type Props = {
  totalCount: number
  currentPage: number
  perPage?: number
}

export const Pagination: FC<Props> = ({ totalCount, currentPage, perPage = 5 }) => {
  if (totalCount <= perPage) return null
  const maxPage = Math.ceil(totalCount / perPage)
  return (
    <div className="border-gray-200 border-t-2 mt-10 flex justify-between">
      <div className="w-10">
        {currentPage > 1 && (
          <Link href={`/blog/page/${currentPage - 1}`}>
            <a className="flex pt-3">
              <ChevronLeftIcon className="text-gray-500 w-6 h-6 hover:text-gray-900" />
            </a>
          </Link>
        )}
      </div>
      <ul className="flex">
        {range(1, maxPage).map((number, index) => {
          const isActive = currentPage === number
          return (
            <li key={index}>
              <Link href={`/blog/page/${number}`}>
                <a
                  className={`w-8 h-8 text-center flex items-center justify-center pt-4 ${
                    isActive
                      ? "text-indigo-500 border-t-4 border-indigo-500 -mt-0.5"
                      : "text-gray-500 border-opacity-100  hover:border-t-4 hover:border-indigo-500 hover:-mt-0.5"
                  }`}
                >
                  {number}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="w-10">
        {currentPage < maxPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <a className="flex pt-3">
              <ChevronRightIcon className="text-gray-500 w-6 h-6 hover:text-gray-900" />
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
