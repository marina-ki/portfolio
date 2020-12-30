import { Article } from "../../types";
import { getBlog } from "../../lib/api";
import { ArticleIndexCard, Header, Title } from "../../components";

export default function Blog({ contents }: { contents: Article[] }) {
  return (
    <>
      <Header />
      <Title>Email</Title>

      <Title>Twitter DM</Title>
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
