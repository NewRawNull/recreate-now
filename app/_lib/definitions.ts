import type { IconType } from "react-icons";
import z from "zod";

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

/* Signup types */
export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(4, { error: "Username must be at least 2 characters." })
    .trim(),
  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters." })
    .regex(/[a-zA-Z]/, { error: "Password must have at least 1 letter." })
    .regex(/[0-9]/, { error: "Password must have at least 1 number." })
    .regex(/[^a-zA-Z0-9]/, {
      error: "Password must have at least 1 special character.",
    })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        username?: string[];
        password?: string[];
      };
      message?: string;
      success?: string;
    }
  | undefined;

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

/* Post Content Definitions */
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

export type CommentData = {
  commentId: string;
  authorName: string;
  description: string;
  likesCount: number;
  dislikesCount: number;
};
