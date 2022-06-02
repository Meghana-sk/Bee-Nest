import { Box, Text } from "@chakra-ui/react";
import { ProfileCard, PostCard } from "../../components";

const Profile = () => {
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
      <ProfileCard />
      <Text fontWeight={800} fontSize={"20px"}>
        Your posts
      </Text>
      <PostCard />
    </Box>
  );
};

export { Profile };
