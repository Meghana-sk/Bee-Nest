import {
  Flex,
  HStack,
  Avatar,
  Text,
  IconButton,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { MdOutlineModeComment } from "react-icons/md";
import { CommentBox } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkPost, removeBookMarkedPost } from "../redux/asyncThunk";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { token, bookmarks } = useSelector((state) => state.auth);

  const alreadyBookmarked = bookmarks.some(
    (bookmarkedPost) => bookmarkedPost._id === post._id
  );
  const bookmarkPostHandler = () => {
    if (alreadyBookmarked)
      dispatch(removeBookMarkedPost({ postId: post._id, token }));
    else dispatch(bookmarkPost({ postId: post._id, token }));
  };
  return (
    <Box backgroundColor={"gray.50"} width={"50%"} p={4} minWidth={"300px"}>
      <Flex flexDirection={"column"} justifyContent={"center"} gap={4}>
        <HStack>
          <Avatar size="sm" src={post?.profilePic}></Avatar>
          <Text fontWeight={"bold"}>
            {post?.firstName} {post?.lastName}
          </Text>
          <Text>@{post?.username}</Text>
        </HStack>
        <Text>{post?.content}</Text>
        <HStack justifyContent={"space-between"}>
          <Tooltip label="Like" fontSize="sm">
            <IconButton icon={<AiOutlineHeart />}></IconButton>
          </Tooltip>
          <Tooltip label="Comment" fontSize="sm">
            <IconButton icon={<MdOutlineModeComment />}></IconButton>
          </Tooltip>
          <Tooltip label="Bookmark" fontSize="sm">
            <IconButton
              icon={alreadyBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
              onClick={bookmarkPostHandler}
            ></IconButton>
          </Tooltip>
        </HStack>
        <CommentBox />
      </Flex>
    </Box>
  );
};

export { PostCard };
