import sql from "@/app/_lib/db";
import { PostData } from "@/app/_lib/definitions";

// I might be overengineering so bear with me
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
