import Link from "next/link";
import { FaPlus, FaEdit, FaMinus, FaArchive } from "react-icons/fa";

const linkStyles: string =
  "bg-white font-roboto font-bold text-gray-800 flex flex-row gap-3 px-4 py-2 outline rounded-full hover:bg-gray-800 hover:text-white duration-200";

export default function ContentingBar() {
  return (
    <div className="border border-gray-800 backdrop-blur-md bg-white/10 shadow-md shadow-gray-800/50 p-3 m-3 rounded-full flex flex-row justify-start gap-4">
      <Link href="/mainfeed/contenting/create" className={linkStyles}>
        Create Post <FaPlus size={24} />
      </Link>
      <Link href="/mainfeed/contenting/edit" className={linkStyles}>
        Edit Post <FaEdit size={24} />
      </Link>
      <Link href="/mainfeed/contenting/delete" className={linkStyles}>
        Delete Post <FaMinus size={24} />
      </Link>
      <Link
        href="/mainfeed/contenting/your_post"
        className={`${linkStyles} ml-auto`}
      >
        See all posts <FaArchive size={24} />
      </Link>
    </div>
  );
}
