import { HStack, Avatar, Input, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { addComment } from "../../redux/asyncThunk";

const CommentBox = ({ postId }) => {
  const { user, token } = useSelector((state) => state.auth);
  const { profilePic } = user;
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState("");

  const addCommentHandler = async () => {
    if (commentData === "") {
      toast.error("Comment cannot be empty");
    } else {
      const response = await dispatch(
        addComment({ postId, commentData, token })
      );
      if (response?.payload.status === 201) {
        toast.success("Comment added successfully");
      } else {
        toast.error(`${response.payload.data.errors[0]}`);
      }
      setCommentData("");
    }
  };

  return (
    <HStack>
      <Avatar src={profilePic} size={"sm"}></Avatar>
      <Input
        placeholder="Write your comment"
        mb="8"
        value={commentData}
        onChange={(e) => setCommentData(e.target.value)}
      />
      <Button colorScheme="purple" onClick={addCommentHandler}>
        Post
      </Button>
    </HStack>
  );
};

export { CommentBox };
