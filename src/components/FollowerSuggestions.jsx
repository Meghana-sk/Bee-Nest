import { Box, VStack, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../redux/asyncThunk";
import { FollowerSuggestionsProfile } from "../components";

const FollowerSuggestions = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
        <FollowerSuggestionsProfile user={user} />
        <FollowerSuggestionsProfile />
        <FollowerSuggestionsProfile />
      </VStack>
    </Box>
  );
};

export { FollowerSuggestions };
