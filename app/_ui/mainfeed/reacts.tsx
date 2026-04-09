import type { PostData } from "@/app/_lib/definitions";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaLaughSquint,
  FaAngry,
  FaSadTear,
  FaMeh,
} from "react-icons/fa";
import { GiVomiting } from "react-icons/gi";
import { IconType } from "react-icons";

type ReactionCounts = Omit<
  PostData,
  "postId" | "description" | "authorName" | "image"
>;

const reactMap: {
  key: keyof ReactionCounts;
  icon: IconType;
}[] = [
  { key: "likesCount", icon: FaThumbsUp },
  { key: "dislikesCount", icon: FaThumbsDown },
  { key: "laughingCount", icon: FaLaughSquint },
  { key: "angryCount", icon: FaAngry },
  { key: "cryingCount", icon: FaSadTear },
  { key: "boringCount", icon: FaMeh },
  { key: "vomitingCount", icon: GiVomiting },
];

export default function PostReacts({
  reactions,
}: {
  reactions: ReactionCounts;
}) {
  return (
    <div className="flex gap-3">
      {reactMap.map(({ key, icon: Icon }) =>
        reactions[key] > 0 ? (
          <div key={key} className="flex items-center gap-1 text-gray-700">
            <Icon />
            <span>{reactions[key]}</span>
          </div>
        ) : null,
      )}
    </div>
  );
}
