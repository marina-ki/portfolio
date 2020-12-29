import { Category } from "./Category";
export interface Article {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  category: Category | null;
}
