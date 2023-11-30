import posts from "@.contents/posts.json"
import { career, qualifications, trainingPrograms } from "@src/lib"
import { PostItem } from "@src/types"
import {
  AboutItem,
  AboutSection,
  BlogIndex,
  HackathonList,
  LinkList,
  PostList,
  SkillList,
} from "components"
type Props = {
  contents: any
  totalCount: number
}
export const About = (props: Props) => {
  const { contents, totalCount } = props

  return (
    <>
      <AboutSection title="Education">
        <div className="pb-8 prose">
          <ul>
            <li>東京大学2023年卒</li>
          </ul>
        </div>
      </AboutSection>
      <AboutSection title="Career">
        <ul className="p-2 bg-gray-50 rounded-3xl sm:p-5 xl:p-6">
          {career.map((content, i) => (
            <AboutItem
              since={content.since}
              until={content.until}
              title={content.title}
              body={content.body}
              key={i}
              isLast={career.length === i + 1}
              isFirst={i === 0}
              isActive={content.isActive}
            />
          ))}
        </ul>
      </AboutSection>
      <AboutSection title="Training Programs">
        <LinkList items={trainingPrograms} />
      </AboutSection>
      <AboutSection title="Qualifications">
        <LinkList items={qualifications} />
      </AboutSection>
      <AboutSection title="Hackathon">
        <HackathonList />
      </AboutSection>

      <AboutSection title="Skills">
        <SkillList />
      </AboutSection>

      <AboutSection title="Articles">
        <PostList items={posts as PostItem[]} />
      </AboutSection>

      <AboutSection title="Blog">
        <BlogIndex {...{ contents, totalCount, currentPage: 1 }} />
      </AboutSection>
    </>
  )
}
