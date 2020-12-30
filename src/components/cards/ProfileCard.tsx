import React, { FC, useState, useEffect } from "react";
import { GithubIcon, TwitterIcon, ZennIcon, EmailIcon } from "../icons";
import { ProfileIcon } from "../ProfileIcon";

type Props = {};

export const ProfileCard: FC<Props> = (props) => {
  const {} = props;

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg border border-gray-200">
      <div className="shadow-xl border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img
          src="/neko.jpg"
          alt="kamichan"
          className="h-full w-full object-contain"
        />
      </div>

      <h2 className="mt-4 font-bold text-xl">Marina</h2>
      <h6 className="mt-2 text-sm font-medium">
        Mobile Engineer | Backend Engineer
      </h6>

      <p className="text-xs text-gray-500 text-center mt-3">
        React Native Lover
      </p>

      <ul className="flex flex-row mt-4 space-x-2">
        <ProfileIcon href="https://github.com/marina-ki">
          <GithubIcon />
        </ProfileIcon>
        <ProfileIcon href="https://zenn.dev/marin_a___">
          <ZennIcon color="currentColor" />
        </ProfileIcon>
        <ProfileIcon href="https://twitter.com/marin_a___">
          <TwitterIcon />
        </ProfileIcon>
        <ProfileIcon href="mailto:k810marina&#64;gmail.com">
          <EmailIcon />
        </ProfileIcon>
      </ul>
    </div>
  );
};
