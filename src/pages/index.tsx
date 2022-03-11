import posts from "@.contents/posts.json"
import { getBlog } from "@src/lib"
import { Article, PostItem } from "@src/types"
import { BLOG_PER_PAGE } from "@src/utils"
import {
  About,
  AboutSection,
  BlogIndex,
  ExternalLinkIcon,
  Header,
  Meta,
  PostList,
  ProfileCard,
  SkillList,
} from "components"
import { GetStaticProps } from "next"
import Link from "next/link"
import { useEffect } from "react"

type Props = {
  contents: any
  totalCount: number
}
export default function Home(props: Props) {
  console.log("please Enter s on window")
  const { contents, totalCount } = props

  const escFunction = (e: KeyboardEvent) => {
    if (e.keyCode == 83) {
      const log = "🍺".repeat(10000)
      console.log(log)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false)
  }, [])

  return (
    <>
      <Meta
        title="Portfolio"
        description="Marina | Software Engineer."
        image="https://images.microcms-assets.io/protected/ap-northeast-1:7b46820b-9e1b-4aab-ba38-e994b4176f3c/service/marina/media/marinya.png"
      />
      <Header />
      <main className="max-w-3xl px-4 mx-auto my-10 sm:px-6 xl:max-w-5xl xl:px-0">
        <section className="mb-10">
          <ProfileCard />
        </section>

        <About />

        <AboutSection title="Articles">
          <PostList items={posts as PostItem[]} />
        </AboutSection>
        <AboutSection title="Blog">
          <BlogIndex {...{ contents, totalCount, currentPage: 1 }} />
        </AboutSection>
        <AboutSection title="Skills">
          <SkillList />
        </AboutSection>
        <AboutSection title="Others" isEnd>
          <Link href="https://tech.marinya.dev">
            <a className="inline-flex text-blue-400" target="blank">
              <p>読んだ記事一覧</p>
              <ExternalLinkIcon />
            </a>
          </Link>
        </AboutSection>
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
