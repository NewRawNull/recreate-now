import { PostItem } from "@/app/_lib/definitions";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

export default function CommentBlock({ post }: { post: PostItem | undefined }) {
  if (!post) return <p>Post does not exist</p>;
  if (!post.comments?.length) return <p>No comments</p>;

  // TODO: You may want to revisit this and place this as an API call once database is integrated...
  return post.comments.map((comment, idx) => (
    <div
      key={idx}
      className="grid grid-cols-6 border-t border-t-gray-600 w-full"
    >
      <div className="p-5 flex flex-col justify-start items-start col-span-5">
        <h1 className="font-roboto font-bold">{comment.author}</h1>
        <p className="font-roboto-condensed tracking-wide text-gray-700">
          {comment.comment}
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center my-6">
        <div className="flex items-center gap-1">
          <FaRegThumbsUp size={14} />
          <span className="text-sm">{comment.reacts?.likes ?? "0"}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegThumbsDown size={14} />
          <span className="text-sm">{comment.reacts?.dislikes ?? "0"}</span>
        </div>
      </div>
    </div>
  ));
}
