import { Flex, Avatar, Box, Text, Tooltip, IconButton } from "@chakra-ui/react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const FollowerSuggestionsProfile = ({ user: username }) => {
  const navigate = useNavigate();

  return (
    <Flex
      alignItems={"flex-start"}
      flexGrow="1"
      gap={2}
      cursor="pointer"
      onClick={() => navigate(`/profile/${username}`)}
    >
      <Avatar
        size="sm"
        src="https://res.cloudinary.com/meghanaskcloud/image/upload/v1654017744/Social%20media/aiony-haust-3TLl_97HNJo-unsplash_g1ezar.jpg"
      />
      <Box>
        <Text fontWeight={"600"}>Vicky Kaushal</Text>
        <Text fontSize={"sm"} color="gray.150">
          @vickykaushal
        </Text>
      </Box>
      <Tooltip label="Follow" fontSize="sm">
        <IconButton
          borderRadius="full"
          size={"sm"}
          marginLeft="auto"
          icon={<AiOutlineUserAdd />}
        />
      </Tooltip>
    </Flex>
  );
};

export { FollowerSuggestionsProfile };
