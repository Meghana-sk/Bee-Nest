import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostCard, Filters } from "../../components";
import { getPosts } from "../../redux/asyncThunk";
import { sortPostByTrending, sortPostByDate } from "../../utils";

const Explore = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const [trending, setTrending] = useState(false);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  /** Filter trending posts */
  const trendingFilteredPosts = sortPostByTrending(posts, trending);
  /** Filter latest/older posts */
  const dateFilteredPosts = sortPostByDate(trendingFilteredPosts, sortBy);

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems={"center"}
      gap={4}
      p={4}
      bg={"gray.100"}
    >
      <Filters
        trending={trending}
        setTrending={setTrending}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {dateFilteredPosts.length ? (
        dateFilteredPosts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p>No posts to show</p>
      )}
    </Box>
  );
};

export { Explore };
