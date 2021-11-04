import { ArticleIndexCard, ExternalLinkIcon, Title } from "components"
import Link from "next/link"
import React, { FC } from "react"
import { Article } from "types"

type Props = {
  contents: Article[]
  totalCount: number
  currentPage: number
}

export const BlogIndex: FC<Props> = ({ contents, totalCount, currentPage }) => {
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {contents.map((article) => (
          <li key={article.id}>
            <ArticleIndexCard article={article} />
          </li>
        ))}
      </ul>
      {/* <Pagination totalCount={totalCount} perPage={BLOG_PER_PAGE} currentPage={currentPage} /> */}
      <section className="mb-10">
        <Title>Others</Title>
        <Link href="https://tech.marinya.dev">
          <a className="inline-flex text-blue-400">
            <p>読んだ記事一覧</p>
            <ExternalLinkIcon />
          </a>
        </Link>
      </section>
    </>
  )
}
