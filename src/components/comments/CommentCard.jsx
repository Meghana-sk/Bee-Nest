import {
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Flex,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteComment } from "../../redux/asyncThunk";
import { EditCommentModal } from "../../components";

const CommentCard = ({ comment, postId }) => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isCurrentLoggedInUserComment = user.username === comment.username;

  const deleteCommentHandler = async () => {
    const response = await dispatch(
      deleteComment({ postId, commentId: comment._id, token })
    );
    if (response?.payload.status === 201) {
      toast.info("Successfully deleted comment");
    } else {
      toast.error(`${response.payload.data.errors[0]}`);
    }
  };

  return (
    <Flex flexDirection={"column"} backgroundColor={"gray.100"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box display={"flex"} py={1} px={2} alignItems={"center"}>
          <Avatar size="sm" src={comment?.profilePic}></Avatar>
          <Text fontWeight={"bold"} fontSize={`14px`} m={`10px`}>
            {comment.username}
          </Text>
        </Box>
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
              <MenuItem onClick={onOpen}>Edit</MenuItem>
              <MenuItem onClick={deleteCommentHandler}>Delete</MenuItem>
            </MenuList>
          </Menu>
        ) : null}
      </Flex>
      <Text fontSize={`14px`} ml={`10px`} mb={`8px`}>
        {comment.commentData}
      </Text>
      {isOpen ? (
        <EditCommentModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          comment={comment}
          postId={postId}
        />
      ) : null}
    </Flex>
  );
};

export { CommentCard };
