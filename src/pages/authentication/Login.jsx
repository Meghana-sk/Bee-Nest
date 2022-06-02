import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Stack,
  FormControl,
  Button,
  Input,
  Avatar,
  Heading,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Login = ({ heading = "Login" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <Flex
      width={"100wh"}
      height={"100vh"}
      backgroundColor={"gray.200"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack minW={{ base: "80%", md: "468px" }}>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Avatar bg="purple.500" />
          <Heading color="purple.400">{heading}</Heading>
          <Box
            minW={{ base: "80%", md: "468px" }}
            backgroundColor={"whiteAlpha.900"}
            boxShadow={"md"}
            mt={4}
          >
            <Stack spacing={4} p={"1rem"} backgroundColor={"whiteAlpha.900"}>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaUserAlt />}
                    color="gray.300"
                  />
                  <Input placeholder="Enter Username" mb="4" type={"email"} />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaLock />}
                    color="gray.300"
                  />
                  <Input
                    placeholder="Enter Password"
                    mb="8"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button variant="outline" display="block" w="100%" mb="4">
                  Enter Guest Credentials
                </Button>
                <Button
                  variant="solid"
                  display="block"
                  w="100%"
                  mb="4"
                  colorScheme="purple"
                >
                  Login
                </Button>
              </FormControl>
            </Stack>
          </Box>
          <Box>
            New to us?
            <Link color="purple.500" to="/signup">
              Sign Up
            </Link>
          </Box>
        </Flex>
      </Stack>
    </Flex>
  );
};

export { Login };
