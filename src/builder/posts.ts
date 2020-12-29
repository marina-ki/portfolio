import fs from "fs-extra";
import Parser from "rss-parser";
import { member } from "../../member";
import { FeedItem, Member, PostItem } from "../types";

export default {};

const parser = new Parser();

async function fetchFeedItems(url: string) {
  const feed = await parser.parseURL(url);

  if (!feed?.items?.length) return [];

  // return item which has title and link
  return feed.items
    .map(({ title, contentSnippet, link, isoDate }) => {
      return {
        title,
        contentSnippet: contentSnippet?.replace(/\n/g, ""),
        link,
        isoDate,
        dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
      };
    })
    .filter(({ title, link }) => title && link) as FeedItem[];
}

async function getFeedItemsFromSources(sources: undefined | string[]) {
  if (!sources?.length) return [];
  let feedItems: FeedItem[] = [];
  try {
    for (const url of sources) {
      const items = await fetchFeedItems(url);
      if (items) feedItems = [...feedItems, ...items];
    }
    return feedItems;
  } catch (error) {}
}

async function getMemberFeedItems(member: Member): Promise<PostItem[]> {
  const { name, sources } = member;
  const feedItems = await getFeedItemsFromSources(sources);
  if (!feedItems) return [];

  let postItems = feedItems.map((item) => {
    return {
      ...item,
      authorName: name,
    };
  });

  return postItems;
}

(async function () {
  const items = await getMemberFeedItems(member);
  items.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds);
  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/posts.json", items);
})();
