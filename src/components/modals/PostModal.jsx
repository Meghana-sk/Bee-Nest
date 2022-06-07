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
import { newPost, editPost } from "../../redux/asyncThunk";

const PostModal = ({ isOpen, onClose, isEditPost = false, postData = {} }) => {
  const [postDetails, setPostDetails] = useState({
    content: isEditPost ? postData.content : "",
  });

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const fileReader = new FileReader();

  const createPost = (data) => {
    try {
      const response = dispatch(newPost({ postData: data, token }));
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

  const editPostAction = (updatedData) => {
    try {
      console.log("action edit", postData);
      const response = dispatch(editPost({ postData: updatedData, token }));
      if (response?.payload.status === 201) {
        toast.info("Post updated successfully!!");
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
  };

  const addPostHandler = () => {
    if (postDetails.content !== "") {
      createPost(postDetails);
    } else {
      toast.warning("Post content can not be empty");
    }
    onClose();
  };

  const editPostHandler = () => {
    if (postDetails.content !== "") {
      const editData = { ...postData, content: postDetails.content };
      editPostAction(editData);
    } else {
      toast.warning("Post can't be empty");
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isEditPost ? "Edit post" : "Create post"}</ModalHeader>
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
          <Button
            colorScheme={"blue"}
            onClick={isEditPost ? editPostHandler : addPostHandler}
          >
            {isEditPost ? "Update" : "Post"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { PostModal };