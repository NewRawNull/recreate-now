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
  await sql`CREATE TABLE IF NOT EXISTS Users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password TEXT NOT NULL
  );`;

  await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password_hash, 10);
      await sql`
        INSERT INTO Users (id, name, password)
        VALUES (${user.id}, ${user.name}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING
      `;
    }),
  );
}

async function seedPosts() {
  await sql`
    CREATE TABLE IF NOT EXISTS Posts (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      author_id UUID NOT NULL,
      description TEXT,
      image VARCHAR(255),
      FOREIGN KEY (author_id) REFERENCES Users(id) ON DELETE CASCADE
    )
  `;

  await Promise.all(
    posts.map(async (post) => {
      await sql`
      INSERT INTO Posts (id, author_id, description, image)
      VALUES (${post.id}, ${post.author_id}, ${post.description ?? null}, ${post.image ?? null})
      ON CONFLICT (id) DO NOTHING
    `;
    }),
  );
}

async function seedComments() {
  await sql`
    CREATE TABLE IF NOT EXISTS Comments(
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      author_id UUID NOT NULL,
      post_id UUID NOT NULL,
      description TEXT NOT NULL,
      FOREIGN KEY (author_id) REFERENCES Users(id) ON DELETE CASCADE,
      FOREIGN KEY (post_id) REFERENCES Posts(id) ON DELETE CASCADE
    ) 
  `;

  await Promise.all(
    comments.map(async (comment) => {
      await sql`
          INSERT INTO Comments (id, author_id, post_id, description)
          VALUES (${comment.id}, ${comment.author_id}, ${comment.post_id}, ${comment.description})
          ON CONFLICT (id) DO NOTHING
        `;
    }),
  );
}

async function seedPostReactions() {
  await sql`
    CREATE TABLE IF NOT EXISTS PostReactions (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      post_id UUID NOT NULL,
      user_id UUID NOT NULL,
      type VARCHAR(50) CHECK (type IN ('like', 'dislike', 'crying', 'laughing', 'vomiting', 'angry', 'boring')),
      FOREIGN KEY (post_id) REFERENCES Posts(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
      UNIQUE (post_id, user_id)
    )
  `;

  await Promise.all(
    postReactions.map(async (reacts) => {
      await sql`
        INSERT INTO PostReactions (id, post_id, user_id, type)
        VALUES (${reacts.id}, ${reacts.post_id}, ${reacts.user_id}, ${reacts.type})
        ON CONFLICT (id) DO NOTHING
      `;
    }),
  );
}

async function seedCommentReactions() {
  await sql`
    CREATE TABLE IF NOT EXISTS CommentReactions(
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      comment_id UUID NOT NULL,
      user_id UUID NOT NULL,
      type VARCHAR(50) NOT NULL CHECK (type IN ('like', 'dislike')),
      FOREIGN KEY (comment_id) REFERENCES Comments(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
      UNIQUE (comment_id, user_id)
    )
  `;

  await Promise.all(
    commentReactions.map(async (reacts) => {
      await sql`
        INSERT INTO CommentReactions (id, comment_id, user_id, type)
        VALUES (${reacts.id}, ${reacts.comment_id}, ${reacts.user_id}, ${reacts.type})
        ON CONFLICT (comment_id, user_id) DO NOTHING
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
