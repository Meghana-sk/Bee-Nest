import { Box, Text } from "@chakra-ui/react";
import { ProfileCard, PostCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../redux/asyncThunk";

const Profile = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const currentLoggedInUserPosts = [...posts].filter(
    (post) => user.username === post.username
  );

  return (
    <Box
      backgroundColor={"gray.200"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      p={4}
      gap={3}
    >
      <ProfileCard
        profileDetails={user}
        numberOfPosts={currentLoggedInUserPosts.length}
      />
      <Text fontWeight={800} fontSize={"20px"}>
        Your posts
      </Text>
      {currentLoggedInUserPosts.length > 0 ? (
        [...currentLoggedInUserPosts]
          ?.reverse()
          .map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <Text>Post something NOW!!!</Text>
      )}
    </Box>
  );
};

export { Profile };
