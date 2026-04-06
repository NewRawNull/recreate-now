import Link from "next/link";
import { FunctionBarLink } from "@/app/lib/definitions";

export default function FLink({ icon: Icon, name, href }: FunctionBarLink) {
  return (
    <div className="w-full">
      <Link
        href={href}
        className="rounded flex flex-row gap-3 py-3 px-1 hover:bg-gray-200"
      >
        <Icon size={24} />
        <p>{name}</p>
      </Link>
    </div>
  );
}
