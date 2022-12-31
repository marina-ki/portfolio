import type { NextApiRequest, NextApiResponse } from "next"
import fetch from "node-fetch"

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.slug) {
    return res.status(404).end()
  }
  const content = (await fetch(
    `https://marina.microcms.io/api/v1/blog/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { "X-API-KEY": process.env.API_KEY || "" } }
  )
    .then((res) => res.json())
    .catch((error) => null)) as { id: string }

  if (!content) {
    return res.status(401).json({ message: "Invalid slug" })
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  })
  res.writeHead(307, { Location: `/blog/${content.id}` }) //リダイレクト
  res.end("Preview mode enabled")
}
