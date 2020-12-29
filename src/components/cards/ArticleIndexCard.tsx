import React, { FC, useState, useEffect } from "react";
import { Article } from "../../types";
import Link from "next/link";
import { format } from "date-fns";

type Props = {
  article: Article;
};

export const ArticleIndexCard: FC<Props> = (props) => {
  const {
    article: { id, title, publishedAt },
  } = props;

  return (
    <Link href={`blog/${id}`}>
      <div className="h-30 w-30 overflow-ellipsis overflow-hidden">
        <a className="text-gray-800 overflow-hidden overflow-ellipsis">
          {title}
        </a>
        <p className="text-gray-500 text-sm">
          {format(new Date(publishedAt), "yyyy/MM/dd")}
        </p>
      </div>
    </Link>
  );
};
