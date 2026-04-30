import type { Book } from "./book";

export interface RecommendationItem {
  book: Book;
  score: number;
  reason: string;
}
