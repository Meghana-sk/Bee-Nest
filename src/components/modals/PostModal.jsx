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

const PostModal = ({
  isOpen,
  onClose,
  isEditPost = false,
  postEditData = {},
}) => {
  const [postDetails, setPostDetails] = useState({
    content: isEditPost ? postEditData.content : "",
  });

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const createPost = (data) => {
    try {
      const response = dispatch(newPost({ postData: data, token }));
      if (response?.payload.status === 201) {
        toast.info("Post added successfully!!");
      } else {
        toast.error(response.payload.data.errors[0]);
      }
      setPostDetails({ content: "" });
      closePostHandler();
    } catch (error) {
      toast.error(error);
    }
  };

  const editPostAction = (updatedData) => {
    try {
      const response = dispatch(
        editPost({ postData: { ...postEditData, content: updatedData }, token })
      );
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
    }
    onClose();
  };

  const addPostHandler = () => {
    if (postDetails.content !== "") {
      createPost(postDetails);
    } else {
      toast.warning("Post content can not be empty");
    }
    closePostHandler();
  };

  const editPostHandler = () => {
    if (postDetails.content !== "") {
      const editData = postDetails.content;
      editPostAction(editData);
    } else {
      toast.warning("Post can't be empty");
    }
    closePostHandler();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        isEditPost
          ? setPostDetails({ content: postEditData.content })
          : setPostDetails({ content: "" });
        onClose();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isEditPost ? "Edit post" : "Create post"}</ModalHeader>
        <ModalCloseButton
          onClose={() => {
            isEditPost
              ? setPostDetails({ content: postEditData.content })
              : setPostDetails({ content: "" });
            onClose();
          }}
        />
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
          <Button
            colorScheme="red"
            mr={3}
            onClick={() => {
              isEditPost
                ? setPostDetails({ content: postEditData.content })
                : setPostDetails({ content: "" });
              onClose();
            }}
          >
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
