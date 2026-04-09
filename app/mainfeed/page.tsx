import { loadPosts } from "@/app/_lib/query";
import { PostData } from "@/app/_lib/definitions";
import PostObject from "@/app/_ui/mainfeed/post-item";

export default async function MainFeedPage() {
  const loadedPosts: PostData[] = await loadPosts();

  return (
    <div className="p-5 flex flex-col gap-5">
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
