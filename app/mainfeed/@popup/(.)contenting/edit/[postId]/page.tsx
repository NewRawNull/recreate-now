import CloseButton from "@/app/_ui/mainfeed/close-popup";
import { loadComments } from "@/app/_lib/query";
import { CommentData } from "@/app/_lib/definitions";

export default async function PopupElement({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const uuid: string = (await params).postId;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex flex-col items-center justify-center">
      <CloseButton />
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h1 className="font-bold text-2xl font-roboto-condensed mb-3">
          Edit Post Form
        </h1>
        {/* <CommentBlock commentsArray={comments} /> */}
      </div>
    </div>
  );
}
