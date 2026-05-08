"use client";

import { updatePostReaction } from "@/app/_lib/query";
import { useState, useTransition } from "react";
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
  currentUserId,
  postId,
}: {
  className: string;
  yourReaction?: string;
  currentUserId: string;
  postId: string;
}) {
  const [currentReaction, setCurrentReaction] = useState<string | undefined>(
    yourReaction,
  );
  const [isPending, startTransition] = useTransition();

  const handleReaction = (clickedType: string) => {
    const nextReaction =
      currentReaction === clickedType ? undefined : clickedType;

    setCurrentReaction(nextReaction);

    startTransition(async () => {
      try {
        const result = await updatePostReaction(
          currentUserId,
          postId,
          clickedType,
          currentReaction,
        );
        setCurrentReaction(result ?? undefined);
      } catch (error) {
        setCurrentReaction(yourReaction);
        alert(`Failed to update reaction. ${error}`);
      }
    });
  };

  return (
    <div className={className}>
      {REACTIONS.map(({ type, icon }) => (
        <button
          key={type}
          disabled={isPending}
          className={`${buttonProperties} ${
            currentReaction === type ? activeClass : inactiveClass
          }`}
          onClick={() => handleReaction(type)}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
