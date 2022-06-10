import {
  Flex,
  HStack,
  Avatar,
  Text,
  IconButton,
  Box,
  Tooltip,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineEllipsis } from "react-icons/ai";
import { BsBookmarkFill, BsFillHeartFill } from "react-icons/bs";
import { MdOutlineModeComment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CommentCard, CommentBox, PostModal } from "../components";
import {
  bookmarkPost,
  removeBookMarkedPost,
  deletePost,
  likedPost,
  dislikedPost,
} from "../redux/asyncThunk";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { token, bookmarks, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const alreadyBookmarked = bookmarks.some(
    (bookmarkedPost) => bookmarkedPost === post._id
  );

  const bookmarkPostHandler = async () => {
    if (alreadyBookmarked)
      await dispatch(removeBookMarkedPost({ postId: post._id, token }));
    else await dispatch(bookmarkPost({ postId: post._id, token }));
  };

  const isCurrentLoggedInUsersPost = user.username === post.username;

  const deletePostHandler = () => {
    const response = dispatch(deletePost({ post, token }));
    try {
      if (response?.payload.status === 201) {
        toast.info("Post deleted successfully!!");
      } else {
        toast.error(`${response.payload.data.errors[0]}`);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const {
    likes: { likedBy, likeCount },
    comments,
  } = post;

  const isPostAlreadyLiked = likedBy.some(
    (like) => like.username === user?.username
  );

  const likePostHandler = async () => {
    isPostAlreadyLiked
      ? await dispatch(dislikedPost({ post, token }))
      : await dispatch(likedPost({ post, token }));
  };

  const latestCommentsOnTopArray = [...comments].reverse();

  // GET DATE
  const getDate = (createdAt) => {
    const date = new Date(createdAt).toLocaleString("en-In", {
      day: "2-digit",
    });
    const month = new Date(createdAt).toLocaleString("en-In", {
      month: "short",
    });
    const year = new Date(createdAt).getFullYear();
    return `${date} ${month} ${year}`;
  };

  return (
    <Box backgroundColor={"gray.50"} width={"50%"} p={4} minWidth={"300px"}>
      <Flex flexDirection={"column"} justifyContent={"center"} gap={4}>
        <HStack justifyContent="space-between">
          <Box
            display="flex"
            gap={1.5}
            cursor="pointer"
            onClick={() => navigate(`/profile/${post.username}`)}
          >
            <Avatar size="sm" src={post?.profilePic}></Avatar>
            <Text fontWeight={"bold"}>
              {post?.firstName} {post?.lastName}
            </Text>
            <Text>@{post?.username}</Text>
            <Text>{getDate(post?.createdAt)}</Text>
          </Box>
          {isCurrentLoggedInUsersPost && (
            <Menu>
              <MenuButton as={Button} p={0.5}>
                <IconButton
                  aria-label="Open Menu"
                  backgroundColor={"transparent"}
                  marginLeft={"auto"}
                  fontSize="30px"
                  size={"xs"}
                  icon={<AiOutlineEllipsis />}
                />
              </MenuButton>
              <MenuList minWidth="100px">
                <MenuItem onClick={onOpen}>Edit</MenuItem>
                <MenuItem onClick={deletePostHandler}>Delete</MenuItem>
              </MenuList>
            </Menu>
          )}
        </HStack>
        <Text>{post?.content}</Text>
        {isCurrentLoggedInUsersPost ? (
          <PostModal
            isOpen={isOpen}
            onClose={onClose}
            isEditPost={true}
            postEditData={post}
          />
        ) : null}
        <HStack justifyContent={"space-between"}>
          <Box display={"flex"} alignItems={"center"} gap={`${8}px`}>
            <Tooltip label="Like" fontSize="sm">
              <IconButton
                icon={
                  isPostAlreadyLiked ? <BsFillHeartFill /> : <AiOutlineHeart />
                }
                onClick={likePostHandler}
              ></IconButton>
            </Tooltip>
            <Text>{likeCount}</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={`${8}px`}>
            <Tooltip label="Comment" fontSize="sm">
              <IconButton icon={<MdOutlineModeComment />}></IconButton>
            </Tooltip>
            <Text>{post.comments.length}</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={`${8}px`}>
            <Tooltip label="Bookmark" fontSize="sm">
              <IconButton
                icon={alreadyBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
                onClick={bookmarkPostHandler}
              ></IconButton>
            </Tooltip>
          </Box>
        </HStack>
        <CommentBox postId={post._id} />
        {latestCommentsOnTopArray.length
          ? latestCommentsOnTopArray.map((comment) => (
              <CommentCard comment={comment} postId={post._id} />
            ))
          : null}
      </Flex>
    </Box>
  );
};

export { PostCard };
