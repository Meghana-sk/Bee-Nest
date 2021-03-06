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
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCamera } from "react-icons/ai";
import { toast } from "react-toastify";
import { editUser } from "../../redux/asyncThunk";
import { updateUser } from "../../redux/slices";

const EditProfileModal = ({ isOpen, onClose, userProfile, setProfile }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const reader = new FileReader();

  const [userData, setUserData] = useState({
    ...userProfile,
    profileFile: "",
  });

  const inputChangeHandler = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateProfileImageHandler = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserData({
          ...userData,
          profilePic: reader.result,
          profileFile: e.target.files[0],
        });
      } else {
        reader.abort();
        setUserData({
          ...userData,
          profilePic: "",
          profileFile: "",
        });
      }
    };
  };

  const updateModifiedData = async () => {
    try {
      const response = await dispatch(editUser({ userData, token }));
      if (response.payload.status === 201) {
        setUserData(() => response?.payload.data.user);
        setProfile(response?.payload.data.user);
        dispatch(updateUser(response?.payload.data.user));
        toast.info("Profile updated successfully!!");
      } else {
        toast.error(`${response?.payload?.data?.errors[0]}`);
      }
    } catch (error) {
      toast.error(error);
    }
    onClose();
  };

  const closeClickHandler = () => {
    setUserData(() => userProfile);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeClickHandler}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems={"flex-start"}>
            <HStack gap="5">
              <Text>Avatar</Text>
              <Box position="relative">
                <Avatar
                  name={userProfile.firstName + " " + userProfile.lastName}
                  src={userData?.profilePic || userProfile.profilePic}
                  size="lg"
                ></Avatar>
                <Box
                  position="absolute"
                  p="1"
                  borderRadius={"full"}
                  top="50%"
                  right="10%"
                  bg="blackAlpha.500"
                >
                  <Box cursor="pointer">
                    <Input
                      type="file"
                      accept="image/*"
                      position="absolute"
                      opacity="0"
                      bgColor="red.100"
                      p="0"
                      cursor={"pointer"}
                      onChange={updateProfileImageHandler}
                    />
                    <AiFillCamera fontSize="20px" color="white" />
                  </Box>
                </Box>
              </Box>
            </HStack>
            <HStack gap={2} w="full">
              <Text>Website</Text>
              <Input
                type="text"
                placeholder="https://guest.com"
                borderRadius="md"
                name="website"
                value={userData?.website}
                onChange={inputChangeHandler}
              ></Input>
            </HStack>
            <HStack gap="2.7rem" w="full">
              <Text>Bio</Text>
              <Textarea
                borderRadius={"md"}
                placeholder="Passionate builder"
                name="bio"
                value={userData?.bio}
                onChange={inputChangeHandler}
              ></Textarea>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter gap={2}>
          <Button colorScheme={"red"} onClick={closeClickHandler}>
            Close
          </Button>
          <Button onClick={updateModifiedData} colorScheme={"purple"}>
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { EditProfileModal };
