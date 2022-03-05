import React, { FC } from "react"

type Props = {
  items: {
    title: string
    link: string
  }[]
}

export const LinkList: FC<Props> = (props) => {
  const { items } = props

  return (
    <div className="pb-8 prose">
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
