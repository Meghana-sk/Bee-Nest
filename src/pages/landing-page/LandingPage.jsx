import { Flex, Image, Box, VStack } from "@chakra-ui/react";
import { FollowerSuggestions, PostCard } from "../../components";
import { Login } from "../../pages";

const LandingPage = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"gray.200"}
      flexWrap={"wrap"}
      gap={4}
    >
      <Box
        boxSize="md"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src="https://res.cloudinary.com/meghanaskcloud/image/upload/v1654162356/Social%20media/heroImageSocialMedia_aqnuql.svg" />
      </Box>
      <Login heading="Come join Bee Nest" />
    </Flex>
  );
};

export { LandingPage };
