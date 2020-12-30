import React, { FC, useState, useEffect } from "react";
import { skills } from "@src/utils/skills";
import { HtmlIcon } from "./icons/HtmlIcon";
import { RubyIcon } from "./icons/RubyIcon";
import { RailsIcon } from "./icons/RailsIcon";
import {
  TypeScriptIcon,
  JavaScriptIcon,
  ReactIcon,
  GraphqlIcon,
  ApolloIcon,
  CssIcon,
  BlitzIcon,
} from "./icons";

type Props = {
  name: typeof skills[number]["name"];
};

export const SkillIcon: FC<Props> = (props) => {
  const { name } = props;

  switch (name) {
    case "React":
      return <ReactIcon />;
    case "GraphQL":
      return <GraphqlIcon />;
    case "Apollo":
      return <ApolloIcon />;
    case "TypeScript":
      return <TypeScriptIcon />;
    case "JavaScript":
      return <JavaScriptIcon />;
    case "html":
      return <HtmlIcon />;
    case "css":
      return <CssIcon />;
    case "blitz":
      return <BlitzIcon />;
    case "Ruby":
      return <RubyIcon />;
    case "RubyOnRails":
      return <RailsIcon />;
    default:
      return null;
  }
};
