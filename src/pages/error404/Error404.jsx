import { Link } from "react-router-dom";
import { Box, Heading, Button, VStack, Image, Text } from "@chakra-ui/react";

const Error404 = () => {
  return (
    <VStack minH="88vh">
      <Heading>Error 404</Heading>
      <Box boxSize="sm">
        <Image
          src="https://res.cloudinary.com/meghanaskcloud/image/upload/v1654840273/Social%20media/profile%20pics/error404-hero_dkg13o.svg"
          alt="You have lost your path"
        />
      </Box>
      <Text>You have lost your path</Text>
      <Link to="/home">
        <Button colorScheme={"purple"}>Go to Home</Button>
      </Link>
    </VStack>
  );
};

export { Error404 };
