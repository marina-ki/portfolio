export type Member = {
  name: string;
  avatarSrc: string;
  sources: string[];
  githubUsername: string;
  twitterUsername: string;
};

export type PostItem = {
  authorName: string;
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};

export type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};

export type Category = {
  name: string;
};

export type Article = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  category: Category | null;
};
