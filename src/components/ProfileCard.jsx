import {
  Flex,
  Box,
  Avatar,
  Text,
  Heading,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";

const ProfileCard = () => {
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
          <Button bg={"purple.400"}>Edit profile</Button>
          <Button bg={"red.400"}>Logout</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export { ProfileCard };
