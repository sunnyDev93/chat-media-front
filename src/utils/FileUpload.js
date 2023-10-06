import axios from "axios";

export const uploadFileToServer = async (file) => {
  // Create an object of formData
  const formData = new FormData();

  // Update the formData object
  formData.append("myFile", file);
  try {
    const response = await axios.post(
      "http://localhost:8000/api/files/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("File uploaded:", response);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
