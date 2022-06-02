import { HStack, Avatar, Input, Button } from "@chakra-ui/react";

const CommentBox = () => {
  return (
    <HStack>
      <Avatar
        src="https://res.cloudinary.com/meghanaskcloud/image/upload/v1654017744/Social%20media/aiony-haust-3TLl_97HNJo-unsplash_g1ezar.jpg"
        size={"sm"}
      ></Avatar>
      <Input placeholder="Write your comment" mb="8" />
      <Button colorScheme="purple">Post</Button>
    </HStack>
  );
};

export { CommentBox };
