import { Article } from "../../types";
import { getBlog } from "../../lib/api";
import { ArticleIndexCard, Header } from "../../components";

export default function Blog({ contents }: { contents: Article[] }) {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-10">
        <ul>
          {contents.map((article) => (
            <li key={article.id}>
              <ArticleIndexCard article={article} />
            </li>
          ))}
        </ul>
      </main>
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
