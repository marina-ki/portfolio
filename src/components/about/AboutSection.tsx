import { Title } from "@src/components/Title"
import React, { FC } from "react"

type Props = {
  title: string
}

export const AboutSection: FC<Props> = (props) => {
  const { children, title } = props

  return (
    <section className="pb-4 border-b-2 border-gray-200">
      <Title>{title}</Title>
      {children}
    </section>
  )
}
