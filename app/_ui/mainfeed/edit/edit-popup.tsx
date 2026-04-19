"use client";

import { editPostAction } from "@/app/_lib/action";
import Image from "next/image";
import { useActionState, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function EditPopup({
  uuid,
  description,
  image,
}: {
  uuid: string;
  description: string;
  image: string | undefined;
}) {
  const [desc, setDesc] = useState<string | undefined>(
    description ?? undefined,
  );
  const [imageUrl, setImageUrl] = useState<string | undefined>(
    image ?? undefined,
  );
  const editPostActionWithUUID = editPostAction.bind(null, uuid);
  const [state, formAction, pending] = useActionState(
    editPostActionWithUUID,
    undefined,
  );
  return (
    <form className="flex flex-col px-2 py-5 font-roboto" action={formAction}>
      {state?.error && <p className="font-bold text-red-600">{state.error}</p>}
      {!state?.success ? (
        <>
          <label htmlFor="description" className="text-2xl pb-5">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols={10}
            rows={5}
            className="p-5 mb-5 outline outline-gray-800 rounded-xl text-md hover:bg-gray-100 focus:outline-2 focus:outline-gray-600 focus:bg-white"
            placeholder="Write your content here..."
            onChange={(e) => {
              setDesc(e.target.value);
              console.log(desc);
            }}
            value={desc}
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
                <div className="aspect-video relative self-stretch w-full shrink-0">
                  <Image
                    src={imageUrl}
                    alt="Preview of an image. Unfortunately you can't see it for some reason..."
                    fill
                    className="object-scale-down rounded w-full h-full"
                  />
                </div>
              </>
            )}
          </label>
          <button
            type="submit"
            className="self-end outline outline-gray-800 rounded-md bg-gray-800 text-white mt-5 p-3 text-xl flex flex-row gap-5 cursor-pointer hover:bg-white hover:text-gray-800 duration-200"
          >
            Edit Post <FaArrowRightLong size={24} />
          </button>
        </>
      ) : (
        <p className="font-bold text-green-600">{state.success}</p>
      )}
    </form>
  );
}
