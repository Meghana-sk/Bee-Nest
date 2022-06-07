import { Box, Tabs, TabList, Tab } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/asyncThunk";
import { PostCard } from "../../components";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  /** The feed is filled with users the loggedin user is following */
  let feedUsers = user.following
    ? user.following.map((user) => user.username)
    : null;
  feedUsers = [...feedUsers, user.username];

  const feedPosts = posts
    .filter((post) => feedUsers.includes(post.username))
    .reverse();

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
      <Tabs variant="soft-rounded" colorScheme="purple">
        <TabList>
          <Tab width={"50%"} p={4} minWidth={"300px"}>
            Trending
          </Tab>
          <Tab width={"50%"} p={4} minWidth={"300px"}>
            Filters
          </Tab>
        </TabList>
      </Tabs>
      {feedPosts.length ? (
        feedPosts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p>There are no posts to display</p>
      )}
    </Box>
  );
};

export { Home };
