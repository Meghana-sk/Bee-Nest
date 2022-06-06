import { Box, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { PostCard } from "../../components";
import { useEffect } from "react";
import { getBookmarksForAuthUser } from "../../redux/asyncThunk";

const BookMarks = () => {
  const { token, bookmarks } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarksForAuthUser(token));
  }, [dispatch, token]);
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems={"center"}
      gap={4}
      p={4}
      bg={"gray.100"}
    >
      {bookmarks.length ? (
        bookmarks.map((post) => <PostCard post={post} key={post._id} />)
      ) : (
        <Text>No bookmarked posts available</Text>
      )}
    </Box>
  );
};

export { BookMarks };
