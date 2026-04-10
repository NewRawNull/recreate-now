import type {
  DbPost,
  DbUser,
  DbComment,
  DbPostReaction,
  DbCommentReaction,
} from "@/app/_lib/definitions";

// The following will be used for the database...
export const users: DbUser[] = [
  {
    id: "b47281d3-84fb-481b-8bbb-817467f5e379",
    name: "Arthur Leningrad",
    passwordHash: "i_am_pogi",
  },
  {
    id: "16692164-83c1-4a3e-83f3-8904e5958d22",
    name: "Marcus Delgado",
    passwordHash: "cats_are_amazing",
  },
  {
    id: "73dc420f-27ac-4ea7-a7d3-10a034b92977",
    name: "Yuki Nakamura",
    passwordHash: "yuki_nakamura",
  },
  {
    id: "1c3e2b57-3969-4c0c-9951-203656f841e2",
    name: "Sophia Leningrad",
    passwordHash: "arthur_my_love",
  },
  {
    id: "3024775f-be33-48da-8113-d50a1fad8dca",
    name: "Jenny Tran",
    passwordHash: "my_name_is_inspired_by_minecraft",
  },
  {
    id: "8cda66cb-80d5-4b05-b6b5-4f79d445d6a5",
    name: "Carlos Reyes",
    passwordHash: "carlos_reyes_pogi",
  },
  {
    id: "ceb82e4f-87f0-4bf4-ab12-bc08081f8ddc",
    name: "Brett Wilson",
    passwordHash: "2983ucr92r",
  },
  {
    id: "8cfe5b1f-1d1c-4eda-9a56-978d0b376677",
    name: "Drake John Paul",
    passwordHash: "drake",
  },
  {
    id: "a3936d10-c22e-4e85-9953-8e91f94bdd9a",
    name: "Kyle Montenegro",
    passwordHash: "cheater_for_life",
  },
  {
    id: "8b9d4060-97c0-4ff1-9263-c21855a92033",
    name: "Antonio Mercedes Benito",
    passwordHash: "the_intellectual_property",
  },
];

export const posts: DbPost[] = [
  {
    id: "057c71e6-213c-44cf-9655-c389dda9084f",
    authorId: "b47281d3-84fb-481b-8bbb-817467f5e379",
    description: "I enjoyed my week today",
  },
  {
    id: "901c1089-efae-4b95-b5b7-800262047c25",
    authorId: "16692164-83c1-4a3e-83f3-8904e5958d22",
    description: "Just finished a 10km run. Feeling unstoppable right now.",
  },
  {
    id: "351727bb-143d-46fa-84a2-7207540ea7d2",
    authorId: "73dc420f-27ac-4ea7-a7d3-10a034b92977",
    description: "Made homemade ramen from scratch. Took 6 hours but worth it.",
  },
  {
    id: "ec09e1e4-4862-43b9-b36a-ce4fd1e3950f",
    authorId: "1c3e2b57-3969-4c0c-9951-203656f841e2",
    description:
      "Warning to anyone reading!!! \n Never and I mean EVER, place your trust with Arthur Leningrad. He is a big bad cheater who he literally had fun with multiple girls in the club. Please for the love of mother mary, never listen to him PLEASE!!!!",
    image: "/images/posts/arthur_leningrad.png",
  },
];

export const comments: DbComment[] = [
  {
    id: "472f1933-125f-4625-b367-39ac06e7aff8",
    authorId: "1c3e2b57-3969-4c0c-9951-203656f841e2",
    postId: "057c71e6-213c-44cf-9655-c389dda9084f",
    description: "You cheater! I saw you in the bar with another woman.",
  },
  {
    id: "ea30d324-96ab-4201-b5ab-6847f1e71033",
    authorId: "3024775f-be33-48da-8113-d50a1fad8dca",
    postId: "901c1089-efae-4b95-b5b7-800262047c25",
    description: "You said the same thing last week and then quit the gym.",
  },
  {
    id: "c821accd-c192-43be-81cd-f5cc5b7e2d70",
    authorId: "8cda66cb-80d5-4b05-b6b5-4f79d445d6a5",
    postId: "901c1089-efae-4b95-b5b7-800262047c25",
    description: "Bro teach me your ways.",
  },
  {
    id: "895efcba-3bfe-429b-a3a7-b0f973bf192b",
    authorId: "ceb82e4f-87f0-4bf4-ab12-bc08081f8ddc",
    postId: "351727bb-143d-46fa-84a2-7207540ea7d2",
    description: "6 hours?? I just use instant noodles.",
  },
  {
    id: "b8eba871-5cd9-4394-94ff-a72bb5e37313",
    authorId: "b47281d3-84fb-481b-8bbb-817467f5e379",
    postId: "ec09e1e4-4862-43b9-b36a-ce4fd1e3950f",
    description: "But people love me though",
  },
  {
    id: "8513198f-83fa-4f99-aeef-e0132be2b84a",
    authorId: "8cfe5b1f-1d1c-4eda-9a56-978d0b376677",
    postId: "ec09e1e4-4862-43b9-b36a-ce4fd1e3950f",
    description: "Duly noted! 😅😁",
  },
  {
    id: "3d90915e-50ed-43ba-883f-834d097e9b79",
    authorId: "a3936d10-c22e-4e85-9953-8e91f94bdd9a",
    postId: "ec09e1e4-4862-43b9-b36a-ce4fd1e3950f",
    description:
      "Well I mean there are people that genuinely cheat due to their abusive love ones. Probably could be the case 🤔",
  },
  {
    id: "7e87f1a8-44d4-418e-b41e-c0eab2e57f3f",
    authorId: "8b9d4060-97c0-4ff1-9263-c21855a92033",
    postId: "ec09e1e4-4862-43b9-b36a-ce4fd1e3950f",
    description:
      "WTH ARE THESE COMMENTS. You guys are SICK!!! Especially this Arthur guy...",
  },
];

