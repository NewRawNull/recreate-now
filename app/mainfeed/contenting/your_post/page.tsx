import { loadOwnedPosts } from "@/app/_lib/query";
import PostObject from "@/app/_ui/mainfeed/post-item";
import { auth } from "@/auth";

export default async function YourPostPage() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) return null;
  const posts = await loadOwnedPosts(userId);

  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="font-roboto-condensed font-bold text-3xl px-2 py-5 border-b border-b-gray-800">
        Your posts
      </h1>
      {posts.map((post) => (
        <PostObject
          isAllowReact={false}
          postId={post.postId}
          key={post.postId}
          authorName={post.authorName}
          description={post.description}
          image={post.image}
          likesCount={post.likesCount}
          dislikesCount={post.dislikesCount}
          cryingCount={post.cryingCount}
          laughingCount={post.laughingCount}
          vomitingCount={post.vomitingCount}
          angryCount={post.angryCount}
          boringCount={post.boringCount}
        />
      ))}
    </div>
  );
}
