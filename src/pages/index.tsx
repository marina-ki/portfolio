import { PostItem } from "../types";
import { PostList, Logo, Title } from "../components";
import posts from "../../.contents/posts.json";
import { Header, SkillList } from "../components";

export default function Home({}) {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <section className="border-b-2 border-gray-200">
          <Title>Profile</Title>
          React Native Moblie Engineer
        </section>
        <section className="border-b-2 border-gray-200">
          <Title>Skills</Title>
          <SkillList />
        </section>
        <section>
          <Title>Articles</Title>
          <PostList items={posts as PostItem[]} />
        </section>
      </main>
    </>
  );
}
