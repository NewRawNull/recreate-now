import type { IconType } from "react-icons";

export type UserReview = {
  name: string;
  activity: string;
  stars: number;
  review: string;
};

export type FunctionBarLink = {
  icon: IconType;
  name: string;
  href: string;
};

export type FunctionBarLinks = FunctionBarLink[];

/* Post Definitions */

export type Reacts = {
  likes?: number;
  dislikes?: number;
  crying?: number;
  laughing?: number;
  vomiting?: number;
  angry?: number;
  boring?: number;
};

export type SubReacts = {
  likes?: number;
  dislikes?: number;
};

export type Comment = {
  author: string;
  comment: string;
  reacts: SubReacts;
};

export type PostItem = {
  // Main Post Type
  id: string;
  author: string;
  description?: string;
  image?: string;
  reacts?: Reacts;
  comments?: Comment[];
};
