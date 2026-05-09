"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function AddComments() {
  const [revealCommentForm, setRevealCommentForm] = useState<boolean>(false);

  return (
    <div>
      <button
        className="self-end outline outline-gray-800 rounded-md bg-gray-800 text-white mt-5 p-3 text-md flex flex-row gap-5 cursor-pointer hover:bg-white hover:text-gray-800 duration-200 mb-3"
        onClick={() => setRevealCommentForm(!revealCommentForm)}
      >
        {revealCommentForm ? (
          <>
            Close <FaMinus size={24} />
          </>
        ) : (
          <>
            Add comment <FaPlus size={24} />
          </>
        )}
      </button>
      {revealCommentForm && (
        <div className="gap-2 flex flex-col mb-2">
          <textarea
            name="comment"
            id="comment"
            cols={10}
            rows={5}
            className="p-5 mb-5 outline outline-gray-800 rounded-xl text-sm hover:bg-gray-100 focus:outline-2 focus:outline-gray-600 focus:bg-white w-full"
            placeholder="Write your comment here..."
          ></textarea>
          <button className="self-end outline outline-gray-800 rounded-md bg-gray-800 text-white p-3 text-md flex flex-row gap-5 cursor-pointer hover:bg-white hover:text-gray-800 duration-200">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