export const postReactions: DbPostReaction[] = [
  // Post 1: Arthur Leningrad ("I enjoyed my week today")
  {
    id: "f1b8a923-3b1a-4c28-9844-3112b3e51a66",
    postId: "057c71e6-213c-44cf-9655-c389dda9084f",
    userId: "1c3e2b57-3969-4c0c-9951-203656f841e2",
    type: "angry",
  },
  {
    id: "d9e8c3a1-1254-4f90-8b17-0987a2c1f4e3",
    postId: "057c71e6-213c-44cf-9655-c389dda9084f",
    userId: "73dc420f-27ac-4ea7-a7d3-10a034b92977",
    type: "like",
  },
  {
    id: "a3f5c71b-88d0-4e2b-a134-5b4d7c9e2f11",
    postId: "901c1089-efae-4b95-b5b7-800262047c25",
    userId: "8cda66cb-80d5-4b05-b6b5-4f79d445d6a5",
    type: "like",
  },
  {
    id: "e4c2b9a7-5511-4f8a-9a00-3d2b1e8f6c55",
    postId: "901c1089-efae-4b95-b5b7-800262047c25",
    userId: "3024775f-be33-48da-8113-d50a1fad8dca",
    type: "boring",
  },
  {
    id: "b7d1f4e3-99a2-4c8f-b312-7e6d5c4b1a22",
    postId: "901c1089-efae-4b95-b5b7-800262047c25",
    userId: "ceb82e4f-87f0-4bf4-ab12-bc08081f8ddc",
    type: "like",
  },
  {
    id: "c9a4e2d1-77b5-4c11-8f99-1a2b3c4d5e66",
    postId: "351727bb-143d-46fa-84a2-7207540ea7d2",
    userId: "b47281d3-84fb-481b-8bbb-817467f5e379",
    type: "crying",
  },
  {
    id: "f8b3c1a2-66d4-4e77-9c11-2a3b4c5d6e77",
    postId: "351727bb-143d-46fa-84a2-7207540ea7d2",
    userId: "16692164-83c1-4a3e-83f3-8904e5958d22",
    type: "like",
  },

  {
    id: "d1e2f3a4-55c6-4b88-a722-8d9e0f1a2b3c",
    postId: "ec09e1e4-4862-43b9-b36a-ce4fd1e3950f",
    userId: "8b9d4060-97c0-4ff1-9263-c21855a92033",
    type: "angry",
  },
  {
    id: "e5f6a7b8-11d2-4e99-b833-9c0d1e2f3a4b",
    postId: "ec09e1e4-4862-43b9-b36a-ce4fd1e3950f",
    userId: "b47281d3-84fb-481b-8bbb-817467f5e379",
    type: "laughing",
  },
  {
    id: "f1a2b3c4-22e3-4f00-c944-0d1e2f3a4b5c",
    postId: "ec09e1e4-4862-43b9-b36a-ce4fd1e3950f",
    userId: "8cfe5b1f-1d1c-4eda-9a56-978d0b376677",
    type: "boring",
  },
  {
    id: "a1b2c3d4-33f4-4a11-d055-1e2f3a4b5c6d",
    postId: "ec09e1e4-4862-43b9-b36a-ce4fd1e3950f",
    userId: "a3936d10-c22e-4e85-9953-8e91f94bdd9a",
    type: "crying",
  },
];

