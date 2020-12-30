import { PostItem } from "../types";
import { PostList, Logo } from "../components";
import posts from "../../.contents/posts.json";
import { Header } from "../components";

export default function Home({}) {
  return (
    <>
      <Header />
      <section>
        <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-10 mb-8">
          Articles
        </h2>
        <PostList items={posts as PostItem[]} />
      </section>
    </>
  );
}
