import { loadSelectedPost } from "@/app/_lib/query";
import CloseButton from "@/app/_ui/mainfeed/close-popup";
import DeletePopup from "@/app/_ui/mainfeed/delete/delete-popup";
import { auth } from "@/auth";

export default async function PopupElement({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const uuid: string = (await params).postId;
  const session = await auth();

  if (!session) return null;
  const userId = session?.user?.id;

  if (!userId) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex flex-col items-center justify-center">
      <CloseButton isRefresh={true} />
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h1 className="font-bold text-2xl font-roboto-condensed mb-3">
          Confirm
        </h1>
        <DeletePopup authorId={userId} postId={uuid} />
      </div>
    </div>
  );
}
