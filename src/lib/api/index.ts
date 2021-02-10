import { BLOG_API } from "utils"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const key = {
  headers: { "X-API-KEY": process.env.API_KEY ?? "" },
}

export const getBlog = async (args?: { offset: number; limit: number }) => {
  const params = args ? `?offset=${args.offset}&limit=${args.limit}` : ""
  try {
    return await fetch(`${BLOG_API}${params}`, key)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {}
}

export const getArticle = async (id: string, draftKey?: string) => {
  const params = draftKey ? `?draftKey=${draftKey}` : ""
  try {
    return await fetch(`${BLOG_API}/${id}${params}`, key)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {}
}
