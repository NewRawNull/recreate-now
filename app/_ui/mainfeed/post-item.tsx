import type { PostItem } from "@/app/_lib/definitions";
import Image from "next/image";
import PostReacts from "@/app/_ui/mainfeed/reacts";
import { IoChatbubble } from "react-icons/io5";
import Link from "next/link";

export default function PostObject({
  id,
  author,
  description,
  image,
  reacts,
}: Omit<PostItem, "comments">) {
  return (
    <div className="w-full p-4 rounded outline-2 outline-gray-400 font-roboto flex flex-col">
      <div className="pb-5 mb-5 border-b-gray-400 border-b">
        <h1 className="font-bold">
          {author} <span className="font-normal text-gray-700">posted</span>
        </h1>
        {description && (
          <p className="tracking-wide text-gray-800">{description}</p>
        )}
        {image && (
          <div className="aspect-video relative">
            <Image
              src={image}
              alt={`Image posted by ${author}... unloaded unfortunately`}
              fill
              className="object-contain rounded"
            />
          </div>
        )}
      </div>

      <div className="flex flex-row justify-between">
        {reacts ? <PostReacts reactions={reacts} /> : "No Reactions"}
        <Link
          className="flex flex-row gap-3 text-white bg-gray-600 items-center justify-between p-2 rounded hover:bg-gray-700 active:bg-gray-800 cursor-pointer"
          href={`mainfeed/comment/${id}`}
        >
          <IoChatbubble />
          Comments
        </Link>
      </div>
    </div>
  );
}
