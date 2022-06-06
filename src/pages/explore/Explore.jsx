import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostCard } from "../../components";
import { getPosts } from "../../redux/asyncThunk";

const Explore = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
      {posts.length ? (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p>No posts to show</p>
      )}
    </Box>
  );
};

export { Explore };
