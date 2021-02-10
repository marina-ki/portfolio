import { BlogIndex } from "components"
import { getBlog } from "lib"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { Article } from "types"
import { BLOG_PER_PAGE } from "utils"

export default function Blog({
  contents,
  totalCount,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogIndex {...{ contents, totalCount }} />
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context) => {
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
