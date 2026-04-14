"use server";

import sql from "@/app/_lib/db";
import { CommentData, PostData } from "@/app/_lib/definitions";
import bcrypt from "bcrypt";

// I might be overengineering so bear with me
export async function addUser(username: string, password: string) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await sql`
    INSERT INTO "Users" ("name", "passwordHash")
    VALUES (${username}, ${passwordHash})
    ON CONFLICT ("name") DO NOTHING
    RETURNING "name";
  `;

  return user[0];
}

export async function getUserLogged(username: string) {
  const user = await sql`
    SELECT
      "Users"."id" AS "id", 
      "Users"."name" AS "username",
      "Users"."passwordHash" AS "passwordHash"
    FROM "Users"
    WHERE "Users"."name" = ${username};
  `;

  return user[0] ?? null;
}

export async function loadPosts() {
  const posts: PostData[] = await sql`
    SELECT 
      "Posts"."id" AS "postId",
      "Posts"."description",
      "Posts"."image",
      "Users"."name" AS "authorName",
      COUNT("PostReactions"."id") FILTER (WHERE "PostReactions"."type" = 'like')::int AS "likesCount",
      COUNT("PostReactions"."id") FILTER (WHERE "PostReactions"."type" = 'dislike')::int AS "dislikesCount",
      COUNT("PostReactions"."id") FILTER (WHERE "PostReactions"."type" = 'crying')::int AS "cryingCount",
      COUNT("PostReactions"."id") FILTER (WHERE "PostReactions"."type" = 'laughing')::int AS "laughingCount",
      COUNT("PostReactions"."id") FILTER (WHERE "PostReactions"."type" = 'vomiting')::int AS "vomitingCount",
      COUNT("PostReactions"."id") FILTER (WHERE "PostReactions"."type" = 'angry')::int AS "angryCount",
      COUNT("PostReactions"."id") FILTER (WHERE "PostReactions"."type" = 'boring')::int AS "boringCount"
    FROM "Posts"
    JOIN "Users"
      ON "Posts"."authorId" = "Users"."id"
    LEFT JOIN "PostReactions"
      ON "Posts"."id" = "PostReactions"."postId"
    GROUP BY 
      "Posts"."id", 
      "Posts"."description", 
      "Users"."name";
  `;

  return posts;
}

export async function loadComments(postId: string) {
  const comments: CommentData[] = await sql`
    SELECT
      "Comments"."id" AS "commentId",
      "Users"."name" AS "authorName",
      "Comments"."description",
      COUNT("CommentReactions"."id") FILTER (WHERE "CommentReactions"."type" = 'like')::int AS "likesCount",
      COUNT("CommentReactions"."id") FILTER (WHERE "CommentReactions"."type" = 'dislike')::int AS "dislikesCount"
    FROM "Comments"
    JOIN "Users"
      ON "Users"."id" = "Comments"."authorId"
    LEFT JOIN "CommentReactions"
      ON "CommentReactions"."commentId" = "Comments"."id"
    WHERE
      "Comments"."postId" = ${postId}
    GROUP BY
      "Comments"."id",
      "Users"."name",
      "Comments"."description";
  `;

  return comments;
}

export async function addPost(
  authorId: string,
  description: string,
  image: string | null,
) {
  await sql`
    INSERT INTO "Posts" ("authorId", "description", "image")
    VALUES (${authorId}, ${description}, ${image});
  `;
}
