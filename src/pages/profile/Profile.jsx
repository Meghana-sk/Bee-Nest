import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { ProfileCard, PostCard, FollowerSuggestions } from "../../components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, getUserPosts } from "../../services";

const Profile = () => {
  const { posts } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  const [isLargerThan952] = useMediaQuery("(min-width: 952px)");

  const { username } = useParams();

  const [userProfile, setUserProfile] = useState("");
  const [userPosts, setUserPosts] = useState("");

  useEffect(() => {
    getUser(setUserProfile, username);
    getUserPosts(setUserPosts, username);
  }, [username, users, posts]);

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
      {isLargerThan952 ? <FollowerSuggestions /> : null}
      <ProfileCard
        profileDetails={userProfile}
        setProfile={setUserProfile}
        numberOfPosts={userPosts.length}
      />
      <Text fontWeight={800} fontSize={"20px"}>
        Posts
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
