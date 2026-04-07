import type { PostItem } from "@/app/_lib/definitions";

export const samplePosts: PostItem[] = [
  {
    id: "b5f014a9-fd5c-4c1f-87b8-b3e03bc421bf",
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
    id: "15933f02-108d-41fe-b7d5-346bc579f013",
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
    id: "4f26d10d-18aa-4f9a-a85f-70eeb4fa806a",
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
