import { PostItem } from "@src/types";
import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import { ZennIcon } from "./icons";

type Props = {
  sourceType: PostItem["sourceType"];
};

export const PostIcon: FC<Props> = (props) => {
  const { sourceType } = props;

  if (sourceType === "zenn") {
    return <ZennIcon />;
  } else if (sourceType === "qiita") {
    return <Image src="/icon/qiita.png" width="30" height="30" alt="qiita" />;
  } else {
    return null;
  }
};
