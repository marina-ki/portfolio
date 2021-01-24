import { getBlog } from "lib"
import { Header, QualificationList, Title, AboutItem, SkillList, Meta } from "components"

const contents = [
  { title: "東京大学理科一類 入学", date: "2017.04" },
  { title: "東京大学精密工学科 進学", date: "2019.04" },
  { title: "休学", date: "2019.04" },
  {
    title: "バックエンドエンジニア",
    date: "2019.08",
    body: "友人の起業したスタートアップでバックエンドエンジニアとして携わる。主にRailsを使用。",
  },
  {
    title: "バックエンドエンジニア",
    date: "2019.12",
    body: "現在の会社にバックエンドエンジニアとしてインターンを始める。主にRailsを使用。",
  },
  {
    title: "モバイルエンジニア",
    date: "2020.02",
    body:
      "デザインが形になるところに感動を感じ，フロントエンドエンジニア・モバイルエンジニアになろうと決める。主にReact Nativeを使用してアプリ開発をする。",
  },
  { title: "復学", date: "2020.10" },
]

export default function About() {
  return (
    <>
      <Meta
        title="Portfolio - about me"
        description="Marina | Mobile Engineer."
        image="https://images.microcms-assets.io/protected/ap-northeast-1:7b46820b-9e1b-4aab-ba38-e994b4176f3c/service/marina/media/marinya.png"
      />
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-10">
        <section className="border-b-2 border-gray-200">
          <Title>Skills</Title>
          <SkillList />
        </section>
        <section className="border-b-2 border-gray-200">
          <Title>Qualifications</Title>
          <QualificationList />
        </section>
        <Title>Education ＆ Career</Title>
        <ul className="bg-gray-50 rounded-3xl p-2 sm:p-5 xl:p-6">
          {contents.map((content, i) => (
            <AboutItem
              date={content.date}
              title={content.title}
              body={content.body}
              key={i}
              isLast={contents.length === i + 1}
              isFirst={i === 0}
            />
          ))}
        </ul>
      </main>
    </>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  const data = await getBlog()
  return {
    props: {
      contents: data.contents,
    },
  }
}
