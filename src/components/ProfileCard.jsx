import {
  Flex,
  Box,
  Avatar,
  Text,
  Heading,
  HStack,
  VStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EditProfileModal } from "./modals/EditProfileModal";
import { logout } from "../redux/slices";

const ProfileCard = ({ profileDetails = {}, numberOfPosts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    username,
    firstName,
    lastName,
    profilePic,
    bio,
    following,
    followers,
  } = profileDetails;
  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    toast.success("Logged Out Successfully!!");
  };

  return (
    <Box p={4}>
      <Flex
        flexDirection={"column"}
        gap={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Avatar size={"xl"} src={profilePic}></Avatar>
        <Heading>
          {firstName} {lastName}
        </Heading>
        <Text>@{username}</Text>
        <Text borderRadius={"md"} placeholder="bio">
          {bio}
        </Text>
        <HStack maxW={"500px"} bg="white" borderRadius="lg">
          <VStack py="2" px="4">
            <Text fontWeight="700">{numberOfPosts}</Text>
            <Text>Posts</Text>
          </VStack>
          <VStack py="2" px="4">
            <Text fontWeight="700">{followers.length}</Text>
            <Text>Followers</Text>
          </VStack>
          <VStack py="2" px="4">
            <Text fontWeight="700">{following.length}</Text>
            <Text>Following</Text>
          </VStack>
        </HStack>
        <HStack>
          <Button colorScheme="purple" onClick={onOpen}>
            Edit profile
          </Button>
          <Button colorScheme="red" onClick={logoutHandler}>
            Logout
          </Button>
        </HStack>
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
