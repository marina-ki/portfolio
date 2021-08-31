import {
  AboutItem,
  AboutSection,
  HackathonList,
  Header,
  Meta,
  QualificationList,
  SkillList,
} from "components"
import { getBlog } from "lib"

const contents = [
  {
    title: "株式会社Porme",
    since: "2019.08",
    until: "2019.11",
    body: "友人の起業したスタートアップでバックエンドエンジニアとして携わる。主にRailsを使用。",
  },
  {
    title: "株式会社Palan",
    since: "2019.12",
    until: "now",
    body:
      "バックエンド(3ヶ月)→モバイル(１年)→フロントエンド(半年)と一通り経験。Rails、React Native、Blitz.js、GraphQLなどを使用。",
    isActive: true,
  },
  {
    title: "Appify Technologies, Inc.",
    since: "2021.05",
    until: "2021.08",
    body: "フロントエンド。ReactやGraphQLを使用。",
  },
  {
    title: "株式会社サイバーエージェント",
    since: "2021.06",
    body: "フロントエンド。Reactを使用。Amebaマンガでパフォーマンスを改善。",
  },
  {
    title: "株式会社メルカリ",
    since: "2021.08",
    until: "2021.09",
    body: "メルカリのweb版でフロントエンドをやる。Reactを使用。",
    isActive: true,
  },
  {
    title: "ピクシブ株式会社",
    since: "2021.10",
    until: "2021.12",
    body: "TODO",
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
        <AboutSection title="Skills">
          <SkillList />
        </AboutSection>
        <AboutSection title="Qualifications">
          <QualificationList />
        </AboutSection>
        <AboutSection title="Hackathon">
          <HackathonList />
        </AboutSection>
        <AboutSection title="Education">
          <div className="pb-8 prose">
            <ul>
              <li>東京大学工学部(23年卒)</li>
            </ul>
          </div>
        </AboutSection>
        <AboutSection title="Career">
          <ul className="p-2 bg-gray-50 rounded-3xl sm:p-5 xl:p-6">
            {contents.map((content, i) => (
              <AboutItem
                since={content.since}
                until={content.until}
                title={content.title}
                body={content.body}
                key={i}
                isLast={contents.length === i + 1}
                isFirst={i === 0}
                isActive={content.isActive}
              />
            ))}
          </ul>
        </AboutSection>
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
