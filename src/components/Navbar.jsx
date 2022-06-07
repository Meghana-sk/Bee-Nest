import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  HStack,
  Tooltip,
  IconButton,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useSelector } from "react-redux";
import { PostModal } from "./modals/PostModal";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useSelector((state) => state.auth);
  return (
    <Box
      bg="white"
      boxShadow={"md"}
      p={4}
      position={"sticky"}
      top={0}
      zIndex={7}
    >
      <HStack justifyContent={"space-between"}>
        <Link to="/home">
          <Heading>BEE Nest</Heading>
        </Link>
        <div display={"flex"}>
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
            <Tooltip label="Bookmark">
              <IconButton
                borderRadius="full"
                icon={<BsBookmark />}
                ml={4}
              ></IconButton>
            </Tooltip>
          </Link>
          <Tooltip label="Add post">
            <IconButton
              borderRadius="full"
              icon={<AiOutlinePlusCircle />}
              ml={4}
              onClick={onOpen}
            ></IconButton>
          </Tooltip>
          <Link to={`/profile/${user.username}`}>
            <Tooltip label="Profile">
              <Avatar size="sm" src={user.profilePic} ml={4}></Avatar>
            </Tooltip>
          </Link>
        </div>
      </HStack>
      <PostModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export { Navbar };
