import { instance } from "@/lib";

const postImageUpload = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await instance.post("/images/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.url;
};

export default postImageUpload;
