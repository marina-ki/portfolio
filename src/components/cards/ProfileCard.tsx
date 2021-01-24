import { EmailIcon, GithubIcon, ProfileIcon, TwitterIcon, ZennIcon } from "components"
import React, { FC } from "react"

type Props = {}

export const ProfileCard: FC<Props> = (props) => {
  const {} = props

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg border border-gray-200">
      <div className="shadow-xl border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img src="/neko.jpg" alt="kamichan" className="h-40 w-40 object-contain" />
      </div>

      <h2 className="mt-4 font-bold text-xl">Marina</h2>
      <p className="mt-2 text-sm font-medium">Mobile Engineer | Backend Engineer</p>

      <p className="text-xs text-gray-500 text-center mt-3">React Native Lover</p>

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
