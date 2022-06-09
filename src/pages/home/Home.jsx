import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/asyncThunk";
import { PostCard, Filters, FollowerSuggestions } from "../../components";
import { sortPostByTrending, sortPostByDate } from "../../utils";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [trending, setTrending] = useState(false);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  /** The feed is filled with users the loggedin user is following */
  const feedPosts = posts?.filter(
    (post) =>
      user.username === post.username ||
      user.following.some((following) => following.username === post.username)
  );

  /** Filter trending posts on user feed */
  const trendingFilteredPosts = sortPostByTrending(feedPosts, trending);
  /** Filter latest/older posts on user feed */
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
      <FollowerSuggestions />
      <Filters
        trending={trending}
        setTrending={setTrending}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {dateFilteredPosts.length ? (
        dateFilteredPosts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p>There are no posts to display</p>
      )}
    </Box>
  );
};

export { Home };
