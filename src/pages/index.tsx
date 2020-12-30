import { PostItem } from "../types";
import { PostList, Logo, Title } from "../components";
import posts from "../../.contents/posts.json";
import { Header, SkillList, ProfileCard } from "../components";

export default function Home({}) {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto  my-10 px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <section className="mb-10">
          <ProfileCard />
        </section>

        <section>
          <Title>Articles</Title>
          <PostList items={posts as PostItem[]} />
        </section>
      </main>
    </>
  );
}
