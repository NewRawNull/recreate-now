"use server";

import fs from "fs";
import path from "path";
import { auth } from "@/auth";
import { addPost } from "@/app/_lib/query";
import { CreateFormState } from "@/app/_lib/definitions";

export async function createPostAction(
  prevState: CreateFormState,
  formData: FormData,
): Promise<Partial<Record<"error" | "success", string>>> {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) return { error: "User ID expired" };
  try {
    const description = formData.get("description") as string;
    const imageObj = formData.get("image") as File;
    let filename = null;
    if (!description || description.toString() === "")
      return { error: "Please input a description" };

    if (imageObj && imageObj.size > 0) {
      const bytes = await imageObj.arrayBuffer();
      const buffer = Buffer.from(bytes);

      filename = `${Date.now()}_${imageObj.name}`;
      const filepath = path.join(
        process.cwd(),
        "public",
        "images",
        "posts",
        filename,
      );

      fs.writeFileSync(filepath, buffer);
    }

    await addPost(
      userId,
      description,
      filename ? `/images/posts/${filename}` : null,
    );
    return { success: "A new post has been created" };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
