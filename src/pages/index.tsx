import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Article } from "../model/Article";
import { getBlog } from "../lib/api/index";
import { ArticleIndexCard } from "../components/cards";

export default function Home({ contents }: { contents: Article[] }) {
  return (
    <div>
      <ul>
        {contents.map((article) => (
          <li key={article.id}>
            <ArticleIndexCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await getBlog();
  return {
    props: {
      contents: data.contents,
    },
  };
};
