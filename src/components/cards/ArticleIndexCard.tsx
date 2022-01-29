import { format } from "date-fns"
import Link from "next/link"
import React, { FC } from "react"
import { Article } from "types"

type Props = {
  article: Article
}

export const ArticleIndexCard: FC<Props> = (props): JSX.Element => {
  const {
    article: { id, title, publishedAt, category },
  } = props

  return (
    <Link href={`/blog/${id}`}>
      <a
        className="flex flex-col max-w-sm px-8 py-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:shadow-lg"
        aria-label={title}
      >
        <div className="mt-4 text-base font-medium text-gray-700">{title}</div>
        <div className="flex items-center justify-between mt-4">
          {category ? (
            <div className="flex items-center justify-center">
              <div className="px-2 py-1 text-sm text-white bg-gray-600 rounded">
                {category.name}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <span className="text-sm font-light text-gray-600">
            {format(new Date(publishedAt), "yyyy/MM/dd")}
          </span>
        </div>
      </a>
    </Link>
  )
}
