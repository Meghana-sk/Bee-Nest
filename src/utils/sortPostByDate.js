import { OLDEST_FIRST, NEWEST_FIRST } from "../shared/variables";

const sortPostByDate = (posts, sortBy) => {
  switch (sortBy) {
    case OLDEST_FIRST:
      return [...posts].sort(
        (postOne, postTwo) =>
          new Date(postOne.createdAt).getTime() -
          new Date(postTwo.createdAt).getTime()
      );
    case NEWEST_FIRST:
      return [...posts].sort(
        (postOne, postTwo) =>
          new Date(postTwo.createdAt).getTime() -
          new Date(postOne.createdAt).getTime()
      );
    default:
      return posts;
  }
};

export { sortPostByDate };
