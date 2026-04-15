"use client";
import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

export default function EditEntry({
  uuid,
  description,
  imageLink,
}: {
  uuid: string;
  description: string;
  imageLink?: string;
}) {
  return (
    <div className="flex flex-row w-full p-4 rounded outline-2 outline-gray-800 font-roboto">
      <div className="flex flex-col flex-1">
        <p className="text-sm text-gray-500">{uuid}</p>
        <p className="text-black line-clamp-1">{description}</p>
      </div>
      {imageLink && (
        <div className="relative self-stretch w-24 shrink-0">
          <Image
            src={imageLink}
            alt={`Image ${imageLink}`}
            fill
            className="object-scale-down rounded"
          />
        </div>
      )}
      <Link
        href={`/mainfeed/contenting/edit/${uuid}`}
        className="flex flex-row justify-center items-center gap-3 bg-gray-800 text-white hover:bg-white hover:text-gray-800 outline outline-gray-800 duration-200 px-3 py-1 rounded"
      >
        Edit <FaEdit size={20} />
      </Link>
    </div>
  );
}
