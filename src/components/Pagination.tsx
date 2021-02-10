import { range } from "@src/utils/commonFuns"
import Link from "next/link"
import React, { FC } from "react"

type Props = {
  totalCount: number
  perPage?: number
}

export const Pagination: FC<Props> = ({ totalCount, perPage = 5 }) => {
  return (
    <ul>
      {range(1, Math.ceil(totalCount / perPage)).map((number, index) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
