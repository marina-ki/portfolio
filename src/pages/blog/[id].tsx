import { Header, Meta } from "components"
import { format } from "date-fns"
import { getArticle, getBlog } from "lib"
import type { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import { Article, Draft } from "types"

// pages/blog/[id].js
export default function BlogId({ blog, preview }: { blog: Article | Draft; preview: boolean }) {
  const url = `https://og-image-1.vercel.app/${blog.title}.png`
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const s = document.createElement("script")
    s.setAttribute("src", "https://platform.twitter.com/widgets.js")
    s.setAttribute("async", "true")
    document.head.appendChild(s)
    setLoaded(true)
  }, [])

  return (
    <>
      <Meta title={blog.title} description="" image={encodeURI(url)} />
      <Header />
      {preview && (
        <a href="/api/clear-preview" aria-label="プレビュー解除">
          プレビューモードを解除
        </a>
      )}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        {loaded && (
          <div>
            <div className="space-y-1 text-center py-10 border-b border-gray-200">
              <p className="text-base leading-6 font-medium text-gray-500 my-3">
                {preview ? "※下書き" : format(new Date(blog.publishedAt), "yyyy/MM/dd")}
              </p>
              <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {blog.title}
              </h1>
              {blog.category && <div className="pt-2 text-blue-400">#{blog.category.name}</div>}
            </div>
            <article
              dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
              }}
              className="prose max-w-none pt-10 pb-8 prose-blue"
            />
          </div>
        )}
      </main>
    </>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await getBlog()
  const paths = data.contents.map((content: { id: string }) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context) => {
  const draftKey = (context.previewData as any)?.draftKey
  const id = context.params?.id
  const data = typeof id === "string" ? await getArticle(id, draftKey) : null
  return {
    props: {
      blog: data,
      preview: context.params?.preview || false,
    },
  }
}
