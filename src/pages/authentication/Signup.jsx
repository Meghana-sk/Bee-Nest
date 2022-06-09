import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { signup } from "../../redux/asyncThunk";
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
  HStack,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const userInputChangeHandler = (e) => {
    setUserData((usrdata) => ({ ...usrdata, [e.target.name]: e.target.value }));
  };

  const handleShowClick = () =>
    setShowPassword((showPassword) => !showPassword);
  const handleConfirmPwShowClick = () =>
    setShowConfirmPassword((showConfirmPassword) => !showConfirmPassword);

  const validateInputs = () => {
    return (
      userData.username &&
      userData.firstName &&
      userData.lastName &&
      userData.password &&
      userData.confirmPassword
    );
  };

  const signupHandler = async (e) => {
    if (validateInputs()) {
      if (userData.password === userData.confirmPassword) {
        const response = await dispatch(signup(userData));
        if (response?.payload?.status === 201) {
          localStorage.setItem(
            "user",
            JSON.stringify(response.payload.data.createdUser)
          );
          localStorage.setItem("token", response.payload.data.encodedToken);
          toast.success("Successfully signed up");
          navigate(location?.state?.from?.pathname || "/home", {
            replace: true,
          });
        } else {
          toast.error("Something went wrong... Please Try After Sometime");
        }
      } else {
        toast.error("Password and confirm password do not match");
      }
    } else {
      toast.error("Enter all the details");
    }
  };

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
          <Heading color="purple.400">Signup</Heading>
          <Box
            minW={{ base: "80%", md: "468px" }}
            backgroundColor={"whiteAlpha.900"}
            boxShadow={"md"}
            mt={4}
          >
            <Stack spacing={4} p={"1rem"} backgroundColor={"whiteAlpha.900"}>
              <FormControl>
                <HStack mb="4">
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="first name"
                        name="firstName"
                        id="firstName"
                        value={userData.firstName}
                        onChange={userInputChangeHandler}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="lastname"
                        name="lastName"
                        id="lastName"
                        value={userData.lastName}
                        onChange={userInputChangeHandler}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaUserAlt />}
                    color="gray.300"
                  />
                  <Input
                    placeholder="Enter Username"
                    mb="4"
                    type={"text"}
                    name="username"
                    id="username"
                    value={userData.username}
                    onChange={userInputChangeHandler}
                    isRequired
                  />
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
                    name="password"
                    id="password"
                    value={userData.password}
                    onChange={userInputChangeHandler}
                    isRequired
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaLock />}
                    color="gray.300"
                  />
                  <Input
                    placeholder="Confirm Password"
                    mb="8"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={userInputChangeHandler}
                    isRequired
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleConfirmPwShowClick}
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button
                  variant="solid"
                  display="block"
                  w="100%"
                  mb="4"
                  colorScheme="purple"
                  onClick={signupHandler}
                >
                  Signup
                </Button>
              </FormControl>
            </Stack>
          </Box>
          <Box display="flex" gap={1} alignItems={"center"}>
            Already have an account?
            <Link to="/login" ml={1}>
              <Text color="purple.600" fontWeight={600}>
                Login
              </Text>
            </Link>
          </Box>
        </Flex>
      </Stack>
    </Flex>
  );
};

export { Signup };
