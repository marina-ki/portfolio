import React, { FC, useState, useEffect } from "react";

type Props = {};

const qualifications = [
  { name: "Ruby技術者認定試験 Silver" },
  { name: "応用情報技術者試験" },
];

export const QualificationList: FC<Props> = (props) => {
  const {} = props;

  return (
    <div className="pb-8 prose">
      <ul>
        {qualifications.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
