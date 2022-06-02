import { Box } from "@chakra-ui/react";
import { PostCard } from "../../components";

const BookMarks = () => {
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
      <PostCard />
      <PostCard />
      <PostCard />
    </Box>
  );
};

export { BookMarks };
