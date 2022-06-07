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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { newPost } from "../../redux/asyncThunk";

const CreatePostModal = ({
  isOpen,
  onClose,
  isEditPost = false,
  postData = {},
}) => {
  const [postDetails, setPostDetails] = useState({
    content: isEditPost ? postData.content : "",
  });

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const fileReader = new FileReader();

  const createPost = async (data) => {
    try {
      const response = await dispatch(newPost({ postData: data, token }));
      if (response?.payload.status === 201) {
        toast.info("Post added successfully!!");
      } else {
        toast.error(response.payload.data.errors[0]);
      }
      closePostHandler();
    } catch (error) {
      toast.error(error);
    }
  };

  const closePostHandler = () => {
    if (!isEditPost) {
      setPostDetails({ content: "" });
      postData = {};
    }
    onClose(false);
  };

  const addPostHandler = async () => {
    if (postDetails.content !== "") {
      createPost(postDetails);
    } else {
      toast.warning("Post content can not be empty");
    }
  };

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
            maxLength={250}
            value={postDetails.content}
            onChange={(e) => {
              setPostDetails((prev) => ({ ...prev, content: e.target.value }));
            }}
          ></Textarea>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme={"blue"} onClick={addPostHandler}>
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { CreatePostModal };
