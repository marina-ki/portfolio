import React, { FC } from "react"

type Props = {
  date: string
  title: string
  body?: string
  isLast?: boolean
  isFirst?: boolean
}

export const AboutItem: FC<Props> = (props) => {
  const { title, date, body, isLast, isFirst } = props

  return (
    <li>
      <article>
        <div className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden">
          <h3 className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">
            {title}
          </h3>
          <time
            dateTime={date}
            className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0 text-gray-500"
          >
            {isLast ? (
              <svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-blue-400">
                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                <circle
                  cx="6"
                  cy="6"
                  r="11"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                ></circle>
                <path
                  d="M 6 -6 V -30"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  className="text-gray-200"
                ></path>
              </svg>
            ) : (
              <svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-gray-300">
                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                {!isFirst && (
                  <path
                    d="M 6 -6 V -30"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    className="text-gray-200"
                  ></path>
                )}
                <path
                  d="M 6 18 V 500"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  className="text-gray-200"
                ></path>
              </svg>
            )}

            {date}
          </time>
          {body && (
            <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0  text-gray-500">
              {body}
            </p>
          )}
        </div>
      </article>
    </li>
  )
}
