import React, { FC } from "react"

type Props = {
  children: React.ReactNode
}

export const Title: FC<Props> = (props) => {
  const { children } = props

  return (
    <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-10 mb-8">{children}</h2>
  )
}
