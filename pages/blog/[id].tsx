import { Article } from "../../model/Article";
import { getArticle, getBlog } from "../api";

// pages/blog/[id].js
export default function BlogId({ blog }: { blog: Article }) {
  console.warn("blog", blog);
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await getBlog();
  const paths = data.contents.map(
    (content: { id: string }) => `/blog/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await getArticle(id);
  return {
    props: {
      blog: data,
    },
  };
};
