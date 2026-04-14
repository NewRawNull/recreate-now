import { Suspense } from "react";
import EditPostTable from "@/app/_ui/mainfeed/edit/edit-post-table";

export default function EditPage() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="font-roboto-condensed font-bold text-3xl px-2 py-5 border-b border-b-gray-800">
        Edit a post
      </h1>
      <Suspense>
        <EditPostTable />
      </Suspense>
    </div>
  );
}
