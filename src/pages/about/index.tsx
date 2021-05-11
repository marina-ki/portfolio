import {
  AboutItem,
  HackathonList,
  Header,
  Meta,
  QualificationList,
  SkillList,
  Title,
} from "components"
import { getBlog } from "lib"

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
  {
    title: "フロントエンドエンジニア",
    date: "2021.01",
    body: "Blitz.jsに惹かれ、Blitz.jsを使ってwebサービスを開発。",
  },
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
      <main className="max-w-3xl px-4 mx-auto mb-10 sm:px-6 xl:max-w-5xl xl:px-0">
        <section className="border-b-2 border-gray-200">
          <Title>Skills</Title>
          <SkillList />
        </section>
        <section className="border-b-2 border-gray-200">
          <Title>Qualifications</Title>
          <QualificationList />
        </section>
        <section className="border-b-2 border-gray-200">
          <Title>Hackathon</Title>
          <HackathonList />
        </section>
        <Title>Education ＆ Career</Title>
        <ul className="p-2 bg-gray-50 rounded-3xl sm:p-5 xl:p-6">
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
