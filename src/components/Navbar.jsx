import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  HStack,
  Tooltip,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

const Navbar = () => {
  return (
    <Box
      bg="white"
      boxShadow={"md"}
      p={4}
      position={"sticky"}
      top={0}
      zIndex={7}
    >
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Link to="/home">
          <Heading>BEE Nest</Heading>
        </Link>
        <div display={"flex"} alignItems={"center"}>
          <Link to={"/home"}>
            <Tooltip label="Home">
              <IconButton
                borderRadius="full"
                icon={<AiOutlineHome />}
                ml={4}
              ></IconButton>
            </Tooltip>
          </Link>
          <Link to={"/explore"}>
            <Tooltip label="Explore">
              <IconButton
                borderRadius="full"
                icon={<AiOutlineCompass />}
                ml={4}
              ></IconButton>
            </Tooltip>
          </Link>
          <Link to={"/bookmark"}>
            <Tooltip label="Explore">
              <IconButton
                borderRadius="full"
                icon={<BsBookmark />}
                ml={4}
              ></IconButton>
            </Tooltip>
          </Link>
          <Link to="/post">
            <Tooltip label="Add post">
              <IconButton
                borderRadius="full"
                icon={<AiOutlinePlusCircle />}
                ml={4}
              ></IconButton>
            </Tooltip>
          </Link>
          <Link to={"/profile"}>
            <Tooltip label="Profile">
              <Avatar
                size="sm"
                src="https://res.cloudinary.com/meghanaskcloud/image/upload/v1654017744/Social%20media/aiony-haust-3TLl_97HNJo-unsplash_g1ezar.jpg"
                ml={4}
              ></Avatar>
            </Tooltip>
          </Link>
        </div>
      </HStack>
    </Box>
  );
};

export { Navbar };
