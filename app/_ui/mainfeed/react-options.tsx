import {
  FaThumbsDown,
  FaThumbsUp,
  FaLaughSquint,
  FaAngry,
  FaSadTear,
  FaMeh,
} from "react-icons/fa";
import { GiVomiting } from "react-icons/gi";

const buttonProperties: string =
  "rounded bg-white text-gray-800 outline p-2 cursor-pointer hover:bg-gray-800 hover:text-white duration-200";
export default function ReactOptions({ className }: { className: string }) {
  return (
    <div className={className}>
      <button className={buttonProperties}>
        <FaThumbsUp />
      </button>
      <button className={buttonProperties}>
        <FaThumbsDown />
      </button>
      <button className={buttonProperties}>
        <FaLaughSquint />
      </button>
      <button className={buttonProperties}>
        <FaAngry />
      </button>
      <button className={buttonProperties}>
        <FaSadTear />
      </button>
      <button className={buttonProperties}>
        <FaMeh />
      </button>
      <button className={buttonProperties}>
        <GiVomiting />
      </button>
    </div>
  );
}
