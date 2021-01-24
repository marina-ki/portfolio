import React, { FC } from "react"
import { skills } from "utils"
import {
  ApolloIcon,
  BlitzIcon,
  CssIcon,
  GraphqlIcon,
  HtmlIcon,
  JavaScriptIcon,
  RailsIcon,
  ReactIcon,
  RubyIcon,
  TypeScriptIcon,
} from "./icons"

type Props = {
  name: typeof skills[number]["name"]
}

export const SkillIcon: FC<Props> = (props) => {
  const { name } = props

  switch (name) {
    case "React":
      return <ReactIcon />
    case "GraphQL":
      return <GraphqlIcon />
    case "Apollo":
      return <ApolloIcon />
    case "TypeScript":
      return <TypeScriptIcon />
    case "JavaScript":
      return <JavaScriptIcon />
    case "html":
      return <HtmlIcon />
    case "css":
      return <CssIcon />
    case "blitz":
      return <BlitzIcon />
    case "Ruby":
      return <RubyIcon />
    case "RubyOnRails":
      return <RailsIcon />
    default:
      return null
  }
}
