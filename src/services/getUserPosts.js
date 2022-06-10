import axios from "axios";
import { toast } from "react-toastify";

const getUserPosts = async (setUserPosts, username) => {
  try {
    const response = await axios.get(`/api/posts/user/${username}`);
    setUserPosts(response.data.posts);
  } catch (error) {
    toast.error(error);
  }
};

export { getUserPosts };
