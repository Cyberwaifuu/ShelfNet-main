export type BookSource = "GOOGLE" | "LOCAL";

export interface Book {
  id: string;
  title: string;
  author: string;
  authors: string[];
  genre: string;
  categories: string[];
  tags: string[];
  publisher: string;
  year: number;
  difficulty: string;
  thumbnail: string | null;
  source: BookSource;
  googleId: string | null;
  avgRating: number;
  likesCount: number;
  readCount: number;
}
