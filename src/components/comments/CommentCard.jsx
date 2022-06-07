import {
  HStack,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import { useSelector } from "react-redux";

const CommentCard = ({ comment }) => {
  const { user } = useSelector((state) => state.auth);
  const isCurrentLoggedInUserComment = user.username === comment.username;

  return (
    <Flex flexDirection={"column"} backgroundColor={"gray.100"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text fontWeight={"bold"} fontSize={`14px`} m={`10px`}>
          {comment.username}
        </Text>
        {isCurrentLoggedInUserComment ? (
          <Menu>
            <MenuButton
              cursor="pointer"
              _hover={{ bg: "gray.200" }}
              borderRadius="full"
              p="1"
            >
              <IconButton
                aria-label="Open Comment Menu"
                backgroundColor={"transparent"}
                size={"sm"}
                icon={<FaEllipsisV />}
              />
            </MenuButton>
            <MenuList minWidth="100px">
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        ) : null}
      </Flex>
      <Text fontSize={`14px`} ml={`10px`} mb={`8px`}>
        {comment?.text}
      </Text>
    </Flex>
  );
};

export { CommentCard };
