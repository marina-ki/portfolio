import { ArticleIndexCard } from "components"
import React, { FC } from "react"
import { Article } from "types"

type Props = {
  contents: Article[]
  totalCount: number
  currentPage: number
}

export const BlogIndex: FC<Props> = ({ contents, totalCount, currentPage }) => {
  return (
    <div className="pb-8">
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {contents.map((article) => (
          <li key={article.id}>
            <ArticleIndexCard article={article} />
          </li>
        ))}
      </ul>
      {/* <Pagination totalCount={totalCount} perPage={BLOG_PER_PAGE} currentPage={currentPage} /> */}
    </div>
  )
}
