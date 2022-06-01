import { Box, VStack, Text } from "@chakra-ui/react";
import { FollowerSuggestionsProfile } from "../components";

const FollowerSuggestions = () => {
  return (
    <Box
      position={"fixed"}
      top={"100px"}
      right={"40px"}
      width={"fit-content"}
      p={4}
      borderRadius={5}
      backgroundColor="gray.300"
      m={1}
    >
      <Text fontWeight={"bold"}>Suggestions for you</Text>
      <VStack m={1}>
        <FollowerSuggestionsProfile />
        <FollowerSuggestionsProfile />
        <FollowerSuggestionsProfile />
      </VStack>
    </Box>
  );
};

export { FollowerSuggestions };
