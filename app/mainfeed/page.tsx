import { loadPosts } from "@/app/_lib/query";
import { PostData } from "@/app/_lib/definitions";
import PostObject from "@/app/_ui/mainfeed/post-item";
import { auth } from "@/auth";

export default async function MainFeedPage() {
  const loadedPosts: PostData[] = await loadPosts();
  const session = await auth();
  const username = session?.user?.name;

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="p-3 border-b border-b-gray-600 font-roboto-condensed flex flex-col gap-4">
        <h1 className="text-4xl">
          Welcome, <span className="font-bold">{username}</span>
        </h1>
        <p className="tracking-wide">
          You are now looking at current posts page. Have fun!! 😁😁😁
        </p>
      </div>
      {loadedPosts.map((post) => (
        <PostObject
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
