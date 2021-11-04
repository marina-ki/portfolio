import posts from "@.contents/posts.json"
import { Header, Meta, PostList, Title } from "@src/components"
import { PostItem } from "@src/types"
import { BlogIndex } from "components"
import { getBlog } from "lib"
import { GetStaticProps } from "next"
import React from "react"
import { Article } from "types"
import { BLOG_PER_PAGE } from "utils"

type Props = {
  contents: any
  totalCount: number
}

export default function Articles(props: Props) {
  const { contents, totalCount } = props

  return (
    <>
      <Meta
        title="Portfolio"
        description="Marina | Mobile Engineer."
        image="https://images.microcms-assets.io/protected/ap-northeast-1:7b46820b-9e1b-4aab-ba38-e994b4176f3c/service/marina/media/marinya.png"
      />
      <Header />
      <main className="max-w-3xl px-4 mx-auto my-10 sm:px-6 xl:max-w-5xl xl:px-0">
        <section>
          <Title>Articles</Title>
          <PostList items={posts as PostItem[]} />
        </section>
        <section>
          <Title>Blog</Title>
          <BlogIndex {...{ contents, totalCount, currentPage: 1 }} />
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const data: {
    contents: Article[]
    totalCount: number
  } = await getBlog({ offset: 0, limit: BLOG_PER_PAGE })
  return {
    props: {
      contents: data.contents,
      totalCount: data.totalCount,
    },
  }
}
