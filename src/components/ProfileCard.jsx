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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EditProfileModal } from "./modals/EditProfileModal";
import { logout } from "../redux/slices";

const ProfileCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <Avatar
          size={"xl"}
          src="https://res.cloudinary.com/meghanaskcloud/image/upload/v1654017744/Social%20media/aiony-haust-3TLl_97HNJo-unsplash_g1ezar.jpg"
        ></Avatar>
        <Heading>Meghana S K</Heading>
        <Text>@meghanask</Text>
        <Text borderRadius={"md"} placeholder="bio">
          Engineer | Traveller
        </Text>
        <HStack maxW={"500px"} bg="white" borderRadius="lg">
          <VStack py="2" px="4">
            <Text fontWeight="700">200</Text>
            <Text>Posts</Text>
          </VStack>
          <VStack py="2" px="4">
            <Text fontWeight="700">5m</Text>
            <Text>Followers</Text>
          </VStack>
          <VStack py="2" px="4">
            <Text fontWeight="700">100</Text>
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
      {<EditProfileModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
    </Box>
  );
};

export { ProfileCard };
