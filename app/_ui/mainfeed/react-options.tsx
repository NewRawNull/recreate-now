import {
  FaThumbsDown,
  FaThumbsUp,
  FaLaughSquint,
  FaAngry,
  FaSadTear,
  FaMeh,
} from "react-icons/fa";
import { GiVomiting } from "react-icons/gi";

const REACTIONS = [
  { type: "like", icon: <FaThumbsUp /> },
  { type: "dislike", icon: <FaThumbsDown /> },
  { type: "laughing", icon: <FaLaughSquint /> },
  { type: "angry", icon: <FaAngry /> },
  { type: "crying", icon: <FaSadTear /> },
  { type: "boring", icon: <FaMeh /> },
  { type: "vomiting", icon: <GiVomiting /> },
];

const buttonProperties =
  "rounded bg-white outline p-2 cursor-pointer duration-200 hover:text-white";

const activeClass = "text-blue-600 hover:bg-blue-600";
const inactiveClass = "text-gray-800 hover:bg-gray-800";

export default function ReactOptions({
  className,
  yourReaction,
}: {
  className: string;
  yourReaction?: string;
}) {
  return (
    <div className={className}>
      {REACTIONS.map(({ type, icon }) => (
        <button
          key={type}
          className={`${buttonProperties} ${
            yourReaction === type ? activeClass : inactiveClass
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
