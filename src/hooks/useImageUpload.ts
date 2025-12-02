import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { postImageUpload } from "@/api/axios";
import { toastKit } from "@/utils";

interface UsePostImageUploadReturn {
  preview: string;
  file: File | null;
  handleImageChange: (file: File) => void;
  uploadImage: () => Promise<string | null>;
  isUploading: boolean;
  reset: () => void;
  clear: () => void;
}

const useImageUpload = (initialImage?: string): UsePostImageUploadReturn => {
  const [preview, setPreview] = useState<string>(initialImage || "");
  const [file, setFile] = useState<File | null>(null);
  const { error } = toastKit();

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

  const clear = () => {
    if (preview && !preview.startsWith("http")) {
      URL.revokeObjectURL(preview);
    }
    setFile(null);
    setPreview("");
  };

  useEffect(() => {
    return () => {
      if (preview && !preview.startsWith("http")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const uploadMutation = useMutation({
    mutationFn: async () => {
      if (!file) {
        throw new Error("업로드할 파일이 없습니다.");
      }
      return postImageUpload(file);
    },
    onError: (err: Error) => {
      error(err.message || "이미지 업로드에 실패했습니다.");
    },
  });

  const uploadImage = async (): Promise<string | null> => {
    try {
      return await uploadMutation.mutateAsync();
    } catch {
      return null;
    }
  };

  return {
    preview,
    file,
    handleImageChange,
    uploadImage,
    isUploading: uploadMutation.isPending,
    reset,
    clear,
  };
};

export default useImageUpload;
