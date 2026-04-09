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
  passwordHash: string;
};

export type DbPost = {
  id: string;
  authorId: string; // FOREIGN => dbUser.id
  description?: string;
  image?: string;
};

export type DbComment = {
  id: string;
  authorId: string; // FOREIGN => dbUser.id
  postId: string; // FOREIGN => dbPost.id
  description: string;
};

export type DbPostReaction = {
  id: string;
  postId: string; // FOREIGN => dbPost.id
  userId: string; // FOREIGN => dbUser.id
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
  commentId: string; // FOREIGN => dbComment.id
  userId: string; // FOREIGN => dbUser.id
  type: "like" | "dislike";
};

/* Post Content Definitions (Newer) */
export type PostData = {
  postId: string;
  description: string;
  authorName: string;
  image: string;
  likesCount: number;
  dislikesCount: number;
  cryingCount: number;
  laughingCount: number;
  vomitingCount: number;
  angryCount: number;
  boringCount: number;
};
