import React, { FC, useState, useEffect } from "react";

type Props = {
  href: string;
  name: string;
};

export const ProfileIcon: FC<Props> = (props) => {
  const { href, name, children } = props;

  return (
    <li>
      <a
        href={href}
        className="flex items-center justify-center text-gray-500 hover:text-blue-400"
        aria-label={name}
      >
        {children}
      </a>
    </li>
  );
};
