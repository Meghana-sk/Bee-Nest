const sortPostByTrending = (posts, trending) => {
  if (trending) {
    return [...posts].sort(
      (postOne, postTwo) =>
        parseInt(postTwo.likes.likeCount) +
        postTwo.comments.length -
        (parseInt(postOne.likes.likeCount) + postOne.comments.length)
    );
  } else return [...posts].reverse();
};

export { sortPostByTrending };
