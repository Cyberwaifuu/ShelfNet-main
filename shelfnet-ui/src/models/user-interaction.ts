export type UserInteractionType =
  | "FAVORITE"
  | "READ"
  | "WANT_TO_READ"
  | "RATING"
  | "REVIEW";

export interface UserInteraction {
  id: string;
  userId: string;
  bookId: string;
  type: UserInteractionType;
  rating?: number;
  review?: string;
}
