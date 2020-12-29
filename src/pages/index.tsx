import Head from "next/head";
import { PostItem } from "../types";
import { PostList } from "../components";
import posts from "../../.contents/posts.json";

export default function Home({}) {
  return (
    <div>
      <div className="border-t border-gray-200 pt-8 grid grid-cols-1 gap-y-6 lg:grid-cols-4 lg:gap-5">
        <div>
          <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-10 mb-8">
            Articles
          </h2>
        </div>
        <PostList items={posts as PostItem[]} />
      </div>
    </div>
  );
}
