"use client";
import { PostData } from "@/app/_lib/definitions";
import EditEntry from "@/app/_ui/mainfeed/edit/edit-item";
import { useState } from "react";

export default function EditPostTable({
  postList,
}: {
  postList: Omit<
    PostData,
    | "authorName"
    | "likesCount"
    | "dislikesCount"
    | "cryingCount"
    | "laughingCount"
    | "vomitingCount"
    | "angryCount"
    | "boringCount"
  >[];
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
            <EditEntry
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
