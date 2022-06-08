import { Box, Text } from "@chakra-ui/react";
import { ProfileCard, PostCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../../redux/asyncThunk";
import { getUser, getUserPosts } from "../../services";

const Profile = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);

  const { username } = useParams();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  const [userProfile, setUserProfile] = useState("");
  const [userPosts, setUserPosts] = useState("");

  // const currentLoggedInUserPosts = [...posts].filter(
  //   (post) => user.username === post.username
  // );

  useEffect(() => {
    getUser(setUserProfile, username);
    getUserPosts(setUserPosts, username);
  }, [username, users, posts]);

  console.log("user profile", userProfile);

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
        profileDetails={userProfile}
        numberOfPosts={userPosts.length}
      />
      <Text fontWeight={800} fontSize={"20px"}>
        Your posts
      </Text>
      {userPosts.length > 0 ? (
        [...userPosts]
          ?.reverse()
          .map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <Text>Post something NOW!!!</Text>
      )}
    </Box>
  );
};

export { Profile };
