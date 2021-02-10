import { BlogIndex } from "components"
import { getBlog } from "lib"
import { GetStaticProps } from "next"
import { Article } from "types"
import { BLOG_PER_PAGE } from "utils"

type Props = {
  contents: Article[]
  totalCount: number
}

export default function Blog({ contents, totalCount }: Props) {
  return <BlogIndex {...{ contents, totalCount, currentPage: 1 }} />
}

// データをテンプレートに受け渡す部分の処理を記述します
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
