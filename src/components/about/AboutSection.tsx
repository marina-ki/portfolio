import React, { FC } from "react"
import { Title } from "../Title"

type Props = {
  title: string
  isEnd?: boolean
}

export const AboutSection: FC<Props> = (props) => {
  const { children, title, isEnd } = props

  return (
    <section className={`pb-4 ${isEnd ? "" : "border-gray-200 border-b-2"}`}>
      <Title>{title}</Title>
      {children}
    </section>
  )
}
