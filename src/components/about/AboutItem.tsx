import React, { FC } from "react"

type Props = {
  since: string
  until?: string
  title: string
  body?: string
  isLast?: boolean
  isFirst?: boolean
  isActive?: boolean
}

export const AboutItem: FC<Props> = (props) => {
  const { title, since, until, body, isLast, isFirst, isActive } = props
  const hasUpperLine = !isFirst
  const hasBottomLine = !isLast

  return (
    <li>
      <article>
        <div className="relative grid items-start p-3 overflow-hidden md:grid-cols-8 xl:grid-cols-9 rounded-xl sm:p-5 xl:p-6">
          <h3 className="mb-1 font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 ml-9 md:ml-0">
            {title}
          </h3>
          <time
            dateTime={since}
            className="flex items-center row-start-1 mb-1 font-medium text-gray-500 md:col-start-1 md:col-span-2 md:row-end-3 md:mb-0"
          >
            <svg
              viewBox="0 0 12 12"
              className={`w-3 h-3 mr-6 overflow-visible ${
                isActive ? "text-blue-400" : "text-gray-300"
              }`}
            >
              {isActive ? (
                <>
                  <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                  <circle
                    cx="6"
                    cy="6"
                    r="11"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  ></circle>
                </>
              ) : (
                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
              )}
              {hasUpperLine && (
                <path
                  d="M 6 -6 V -45"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  className="text-gray-200"
                ></path>
              )}
              {hasBottomLine && (
                <path
                  d="M 6 18 V 500"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  className="text-gray-200"
                ></path>
              )}
            </svg>
            {since}
            {until ? (
              <>
                <br />-{until}
              </>
            ) : (
              <></>
            )}
          </time>
          {body && (
            <p className="text-gray-500 md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
              {body}
            </p>
          )}
        </div>
      </article>
    </li>
  )
}
