import { Flex, Image, Box, useMediaQuery } from "@chakra-ui/react";
import { Login } from "../../pages";

const LandingPage = () => {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"gray.200"}
      gap={4}
      flexWrap={isLargerThan1000 ? null : "wrap-reverse"}
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
