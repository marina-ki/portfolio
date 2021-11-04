import { About, Header, Meta, ProfileCard } from "components"
import { useEffect } from "react"

export default function Home() {
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

        <About />
      </main>
    </>
  )
}
