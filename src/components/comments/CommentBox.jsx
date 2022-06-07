import { HStack, Avatar, Input, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CommentBox = () => {
  const { user } = useSelector((state) => state.auth);
  const { profilePic } = user;
  return (
    <HStack>
      <Avatar src={profilePic} size={"sm"}></Avatar>
      <Input placeholder="Write your comment" mb="8" />
      <Button colorScheme="purple">Post</Button>
    </HStack>
  );
};

export { CommentBox };
