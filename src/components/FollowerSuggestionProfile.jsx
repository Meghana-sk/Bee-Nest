import { Flex, Avatar, Box, Text, Tooltip, IconButton } from "@chakra-ui/react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../redux/asyncThunk";
import { updateUser } from "../redux/slices";

const FollowerSuggestionsProfile = ({
  user: { _id, username, firstName, lastName, profilePic },
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const followUserHandler = async (userId, token) => {
    const response = await dispatch(followUser({ userId, token }));
    if (response.payload.status === 200) {
      dispatch(updateUser(response.payload.data?.user));
    } else {
      toast.error(response.payload.data.errors[0]);
    }
  };

  return (
    <Flex
      alignItems={"center"}
      flexGrow="1"
      gap={2}
      justifyContent={"flex-start"}
    >
      <Avatar
        size="sm"
        src={profilePic}
        cursor="pointer"
        onClick={() => navigate(`/profile/${username}`)}
      />
      <Box cursor="pointer" onClick={() => navigate(`/profile/${username}`)}>
        <Text fontWeight={"600"}>
          {firstName} {lastName}
        </Text>
        <Text fontSize={"sm"} color="gray.150">
          @{username}
        </Text>
      </Box>
      <Tooltip label="Follow" fontSize="sm">
        <IconButton
          borderRadius="full"
          size={"sm"}
          marginLeft="auto"
          icon={<AiOutlineUserAdd />}
          onClick={() => followUserHandler(_id, token)}
        />
      </Tooltip>
    </Flex>
  );
};

export { FollowerSuggestionsProfile };
