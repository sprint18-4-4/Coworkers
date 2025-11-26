import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postImageUpload } from "@/api/axios";

interface UsePostImageUploadReturn {
  preview: string;
  file: File | null;
  handleImageChange: (file: File) => void;
  uploadImage: () => Promise<string>;
  isUploading: boolean;
  reset: () => void;
}

const useImageUpload = (initialImage?: string): UsePostImageUploadReturn => {
  const [preview, setPreview] = useState<string>(initialImage || "");
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (selectedFile: File) => {
    if (preview && !preview.startsWith("http")) {
      URL.revokeObjectURL(preview);
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const reset = () => {
    if (preview && !preview.startsWith("http")) {
      URL.revokeObjectURL(preview);
    }
    setFile(null);
    setPreview(initialImage || "");
  };

  const uploadMutation = useMutation({
    mutationFn: async () => {
      if (!file) {
        throw new Error("업로드할 파일이 없습니다.");
      }
      return postImageUpload(file);
    },
  });

  return {
    preview,
    file,
    handleImageChange,
    uploadImage: uploadMutation.mutateAsync,
    isUploading: uploadMutation.isPending,
    reset,
  };
};

export default useImageUpload;
