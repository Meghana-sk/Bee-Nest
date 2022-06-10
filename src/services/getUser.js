import axios from "axios";
import { toast } from "react-toastify";

const getUser = async (setUserProfile, username) => {
  try {
    const response = await axios.get(`/api/users/${username}`);
    setUserProfile(response.data.user);
  } catch (error) {
    toast.error(error);
  }
};

export { getUser };
