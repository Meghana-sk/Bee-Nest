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
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { editComment } from "../../redux/asyncThunk";

const EditCommentModal = ({ onOpen, onClose, comment, postId }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [commentDetails, setCommentDetails] = useState(
    comment.commentData || ""
  );

  const editCommentHandler = async () => {
    if (commentDetails === "") {
      toast.error("Comment cannot be empty");
    } else {
      const response = await dispatch(
        editComment({
          postId,
          commentId: comment._id,
          commentData: commentDetails,
          token,
        })
      );
      if (response?.payload.status === 201) {
        toast.success("Comment has been edited");
      } else {
        toast.error(`${response.payload.data.errors[0]}`);
      }
      closeHandler();
    }
  };

  const closeHandler = () => {
    onClose();
  };

  return (
    <Modal isOpen={onOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Comment</ModalHeader>
        <ModalCloseButton onClick={() => onClose()} />
        <ModalBody>
          <VStack alignItems={"flex-start"}>
            <HStack gap="2.7rem" w="full">
              <Textarea
                borderRadius={"md"}
                name="comment"
                value={commentDetails}
                onChange={(e) => setCommentDetails(e.target.value)}
              ></Textarea>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter gap={2}>
          <Button colorScheme={"red"} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme={"purple"} onClick={editCommentHandler}>
            Update Comment
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { EditCommentModal };
