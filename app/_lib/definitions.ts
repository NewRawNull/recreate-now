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
/* TODO: Remove Reacts, SubReacts, Comment, and PostItem once database integrated */

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

/* Database types */
/* Thought process? Should I use NoSQL instead of this Goofy Ahh database */
export type DbUser = {
  id: string;
  name: string;
  password_hash: string;
};

export type DbPost = {
  id: string;
  author_id: string; // FOREIGN => dbUser.id
  description?: string;
  image?: string;
};

export type DbComment = {
  id: string;
  author_id: string; // FOREIGN => dbUser.id
  post_id: string; // FOREIGN => dbPost.id
  description: string;
};

export type DbPostReaction = {
  id: string;
  post_id: string; // FOREIGN => dbPost.id
  user_id: string; // FOREIGN => dbUser.id
  type:
    | "like"
    | "dislike"
    | "crying"
    | "laughing"
    | "vomiting"
    | "angry"
    | "boring";
};

export type DbCommentReaction = {
  id: string;
  comment_id: string; // FOREIGN => dbComment.id
  user_id: string; // FOREIGN => dbUser.id
  type: "like" | "dislike";
};
