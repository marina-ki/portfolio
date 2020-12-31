import { Article } from "../../types";
import { getBlog } from "../../lib/api";
import { ArticleIndexCard, Header } from "../../components";
import { Meta } from "../../components/common/Meta";

export default function Blog({ contents }: { contents: Article[] }) {
  return (
    <>
      <Meta
        title="Portfolio"
        description="Marina | Mobile Engineer."
        image="https://images.microcms-assets.io/protected/ap-northeast-1:7b46820b-9e1b-4aab-ba38-e994b4176f3c/service/marina/media/marinya.png"
      />
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-10">
        <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
