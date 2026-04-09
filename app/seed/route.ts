import sql from "@/app/_lib/db";
import {
  commentReactions,
  comments,
  postReactions,
  posts,
  users,
} from "@/app/_lib/mock-data";
import bcrypt from "bcrypt";

// NOTE: ONLY RUN localhost:3000/seed ONCE

async function seedUsers() {
  await sql`CREATE TABLE IF NOT EXISTS "Users" (
    "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "passwordHash" TEXT NOT NULL
  );`;

  await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.passwordHash, 10);
      await sql`
        INSERT INTO "Users" ("id", "name", "passwordHash")
        VALUES (${user.id}, ${user.name}, ${hashedPassword})
        ON CONFLICT ("id") DO NOTHING
      `;
    }),
  );
}

async function seedPosts() {
  await sql`
    CREATE TABLE IF NOT EXISTS "Posts" (
      "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      "authorId" UUID NOT NULL,
      "description" TEXT,
      "image" VARCHAR(255),
      FOREIGN KEY ("authorId") REFERENCES "Users"("id") ON DELETE CASCADE
    )
  `;

  await Promise.all(
    posts.map(async (post) => {
      await sql`
      INSERT INTO "Posts" ("id", "authorId", "description", "image")
      VALUES (${post.id}, ${post.authorId}, ${post.description ?? null}, ${post.image ?? null})
      ON CONFLICT ("id") DO NOTHING
    `;
    }),
  );
}

async function seedComments() {
  await sql`
    CREATE TABLE IF NOT EXISTS "Comments"(
      "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      "authorId" UUID NOT NULL,
      "postId" UUID NOT NULL,
      "description" TEXT NOT NULL,
      FOREIGN KEY ("authorId") REFERENCES "Users"("id") ON DELETE CASCADE,
      FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE
    ) 
  `;

  await Promise.all(
    comments.map(async (comment) => {
      await sql`
          INSERT INTO "Comments" ("id", "authorId", "postId", "description")
          VALUES (${comment.id}, ${comment.authorId}, ${comment.postId}, ${comment.description})
          ON CONFLICT ("id") DO NOTHING
        `;
    }),
  );
}

async function seedPostReactions() {
  await sql`
    CREATE TABLE IF NOT EXISTS "PostReactions" (
      "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      "postId" UUID NOT NULL,
      "userId" UUID NOT NULL,
      "type" VARCHAR(50) CHECK ("type" IN ('like', 'dislike', 'crying', 'laughing', 'vomiting', 'angry', 'boring')),
      FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE,
      FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE,
      UNIQUE ("postId", "userId")
    )
  `;

  await Promise.all(
    postReactions.map(async (reacts) => {
      await sql`
        INSERT INTO "PostReactions" ("id", "postId", "userId", "type")
        VALUES (${reacts.id}, ${reacts.postId}, ${reacts.userId}, ${reacts.type})
        ON CONFLICT ("id") DO NOTHING
      `;
    }),
  );
}

async function seedCommentReactions() {
  await sql`
    CREATE TABLE IF NOT EXISTS "CommentReactions"(
      "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      "commentId" UUID NOT NULL,
      "userId" UUID NOT NULL,
      "type" VARCHAR(50) NOT NULL CHECK ("type" IN ('like', 'dislike')),
      FOREIGN KEY ("commentId") REFERENCES "Comments"("id") ON DELETE CASCADE,
      FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE,
      UNIQUE ("commentId", "userId")
    )
  `;

  await Promise.all(
    commentReactions.map(async (reacts) => {
      await sql`
        INSERT INTO "CommentReactions" ("id", "commentId", "userId", "type")
        VALUES (${reacts.id}, ${reacts.commentId}, ${reacts.userId}, ${reacts.type})
        ON CONFLICT ("commentId", "userId") DO NOTHING
      `;
    }),
  );
}

export async function GET() {
  if (process.env.NODE_ENV === "production")
    return Response.json({ message: "Bad Request" }, { status: 400 });

  try {
    await seedUsers();
    await seedPosts();
    await seedComments();
    await seedPostReactions();
    await seedCommentReactions();

    return Response.json({ message: "Database successfully created!" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
