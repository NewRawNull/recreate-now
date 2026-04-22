"use client";

import { useRouter } from "next/navigation";
import { deletePost } from "@/app/_lib/query";
import { useState } from "react";

export default function DeletePopup({
  authorId,
  postId,
}: {
  authorId: string;
  postId: string;
}) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  return (
    <div className="flex flex-col px-2 py-5 font-roboto">
      {!isDeleting ? (
        <p className="pb-5">Are you sure you want to delete this post?</p>
      ) : (
        <p className="pb-5 text-red-600">Deleting...</p>
      )}

      {/* TODO: You ended here (no href) */}
      <div className="flex flex-row justify-between">
        <button
          className="outline outline-gray-800 rounded-md bg-gray-800 text-white mt-5 p-3 text-xl flex flex-row gap-5 cursor-pointer hover:bg-white hover:text-gray-800 duration-200"
          onClick={() => router.back()}
        >
          Cancel
        </button>
        <button
          className="outline outline-gray-800 rounded-md bg-gray-800 text-white mt-5 p-3 text-xl flex flex-row gap-5 cursor-pointer hover:bg-red-600 hover:outline-red-600  duration-200"
          onClick={async () => {
            setIsDeleting(true);
            await deletePost(postId, authorId);
            router.back();
            router.refresh();
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
