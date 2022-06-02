import { DataStore } from "@aws-amplify/datastore";
import { Post, Comment } from "./models";

await DataStore.save(
  new Post({
    title: "Lorem ipsum dolor sit amet",
    comments: [],
    content: "Lorem ipsum dolor sit amet",
  })
);

await DataStore.save(
  new Comment({
    postID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
    content: "Lorem ipsum dolor sit amet",
  })
);
