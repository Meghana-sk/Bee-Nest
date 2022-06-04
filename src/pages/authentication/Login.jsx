import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
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
import { login } from "../../redux/asyncThunk";

const Login = ({ heading = "Login" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const userInputChangeHandler = (e) => {
    setUserData((usrdata) => ({ ...usrdata, [e.target.name]: e.target.value }));
  };

  const guestUser = {
    username: "Guest123",
    password: "Guest@123",
  };

  const guestLoginHandler = (e) => {
    e.preventDefault();
    setUserData(guestUser);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (userData.username && userData.password) {
      const response = await dispatch(login(userData));
      if (response?.payload?.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify(response?.payload.data.foundUser)
        );
        localStorage.setItem("token", response?.payload.data.encodedToken);
        toast.success(
          `Logged in as ${response?.payload.data.foundUser.firstName}`
        );
        navigate(location?.state?.from?.pathname || "/home", {
          replace: true,
        });
      } else {
        toast.error("Something went wrong! Please try again");
      }
    } else {
      toast.error("Either username or password is empty");
    }
  };

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
                  <Input
                    placeholder="Enter Username"
                    mb="4"
                    type={"text"}
                    name="username"
                    id="username"
                    value={userData.username}
                    onChange={userInputChangeHandler}
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
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={userData.password}
                    onChange={userInputChangeHandler}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button
                  variant="outline"
                  display="block"
                  w="100%"
                  mb="4"
                  onClick={guestLoginHandler}
                >
                  Enter Guest Credentials
                </Button>
                <Button
                  variant="solid"
                  display="block"
                  w="100%"
                  mb="4"
                  colorScheme="purple"
                  onClick={loginHandler}
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
