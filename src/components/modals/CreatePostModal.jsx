import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
} from "@chakra-ui/react";

const CreatePostModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            placeholder={"Write what you are thinking.."}
            resize={"none"}
          ></Textarea>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme={"blue"}>Post</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { CreatePostModal };
