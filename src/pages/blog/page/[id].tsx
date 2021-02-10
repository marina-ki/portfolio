import { BlogIndex } from "components"
import { getBlog } from "lib"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { Article } from "types"
import { BLOG_PER_PAGE, range } from "utils"

export default function BlogPageId({
  contents,
  totalCount,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogIndex {...{ contents, totalCount }} />
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const data = await getBlog()
  const paths = range(1, Math.ceil(data.totalCount / BLOG_PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  )
  return { paths, fallback: false }
}

// データを取得
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const offset = (Number(id) - 1) * BLOG_PER_PAGE
  const data: {
    contents: Article[]
    totalCount: number
  } = await getBlog({ offset, limit: BLOG_PER_PAGE })
  return {
    props: {
      contents: data.contents,
      totalCount: data.totalCount,
    },
  }
}
