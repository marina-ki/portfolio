import { PostItem } from "../types";
import { PostList, Logo, Title } from "../components";
import posts from "../../.contents/posts.json";
import { Header, SkillList, ProfileCard } from "../components";
import { Meta } from "../components/common/Meta";
import { useEffect } from "react";

export default function Home({}) {
  console.log("please Enter s on window");

  const escFunction = (e: KeyboardEvent) => {
    if (e.keyCode == 83) {
      const log = "🍺".repeat(10000);
      console.log(log);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
  }, []);

  return (
    <>
      <Meta
        title="Portfolio"
        description="Marina | Mobile Engineer."
        image="https://images.microcms-assets.io/protected/ap-northeast-1:7b46820b-9e1b-4aab-ba38-e994b4176f3c/service/marina/media/marinya.png"
      />
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
