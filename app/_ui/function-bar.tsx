import { FunctionBarLinks } from "@/app/_lib/definitions";
import { FaHome, FaSearch } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import FLink from "@/app/_ui/function-bar/link";
import { logoutAction } from "@/app/_lib/auth";

const linkButtons: FunctionBarLinks = [
  { icon: FaHome, name: "Home", href: "/mainfeed" },
  { icon: IoMdTrendingUp, name: "Trending", href: "/mainfeed/trending" },
  { icon: BiSolidCategory, name: "Categories", href: "/mainfeed/categories" },
  { icon: FaSearch, name: "Search", href: "/mainfeed/search" },
];

export default function FunctionBar() {
  return (
    <div className="border-r border-r-gray-300 bg-gray-100 p-5 flex flex-col h-screen gap-2">
      {linkButtons.map((link, idx) => (
        <div key={idx}>
          <FLink href={link.href} name={link.name} icon={link.icon} />
        </div>
      ))}
      <form action={logoutAction} className="mt-auto">
        <button
          type="submit"
          className="w-full rounded flex flex-row items-center gap-3 hover:bg-gray-200  py-3 px-1 cursor-pointer"
        >
          <MdLogout size={24} />
          Log Out
        </button>
      </form>
    </div>
  );
}
