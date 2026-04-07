import type { Reacts } from "@/app/_lib/definitions";
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

const reactMap: { key: keyof Reacts; icon: IconType }[] = [
  { key: "likes", icon: FaThumbsUp },
  { key: "dislikes", icon: FaThumbsDown },
  { key: "laughing", icon: FaLaughSquint },
  { key: "angry", icon: FaAngry },
  { key: "crying", icon: FaSadTear },
  { key: "boring", icon: FaMeh },
  { key: "vomiting", icon: GiVomiting },
];

export default function PostReacts({ reactions }: { reactions: Reacts }) {
  return (
    <div className="flex gap-3">
      {reactMap.map(({ key, icon: Icon }) =>
        reactions[key] !== undefined ? (
          <div key={key} className="flex items-center gap-1">
            <Icon />
            <span>{reactions[key]}</span>
          </div>
        ) : null,
      )}
    </div>
  );
}
