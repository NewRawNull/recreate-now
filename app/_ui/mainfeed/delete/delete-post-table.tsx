"use client";
import { PostData } from "@/app/_lib/definitions";
import DeleteEntry from "@/app/_ui/mainfeed/delete/delete-item";

export default function DeletePostTable({
  postList,
}: {
  postList: Pick<PostData, "description" | "image" | "postId">[];
}) {
  return (
    <div className="font-roboto flex flex-col gap-5 p-5">
      <h1 className="font-bold">Select a post to edit:</h1>

      {/* The post tables */}
      {postList.length === 0 ? (
        <p className="text-red-600 font-bold text-2xl">No posts to show!</p>
      ) : (
        <div className="flex flex-col min-h-[50vh] items-center p-5 outline outline-gray-800 gap-5 rounded justify-start">
          {postList.map((post) => (
            <DeleteEntry
              key={post.postId}
              uuid={post.postId}
              description={post.description}
              imageLink={post.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}
