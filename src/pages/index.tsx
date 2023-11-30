import { getBlog } from "@src/lib"
import { Article } from "@src/types"
import { BLOG_PER_PAGE } from "@src/utils"
import { About, Header, Meta, ProfileCard } from "components"
import { GetStaticProps } from "next"
import { useEffect } from "react"

type Props = {
  contents: any
  totalCount: number
}

export default function Home(props: Props) {
  console.log("please Enter s on window")

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

        <About props={props} />
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
