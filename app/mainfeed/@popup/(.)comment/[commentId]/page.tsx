import CloseButton from "@/app/_ui/mainfeed/close-popup";
import { samplePosts } from "@/app/_lib/mockData";
import CommentBlock from "@/app/_ui/mainfeed/comment";

export default async function PopupElement({
  params,
}: {
  params: Promise<{ commentId: string }>;
}) {
  const uuid = (await params).commentId;
  const matchedPost = samplePosts.find((post) => post.id === uuid);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex flex-col items-center justify-center">
      <CloseButton />
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h1 className="font-bold text-2xl font-roboto-condensed mb-3">
          Comments
        </h1>
        <CommentBlock post={matchedPost} />
      </div>
    </div>
  );
}
