import { Suspense } from "react";
import CreatePostForm from "@/app/_ui/mainfeed/create-post-form";

export default function CreatePage() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="font-roboto-condensed font-bold text-3xl px-2 py-5 border-b border-b-gray-800">
        Create a new post
      </h1>
      <Suspense>
        <CreatePostForm />
      </Suspense>
    </div>
  );
}
