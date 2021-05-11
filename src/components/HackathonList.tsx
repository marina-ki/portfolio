import React, { FC } from "react"

type Props = {}

const hackathons = [
  { title: "Open Hack U vol4", url: "https://hacku.yahoo.co.jp/hacku2020online4/", rank: "優秀賞" },
  {
    title: "Cyber Agent 2days Webフロントインターン",
    url: "https://www.cyberagent.co.jp/careers/students/event/detail/id=25319",
    rank: "３位",
  },
]

export const HackathonList: FC<Props> = (props) => {
  const {} = props

  return (
    <div className="pb-8 prose">
      <ul>
        {hackathons.map((item, i) => (
          <li key={i}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            ：{item.rank}
          </li>
        ))}
      </ul>
    </div>
  )
}