export const commentReactions: DbCommentReaction[] = [
  {
    id: "23be8f65-a497-44ea-b3d1-2c9b3960dad3",
    commentId: "472f1933-125f-4625-b367-39ac06e7aff8",
    userId: "b47281d3-84fb-481b-8bbb-817467f5e379",
    type: "dislike",
  },
  {
    id: "b5b973b0-9e11-4c3f-b325-48c24640a707",
    commentId: "472f1933-125f-4625-b367-39ac06e7aff8",
    userId: "16692164-83c1-4a3e-83f3-8904e5958d22",
    type: "like",
  },
  {
    id: "441575c1-e19d-4d1d-904e-036211194975",
    commentId: "472f1933-125f-4625-b367-39ac06e7aff8",
    userId: "8cfe5b1f-1d1c-4eda-9a56-978d0b376677",
    type: "like",
  },
  {
    id: "0c279d0c-29fc-4f15-8234-5a1ceb28cbe3",
    commentId: "ea30d324-96ab-4201-b5ab-6847f1e71033",
    userId: "73dc420f-27ac-4ea7-a7d3-10a034b92977",
    type: "like",
  },
  {
    id: "fcf892af-176c-48f3-b07f-6b75dc054421",
    commentId: "ea30d324-96ab-4201-b5ab-6847f1e71033",
    userId: "8cda66cb-80d5-4b05-b6b5-4f79d445d6a5",
    type: "like",
  },
  {
    id: "df7f6a89-09c0-4de9-9794-4c303c72514f",
    commentId: "ea30d324-96ab-4201-b5ab-6847f1e71033",
    userId: "16692164-83c1-4a3e-83f3-8904e5958d22",
    type: "dislike",
  },
  {
    id: "31c12d8c-890e-44a6-9fe2-b8f30a263c21",
    commentId: "c821accd-c192-43be-81cd-f5cc5b7e2d70",
    userId: "1c3e2b57-3969-4c0c-9951-203656f841e2",
    type: "like",
  },
  {
    id: "c4218cc3-e2d9-4871-94f9-3820cef03b36",
    commentId: "c821accd-c192-43be-81cd-f5cc5b7e2d70",
    userId: "3024775f-be33-48da-8113-d50a1fad8dca",
    type: "like",
  },
  {
    id: "dc22fe85-7a3a-4f50-a05b-e844a69ea453",
    commentId: "895efcba-3bfe-429b-a3a7-b0f973bf192b",
    userId: "73dc420f-27ac-4ea7-a7d3-10a034b92977",
    type: "dislike",
  },
  {
    id: "f3c3418e-e902-4f2d-a681-721a71a9a25f",
    commentId: "895efcba-3bfe-429b-a3a7-b0f973bf192b",
    userId: "8b9d4060-97c0-4ff1-9263-c21855a92033",
    type: "like",
  },
  {
    id: "2cf28d3c-8b9d-4f88-9e55-49f4110f7058",
    commentId: "b8eba871-5cd9-4394-94ff-a72bb5e37313",
    userId: "1c3e2b57-3969-4c0c-9951-203656f841e2",
    type: "dislike",
  },
  {
    id: "2af77285-bdc7-44ea-971c-11bbc7ad2a69",
    commentId: "b8eba871-5cd9-4394-94ff-a72bb5e37313",
    userId: "a3936d10-c22e-4e85-9953-8e91f94bdd9a",
    type: "dislike",
  },
  {
    id: "4697ae6d-a685-4e8e-bc9b-7da6f53a2a9d",
    commentId: "b8eba871-5cd9-4394-94ff-a72bb5e37313",
    userId: "8b9d4060-97c0-4ff1-9263-c21855a92033",
    type: "dislike",
  },
  {
    id: "c54874c2-ab8f-4376-aa75-57fe586e470f",
    commentId: "8513198f-83fa-4f99-aeef-e0132be2b84a",
    userId: "1c3e2b57-3969-4c0c-9951-203656f841e2",
    type: "like",
  },
  {
    id: "5768c5e0-c069-4169-9499-fd65f63a6f75",
    commentId: "8513198f-83fa-4f99-aeef-e0132be2b84a",
    userId: "ceb82e4f-87f0-4bf4-ab12-bc08081f8ddc",
    type: "like",
  },
  {
    id: "4d40cd34-357e-4fcf-b219-89dfc67b36f9",
    commentId: "3d90915e-50ed-43ba-883f-834d097e9b79",
    userId: "b47281d3-84fb-481b-8bbb-817467f5e379",
    type: "like",
  },
  {
    id: "fed0e216-6711-4afd-9e65-158bba3271af",
    commentId: "3d90915e-50ed-43ba-883f-834d097e9b79",
    userId: "1c3e2b57-3969-4c0c-9951-203656f841e2",
    type: "dislike",
  },
  {
    id: "8c6bfc83-3c14-4177-93bb-3628e1e693e7",
    commentId: "3d90915e-50ed-43ba-883f-834d097e9b79",
    userId: "8b9d4060-97c0-4ff1-9263-c21855a92033",
    type: "dislike",
  },
  {
    id: "6482e96b-3211-4aa0-8a0b-ee68fef751ee",
    commentId: "7e87f1a8-44d4-418e-b41e-c0eab2e57f3f",
    userId: "1c3e2b57-3969-4c0c-9951-203656f841e2",
    type: "like",
  },
  {
    id: "a1cf3744-c86b-4612-8ee3-3594bbfa01e6",
    commentId: "7e87f1a8-44d4-418e-b41e-c0eab2e57f3f",
    userId: "8cfe5b1f-1d1c-4eda-9a56-978d0b376677",
    type: "like",
  },
  {
    id: "cdbed241-73aa-47ed-9211-8fce16f82a47",
    commentId: "7e87f1a8-44d4-418e-b41e-c0eab2e57f3f",
    userId: "b47281d3-84fb-481b-8bbb-817467f5e379",
    type: "dislike",
  },
];
