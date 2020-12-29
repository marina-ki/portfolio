import { Article } from "../../types";
import { getBlog } from "../../lib/api";
import { ArticleIndexCard } from "../../components/cards";

export default function Blog({ contents }: { contents: Article[] }) {
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
export const getStaticProps = async (context: { params: { id: string } }) => {
  const data = await getBlog();
  return {
    props: {
      contents: data.contents,
    },
  };
};
