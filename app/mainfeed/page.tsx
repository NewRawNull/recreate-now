import PostObject from "@/app/_ui/mainfeed/post-item";
import { samplePosts } from "@/app/_lib/mock-data";

export default function MainFeedPage() {
  return (
    // TODO: You may want to revisit this and place this as an API call once database is integrated...
    <div className="p-5 flex flex-col gap-5">
      {samplePosts.map((post) => (
        <PostObject
          id={post.id}
          key={post.id}
          author={post.author}
          description={post.description}
          image={post.image}
          reacts={post.reacts}
        />
      ))}
    </div>
  );
}
