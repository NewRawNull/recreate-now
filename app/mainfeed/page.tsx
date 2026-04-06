import PostObject from "@/app/ui/mainfeed/post-item";
import { PostItem } from "@/app/lib/definitions";

// TODO: Remove once integrated database
const sampleItems: PostItem[] = [
  {
    author: "Arthur Leningrad",
    description: "I enjoyed my week today",
    reacts: { likes: 12, angry: 1 },
    comments: [
      {
        author: "Sophia Leningrad",
        comment: "You cheater! I saw you in the bar with another woman.",
        reacts: { dislikes: 10 },
      },
    ],
  },
  {
    author: "Marcus Delgado",
    description: "Just finished a 10km run. Feeling unstoppable right now.",
    reacts: { likes: 45, laughing: 3, boring: 1 },
    comments: [
      {
        author: "Jenny Tran",
        comment: "You said the same thing last week and then quit the gym.",
        reacts: { likes: 22, dislikes: 1 },
      },
      {
        author: "Carlos Reyes",
        comment: "Bro teach me your ways.",
        reacts: { likes: 5 },
      },
    ],
  },
  {
    author: "Yuki Nakamura",
    description: "Made homemade ramen from scratch. Took 6 hours but worth it.",
    reacts: { likes: 78, crying: 4, laughing: 2 },
    comments: [
      {
        author: "Brett Wilson",
        comment: "6 hours?? I just use instant noodles.",
        reacts: { likes: 31, dislikes: 7 },
      },
    ],
  },
];

export default function MainFeedPage() {
  return (
    <div className="p-5 flex flex-col gap-5">
      {sampleItems.map((post, idx) => (
        <PostObject
          author={post.author}
          description={post.description}
          comments={post.comments}
          image={post.image}
          reacts={post.reacts}
          key={idx}
        />
      ))}
    </div>
  );
}
