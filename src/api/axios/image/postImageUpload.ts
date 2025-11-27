import axios from "axios";
import { instance } from "@/lib";
import { ApiErrorResponse } from "@/types";

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
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      const status = err.response?.status;

      if (status === 500) {
        throw new Error("서버 에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }

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
