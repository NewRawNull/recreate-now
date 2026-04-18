import { Suspense } from "react";
import EditPostTable from "@/app/_ui/mainfeed/edit/edit-post-table";
import { auth } from "@/auth";
import { countOwnedPost, loadFivePost } from "@/app/_lib/query";
import Pagination from "@/app/_ui/mainfeed/edit/pagination";

export default async function EditPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const session = await auth();
  const userId = session?.user?.id;
  const page = Number((await searchParams).page) || 1;
  if (!userId) return;

  const offset = (page - 1) * 5;
  const posts = await loadFivePost(userId, offset);
  const { totalCount } = await countOwnedPost(userId);
  const totalPageCount = Math.ceil(totalCount / 5) || 1;

  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="font-roboto-condensed font-bold text-3xl px-2 py-5 border-b border-b-gray-800">
        Edit a post
      </h1>
      <Suspense>
        <EditPostTable postList={posts} />
      </Suspense>
      <Suspense>
        <Pagination currentPage={page} totalPageCount={totalPageCount} />
      </Suspense>
    </div>
  );
}
