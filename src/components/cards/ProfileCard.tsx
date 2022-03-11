import { EmailIcon, GithubIcon, ProfileIcon, TwitterIcon, ZennIcon } from "components"
import Image from "next/image"
import React, { FC } from "react"

type Props = {}

export const ProfileCard: FC<Props> = (props) => {
  const {} = props

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-xl">
        <Image
          src="/neko.jpg"
          alt="neko icon"
          className="object-contain w-40 h-40"
          width="160"
          height="160"
        />
      </div>

      <h2 className="mt-4 text-xl font-bold">Marina</h2>
      <p className="mt-2 text-sm font-medium">Software Engineer</p>

      {/* <p className="mt-3 text-xs text-center text-gray-500">React Native Lover</p> */}

      <ul className="flex flex-row mt-4 space-x-2">
        <ProfileIcon href="https://github.com/marina-ki" name="github">
          <GithubIcon />
        </ProfileIcon>
        <ProfileIcon href="https://zenn.dev/marin_a___" name="zenn">
          <ZennIcon color="currentColor" />
        </ProfileIcon>
        <ProfileIcon href="https://twitter.com/marin_a___" name="twitter">
          <TwitterIcon />
        </ProfileIcon>
        <ProfileIcon href="mailto:k810marina&#64;gmail.com" name="email">
          <EmailIcon />
        </ProfileIcon>
      </ul>
    </div>
  )
}
