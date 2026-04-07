import { FunctionBarLinks } from "@/app/_lib/definitions";
import { FaHome, FaSearch } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import FLink from "@/app/_ui/function-bar/link";
import clsx from "clsx";

const linkButtons: FunctionBarLinks = [
  { icon: FaHome, name: "Home", href: "/mainfeed" },
  { icon: IoMdTrendingUp, name: "Trending", href: "/mainfeed/trending" },
  { icon: BiSolidCategory, name: "Categories", href: "/mainfeed/categories" },
  { icon: FaSearch, name: "Search", href: "/mainfeed/search" },
  { icon: MdLogout, name: "Log Out", href: "/" }, // TODO: Might want to revisit once authentication is done
];

export default function FunctionBar() {
  return (
    <div className="border-r border-r-gray-300 bg-gray-100 p-5 flex flex-col h-screen gap-2">
      {linkButtons.map((link, idx) => (
        <div
          key={idx}
          className={clsx({ "mt-auto": idx === linkButtons.length - 1 })}
        >
          <FLink href={link.href} name={link.name} icon={link.icon} />
        </div>
      ))}
    </div>
  );
}
