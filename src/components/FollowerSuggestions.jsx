import { Box, Flex, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../redux/asyncThunk";
import { FollowerSuggestionsProfile } from "../components";

const FollowerSuggestions = () => {
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const otherUsers = users?.filter((item) => item.username !== user?.username);

  const usersNotFollowedByLoggedInUser = otherUsers.filter((item) =>
    item.followers.every((follower) => follower.username !== user?.username)
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Box
      position={"fixed"}
      top={"100px"}
      right={"20px"}
      width={"fit-content"}
      p={4}
      borderRadius={5}
      backgroundColor="gray.300"
      m={1}
    >
      <Text fontWeight={"bold"}>Suggestions for you</Text>
      <Flex m={1} justifyContent="flex-start" flexDirection={"column"} gap={2}>
        {usersNotFollowedByLoggedInUser?.length
          ? usersNotFollowedByLoggedInUser.map((userSuggestion) => (
              <FollowerSuggestionsProfile user={userSuggestion} />
            ))
          : null}
      </Flex>
    </Box>
  );
};

export { FollowerSuggestions };
