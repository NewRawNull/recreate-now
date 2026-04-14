import type { PostData } from "@/app/_lib/definitions";
import Image from "next/image";
import PostReacts from "@/app/_ui/mainfeed/reacts";
import { IoChatbubble } from "react-icons/io5";
import Link from "next/link";

export default function PostObject({
  postId,
  authorName,
  description,
  image,
  likesCount,
  dislikesCount,
  cryingCount,
  laughingCount,
  vomitingCount,
  angryCount,
  boringCount,
}: PostData) {
  return (
    <div className="w-full p-4 rounded outline-2 outline-gray-400 font-roboto flex flex-col">
      <div className="pb-5 mb-5 border-b-gray-400 border-b">
        <h1 className="font-bold">
          {authorName} <span className="font-normal text-gray-700">posted</span>
        </h1>
        {description && (
          <p className="tracking-wide text-gray-800">{description}</p>
        )}
        {image && (
          <div className="aspect-video relative">
            <Image
              src={image}
              alt={`Image posted by ${authorName}... unloaded unfortunately`}
              fill
              className="object-contain rounded -z-50"
            />
          </div>
        )}
      </div>

      <div className="flex flex-row justify-between">
        {likesCount === 0 &&
        dislikesCount === 0 &&
        cryingCount === 0 &&
        laughingCount === 0 &&
        vomitingCount === 0 &&
        angryCount === 0 &&
        boringCount === 0 ? (
          "No Reactions"
        ) : (
          <PostReacts
            reactions={{
              likesCount,
              dislikesCount,
              cryingCount,
              laughingCount,
              vomitingCount,
              angryCount,
              boringCount,
            }}
          />
        )}
        <Link
          className="flex flex-row gap-3 text-white bg-gray-800 items-center justify-between p-2 rounded hover:bg-white hover:text-gray-800 cursor-pointer duration-200 outline outline-gray-800"
          href={`/mainfeed/comment/${postId}`}
        >
          <IoChatbubble />
          Comments
        </Link>
      </div>
    </div>
  );
}
