import React, { FC, useState, useEffect } from "react";
import { skills } from "../utils/skills";
import { SkillIcon } from "./SkillIcon";

type Props = {};

export const SkillList: FC<Props> = (props) => {
  const {} = props;

  return (
    <div className="pb-8">
      {skills.map((skill) => (
        <div className="inline-block pr-4 pb-2">
          <SkillIcon name={skill.name} />
        </div>
      ))}
    </div>
  );
};
