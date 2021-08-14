import { ArticleIndexCard, ExternalLinkIcon, Header, Meta, Pagination } from "components"
import Link from "next/link"
import React, { FC } from "react"
import { Article } from "types"
import { BLOG_PER_PAGE } from "utils"

type Props = {
  contents: Article[]
  totalCount: number
  currentPage: number
}

export const BlogIndex: FC<Props> = ({ contents, totalCount, currentPage }) => {
  return (
    <>
      <Meta
        title="Blog"
        description="Marina | Mobile Engineer."
        image="https://images.microcms-assets.io/protected/ap-northeast-1:7b46820b-9e1b-4aab-ba38-e994b4176f3c/service/marina/media/marinya.png"
      />
      <Header />
      <main className="max-w-3xl px-4 mx-auto mt-10 sm:px-6 xl:max-w-5xl xl:px-0">
        <section className="mb-10">
          <Link href="https://tech.marinya.dev">
            <a className="inline-flex text-blue-400">
              <p>読んだ記事一覧</p>
              <ExternalLinkIcon />
            </a>
          </Link>
        </section>
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {contents.map((article) => (
            <li key={article.id}>
              <ArticleIndexCard article={article} />
            </li>
          ))}
        </ul>
        <Pagination totalCount={totalCount} perPage={BLOG_PER_PAGE} currentPage={currentPage} />
      </main>
    </>
  )
}
