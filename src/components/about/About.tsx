import { career, qualifications, trainingPrograms } from "@src/lib"
import { AboutItem, AboutSection, HackathonList, LinkList, SkillList } from "components"

export const About = () => {
  return (
    <>
      <AboutSection title="Education">
        <div className="pb-8 prose">
          <ul>
            <li>東京大学工学部４年</li>
          </ul>
        </div>
      </AboutSection>
      <AboutSection title="Career">
        <ul className="p-2 bg-gray-50 rounded-3xl sm:p-5 xl:p-6">
          {career.reverse().map((content, i) => (
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
    </>
  )
}
