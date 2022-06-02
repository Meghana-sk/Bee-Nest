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
import { MdOutlineModeComment } from "react-icons/md";
import { CommentBox } from "../components";

const PostCard = () => {
  return (
    <Box backgroundColor={"gray.50"} width={"50%"} p={4} minWidth={"300px"}>
      <Flex flexDirection={"column"} justifyContent={"center"} gap={4}>
        <HStack>
          <Avatar
            size="sm"
            src="https://res.cloudinary.com/meghanaskcloud/image/upload/v1654017743/Social%20media/ben-sweet-2LowviVHZ-E-unsplash_alm3ek.jpg"
          ></Avatar>
          <Text fontWeight={"bold"}>Meghana</Text>
          <Text>@meghanask</Text>
        </HStack>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          voluptatum error minima, sit ad cumque quidem, molestias esse quae et
          dolorem sapiente sunt enim, exercitationem incidunt. Repellat ad aut
          fugit recusandae sint porro quas aperiam tenetur eos impedit animi,
          laboriosam odit itaque debitis voluptate ipsum pariatur repellendus
          similique sequi. Reiciendis.
        </Text>
        <HStack justifyContent={"space-between"}>
          <Tooltip label="Like" fontSize="sm">
            <IconButton icon={<AiOutlineHeart />}></IconButton>
          </Tooltip>
          <Tooltip label="Comment" fontSize="sm">
            <IconButton icon={<MdOutlineModeComment />}></IconButton>
          </Tooltip>
          <Tooltip label="Bookmark" fontSize="sm">
            <IconButton icon={<BsBookmark />}></IconButton>
          </Tooltip>
        </HStack>
        <CommentBox />
      </Flex>
    </Box>
  );
};

export { PostCard };
