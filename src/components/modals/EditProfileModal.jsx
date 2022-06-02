import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  HStack,
  VStack,
  Text,
  Textarea,
  Box,
  Avatar,
  Input,
} from "@chakra-ui/react";

const EditProfileModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems={"flex-start"}>
            <HStack alignItems={"center"} gap="5">
              <Text>Avatar</Text>
              <Box position="relative">
                <Avatar
                  name="S K Meghana"
                  src="https://res.cloudinary.com/meghanaskcloud/image/upload/v1654017744/Social%20media/aiony-haust-3TLl_97HNJo-unsplash_g1ezar.jpg"
                  size="lg"
                ></Avatar>
              </Box>
            </HStack>
            <HStack alignItems={"center"} gap={2} w="full">
              <Text>Website</Text>
              <Input
                placeholder="https://sk-meghana.netlify.app"
                borderRadius="md"
              ></Input>
            </HStack>
            <HStack alignItems={"flex-start"} gap="2.7rem" w="full">
              <Text>Bio</Text>
              <Textarea
                borderRadius={"md"}
                placeholder="Passionate builder"
              ></Textarea>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter gap={2}>
          <Button>Update</Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { EditProfileModal };
