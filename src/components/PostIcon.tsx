import { ZennIcon } from "@src/components/icons"
import { PostItem } from "@src/types"
import Image from "next/image"
import React, { FC } from "react"

type Props = {
  sourceType: PostItem["sourceType"]
}

export const PostIcon: FC<Props> = (props) => {
  const { sourceType } = props

  if (sourceType === "zenn") {
    return <ZennIcon />
  } else if (sourceType === "qiita") {
    return <Image src="/icon/qiita.png" width="30" height="30" alt="qiita" />
  } else {
    return null
  }
}
