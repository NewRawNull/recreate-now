"use client";
import { useRouter } from "next/navigation";
import { IoMdCloseCircle } from "react-icons/io";

export default function CloseButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="cursor-pointer top-0 self-end fixed m-5 text-white hover:text-black duration-100"
    >
      <IoMdCloseCircle size={48} />
    </button>
  );
}
