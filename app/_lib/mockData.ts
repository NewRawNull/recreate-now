import type { PostItem, dbUser } from "@/app/_lib/definitions";
import bcrypt from "bcrypt";

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
  {
    id: "149fe8a2-c945-4f57-86ca-74f6b5ee564a",
    author: "Sophia Leningrad",
    description:
      "Warning to anyone reading!!! \n Never and I mean EVER, place your trust with Arthur Leningrad. He is a big bad cheater who he literally had fun with multiple girls in the club. Please for the love of mother mary, never listen to him PLEASE!!!!",
    image: "/images/posts/arthur_leningrad.png",
    reacts: { boring: 55, crying: 47, laughing: 1, angry: 32 },
    comments: [
      {
        author: "Arthur Leningrad",
        comment: "But people love me though",
        reacts: { likes: 22, dislikes: 21 },
      },
      {
        author: "Drake John Paul",
        comment: "Duly noted! 😅😁",
        reacts: { likes: 55 },
      },
      {
        author: "Kyle Montenegro",
        comment:
          "Well I mean there are people that genuinely cheat due to their abusive love ones. Probably could be the case 🤔",
        reacts: { likes: 22, dislikes: 23 },
      },
      {
        author: "Antonio Mercedes Benito",
        comment:
          "WTH ARE THESE COMMENTS. You guys are SICK!!! Especially this Arthur guy...",
        reacts: { likes: 122, dislikes: 22 },
      },
    ],
  },
];

// The following will be used for the database...
export const users: Omit<dbUser, "id">[] = [
  { name: "Arthur Leningrad", password_hash: "i_am_pogi" },
  { name: "Marcus Delgado", password_hash: "cats_are_amazing" },
  { name: "Yuki Nakamura", password_hash: "yuki_nakamura" },
  {
    name: "Sophia Leningrad",
    password_hash: "arthur_my_love",
  },
  {
    name: "Jenny Tran",
    password_hash: "my_name_is_inspired_by_minecraft",
  },
  { name: "Carlos Reyes", password_hash: "carlos_reyes_pogi" },
  { name: "Brett Wilson", password_hash: "2983ucr92r" },
  { name: "Drake John Paul", password_hash: "drake" },
  { name: "Kyle Montenegro", password_hash: "cheater_for_life" },
  {
    name: "Antonio Mercedes Benito",
    password_hash: "the_intellectual_property",
  },
];
