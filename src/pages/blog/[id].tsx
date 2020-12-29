import { Article } from "../../types";
import { getArticle, getBlog } from "../../lib/api";
import { format } from "date-fns";

// pages/blog/[id].js
export default function BlogId({ blog }: { blog: Article }) {
  console.warn("blog", blog);
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <main>
        <div className="space-y-1 text-center pb-10 border-b border-gray-200">
          <p className="text-base leading-6 font-medium text-gray-500 my-3">
            {format(new Date(blog.publishedAt), "yyyy/MM/dd")}
          </p>
          <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {blog.title}
          </h1>
          {blog.category && (
            <div className="pt-2">
              <a className=" text-indigo-500">#{blog.category.name}</a>
            </div>
          )}
        </div>
        <article
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className="prose max-w-none pt-10 pb-8"
        />
      </main>
    </div>
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
