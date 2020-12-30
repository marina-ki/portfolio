import { Article } from "../../types";
import { getBlog } from "../../lib/api";
import { Header, Title } from "../../components";
import { AboutItem } from "../../components/AboutItem";

const contents = [
  { title: "桜蔭高等学校 卒業", date: "2017.03" },
  { title: "東京大学理科一類 入学", date: "2017.04" },
  { title: "東京大学精密工学科 進学", date: "2019.04" },
  { title: "休学", date: "2019.04" },
  {
    title: "バックエンドエンジニア",
    date: "2019.08",
    body:
      "友人の起業したスタートアップでバックエンドエンジニアとして携わる。主にRailsを使用。",
  },
  {
    title: "バックエンドエンジニア",
    date: "2019.12",
    body:
      "現在の会社にバックエンドエンジニアとしてインターンを始める。主にRailsを使用。",
  },
  {
    title: "モバイルエンジニア",
    date: "2020.02",
    body:
      "デザインが形になるところに感動を感じ，フロントエンドエンジニア・モバイルエンジニアになろうと決める。主にReact Nativeを使用してアプリ開発をする。",
  },
  { title: "復学", date: "2020.10" },
];
export default function About() {
  return (
    <>
      <Header />
      <div className="h-screen max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <Title>About</Title>
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
      </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  const data = await getBlog();
  return {
    props: {
      contents: data.contents,
    },
  };
};
