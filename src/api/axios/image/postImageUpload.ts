import { AxiosError } from "axios";
import { instance } from "@/lib";

const postImageUpload = async (file: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await instance.post("/images/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.url;
  } catch (err) {
    if (err instanceof AxiosError) {
      const status = err.response?.status;

      if (status === 413) {
        throw new Error("파일 크기가 너무 큽니다. (최대 10MB)");
      }
      if (status === 400) {
        throw new Error("지원하지 않는 파일 형식입니다.");
      }

      throw new Error(err.response?.data?.message || "이미지 업로드에 실패했습니다.");
    }
    throw err;
  }
};

export default postImageUpload;
