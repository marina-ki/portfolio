// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const BLOG_API = "https://marina.microcms.io/api/v1/blog";
const key = {
  headers: { "X-API-KEY": process.env.API_KEY ?? "" },
};

export const getBlog = async () => {
  try {
    return await fetch(BLOG_API, key)
      .then((res) => res.json())
      .catch(() => null);
  } catch (error) {}
};

export const getArticle = async (id: string) => {
  try {
    return await fetch(`${BLOG_API}/${id}`, key)
      .then((res) => res.json())
      .catch(() => null);
  } catch (error) {}
};
