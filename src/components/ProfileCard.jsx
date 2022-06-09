import {
  Flex,
  Box,
  Avatar,
  Text,
  Heading,
  HStack,
  VStack,
  Button,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EditProfileModal } from "./modals/EditProfileModal";
import { logout, updateUser } from "../redux/slices";
import { followUser, unfollowUser } from "../redux/asyncThunk";

const ProfileCard = ({ profileDetails = {}, numberOfPosts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    _id,
    username,
    firstName,
    lastName,
    profilePic,
    bio,
    website,
    following,
    followers,
  } = profileDetails;
  const { user, token } = useSelector((state) => state.auth);

  const isCurrentLoggedInUser = username === user.username;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    toast.success("Logged Out Successfully!!");
  };

  const followUserHandler = async () => {
    const response = await dispatch(followUser({ userId: _id, token }));
    if (response.payload.status === 200) {
      dispatch(updateUser(response.payload.data?.user));
    } else {
      toast.error(response.payload.data.errors[0]);
    }
  };

  const unfollowUserHandler = async () => {
    const response = await dispatch(unfollowUser({ userId: _id, token }));
    dispatch(updateUser(response?.payload.data.user));
  };

  return (
    <Box p={4}>
      <Flex
        flexDirection={"column"}
        gap={3}
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"500px"}
      >
        <Avatar size={"xl"} src={profilePic}></Avatar>
        <Heading>
          {firstName} {lastName}
        </Heading>
        <Text fontSize={`16px`} fontWeight="600">
          @{username}
        </Text>
        {!isCurrentLoggedInUser &&
        user.following.some(
          (userFollow) => userFollow.username === username
        ) ? (
          <Button colorScheme="purple" onClick={unfollowUserHandler}>
            Unfollow
          </Button>
        ) : (
          !isCurrentLoggedInUser && (
            <Button colorScheme="purple" onClick={followUserHandler}>
              Follow
            </Button>
          )
        )}
        <Text borderRadius={"md"} placeholder="bio">
          {bio}
        </Text>
        <Link color={"blue.600"} href={website} isExternal>
          {website}
        </Link>
        <HStack maxW={"500px"} bg="white" borderRadius="lg">
          <VStack py="2" px="4">
            <Text fontWeight="700">{numberOfPosts}</Text>
            <Text>Posts</Text>
          </VStack>
          <VStack py="2" px="4">
            <Text fontWeight="700">{followers?.length}</Text>
            <Text>Followers</Text>
          </VStack>
          <VStack py="2" px="4">
            <Text fontWeight="700">{following?.length}</Text>
            <Text>Following</Text>
          </VStack>
        </HStack>
        {isCurrentLoggedInUser && (
          <HStack>
            <Button colorScheme="purple" onClick={onOpen}>
              Edit profile
            </Button>
            <Button colorScheme="red" onClick={logoutHandler}>
              Logout
            </Button>
          </HStack>
        )}
      </Flex>
      {
        <EditProfileModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          userProfile={user}
        />
      }
    </Box>
  );
};

export { ProfileCard };
