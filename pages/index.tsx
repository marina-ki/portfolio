import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Article } from "../model/Article";
import { getBlog } from "./api/index";

export default function Home({ blog }: { blog: Article[] }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
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
      blog: data.contents,
    },
  };
};
