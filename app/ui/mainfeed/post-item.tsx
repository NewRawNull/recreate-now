import type { PostItem } from "@/app/lib/definitions";
import Image from "next/image";
import PostReacts from "@/app/ui/mainfeed/reacts";

export default function PostObject({
  author,
  description,
  image,
  reacts,
  comments,
}: PostItem) {
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
          <div className="aspect-video relative w-full">
            <Image
              src={image}
              alt={`Image posted by ${author}... unloaded unfortunately`}
              fill
              className="object-cover rounded"
            />
          </div>
        )}
      </div>

      {reacts ? <PostReacts reactions={reacts} /> : "No Reactions"}
    </div>
  );
}
