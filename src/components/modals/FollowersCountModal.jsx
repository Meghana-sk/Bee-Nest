import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  UnorderedList,
  ListItem,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

const FollowersCountModal = ({
  isOpenFollower,
  onCloseFollower,
  followModal,
  userProfile,
}) => {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpenFollower} onClose={onCloseFollower}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{followModal}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <UnorderedList listStyleType="none" w="100%">
            {userProfile?.length > 0 &&
              userProfile.map((item) => (
                <ListItem
                  key={item._id}
                  mb="4"
                  pr="4"
                  cursor="pointer"
                  onClick={() => {
                    onCloseFollower();
                    navigate(`/profile/${item.username}`);
                  }}
                >
                  <Flex alignItems="center" gap="2">
                    <Avatar
                      name={item.firstName + " " + item.lastName}
                      src={item?.profilePic}
                    />
                    <Box>
                      <Heading as="h4" size="sm">
                        {item.firstName} {item.lastName}
                      </Heading>
                      <Text>@{item.username}</Text>
                    </Box>
                  </Flex>
                </ListItem>
              ))}
          </UnorderedList>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { FollowersCountModal };
