"use client";
import { FaUpload, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { useActionState, useState } from "react";
import { createPostAction } from "@/app/_lib/action";

export default function CreatePostForm() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [state, formAction, pending] = useActionState(
    createPostAction,
    undefined,
  );

  return (
    <form action={formAction} className="flex flex-col px-2 py-5 font-roboto">
      {state?.error && <p className="font-bold text-red-600">{state.error}</p>}
      {state?.success && (
        <p className="font-bold text-green-600">{state.success}</p>
      )}
      <label htmlFor="description" className="text-2xl pb-5">
        Description
      </label>
      <textarea
        name="description"
        id="description"
        cols={10}
        rows={10}
        className="p-5 mb-5 outline outline-gray-800 rounded-xl text-md hover:bg-gray-100 focus:outline-2 focus:outline-gray-600 focus:bg-white"
        placeholder="Write your content here..."
      ></textarea>
      <label htmlFor="image" className="text-2xl pb-5 flex flex-col">
        Image Link Input &#40;optional&#41;
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const url = URL.createObjectURL(file);
              setImageUrl(url);
            }
          }}
        />
        <span className="outline outline-gray-800 rounded-md bg-gray-800 text-white mt-5 p-3 self-start text-xl flex flex-row gap-3 cursor-pointer hover:bg-white hover:text-gray-800 duration-200">
          Upload file <FaUpload size={24} />
        </span>
        {imageUrl && (
          <>
            <p className="text-sm text-gray-800 mt-5">Preview Image</p>
            <div className="aspect-video relative">
              <Image
                src={imageUrl}
                alt="Preview of an image. Unfortunately you can't see it for some reason..."
                fill
                className="object-contain rounded -z-50"
              />
            </div>
          </>
        )}
      </label>
      <button
        type="submit"
        className="self-end outline outline-gray-800 rounded-md bg-gray-800 text-white mt-5 p-3 text-xl flex flex-row gap-5 cursor-pointer hover:bg-white hover:text-gray-800 duration-200"
      >
        Submit post <FaArrowRightLong size={24} />
      </button>
    </form>
  );
}
