import { toast } from "react-toastify";

const saveAvatarToCloudindary = async (
  image,
  saveData,
  inputData,
  type,
  from = "profile"
) => {
  try {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "profilepics");

    const requestOptions = {
      method: "POST",
      body: data,
    };

    await fetch(
      `https://res.cloudinary.com/meghanaskcloud/${type}/upload`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let updatedData;
        if (from === "post") {
          updatedData = { ...inputData, img: data.url };
        } else {
          updatedData = { ...inputData, avatarUrl: data.secure_url };
        }
        saveData(updatedData);
      })
      .catch((error) => {
        toast.error(error);
      });
  } catch (error) {
    toast.error(error);
  }
};

export { saveAvatarToCloudindary };
