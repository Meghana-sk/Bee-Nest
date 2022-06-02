import {
  Flex,
  Box,
  Avatar,
  Text,
  Heading,
  HStack,
  VStack,
  Button,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { EditProfileModal } from "./modals/EditProfileModal";

const ProfileCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Button bg={"purple.400"} onClick={onOpen}>
            Edit profile
          </Button>
          <Button bg={"red.400"}>Logout</Button>
        </HStack>
      </Flex>
      {<EditProfileModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
    </Box>
  );
};

export { ProfileCard };
