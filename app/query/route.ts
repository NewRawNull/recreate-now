import sql from "@/app/_lib/db";

// NOTE: ONLY RUN localhost:3000/query ONCE
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return Response.json({ message: "Bad Request" }, { status: 400 });
  }

  try {
    // Test query with comment stacked to comments
    const item = await sql`
      WITH CommentedPost AS (
        SELECT
          Users.id AS userId,
          Users.name AS userName,
          Posts.id AS postId,
          Posts.description AS postDescription
        FROM Users 
        JOIN Posts ON Posts.author_id = Users.id
        WHERE Posts.author_id IN (
          SELECT id FROM Users WHERE name LIKE '%Leningrad'
        )
      )

      SELECT
        CommentedPost.userName AS authorPost,
        CommentedPost.postDescription AS descPost,
        Users.name AS commenterName,
        Comments.description AS commentDesc
      FROM CommentedPost
      JOIN Comments ON CommentedPost.postId = Comments.post_id
      JOIN Users ON Comments.author_id = Users.id;
    `;
    return Response.json({ message: item });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
