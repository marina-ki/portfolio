import React, { FC } from "react"
import { skills } from "utils"
import { SkillIcon } from "./SkillIcon"

type Props = {}

export const SkillList: FC<Props> = (props) => {
  const {} = props

  return (
    <div className="pb-8">
      {skills.map((skill) => (
        <a className="inline-block pb-2 pr-4" href={skill.href}>
          <SkillIcon name={skill.name} />
        </a>
      ))}
    </div>
  )
}
