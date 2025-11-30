import { useState, useEffect } from "react";
import { UserData } from "../_types/type";
import { usePatchUserProfile } from "@/api/hooks";
import { useImageUpload } from "@/hooks";
import { validateName } from "@/utils";
import { PatchUserProfileRequest } from "@/api/axios/user/_types/type";

export interface UseMyProfileSettingsReturn {
  formData: {
    nickname: string;
  };
  imagePreview: string;
  hasChanges: boolean;
  isSaving: boolean;
  errors: {
    nickname: string;
  };
  handlers: {
    onNicknameChange: (value: string) => void;
    onImageChange: (file: File) => void;
    onSave: () => void;
  };
}

const useMyProfileSettings = (initialData: UserData): UseMyProfileSettingsReturn => {
  const [formData, setFormData] = useState({
    nickname: initialData.nickname,
  });

  const [nicknameError, setNicknameError] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    preview,
    file,
    handleImageChange,
    uploadImage,
    isUploading,
    reset: resetImage,
  } = useImageUpload(initialData.image || undefined);

  const { mutateAsync: updateProfileAsync, isPending } = usePatchUserProfile({
    onSuccess: () => {
      resetImage();
      setNicknameError("");
    },
  });

  const isSaving = isProcessing || isUploading || isPending;

  const nicknameChanged = formData.nickname.trim() !== initialData.nickname;
  const imageChanged = file !== null;

  const hasChanges = nicknameChanged || imageChanged;

  useEffect(() => {
    if (!hasChanges && isProcessing) {
      setIsProcessing(false);
    }
  }, [hasChanges, isProcessing]);

  useEffect(() => {
    setFormData({ nickname: initialData.nickname });
  }, [initialData.nickname]);

  const handleNicknameChange = (value: string) => {
    setFormData((prev) => ({ ...prev, nickname: value }));
    setNicknameError("");
  };

  const validateForm = (): boolean => {
    const nicknameValidation = validateName(formData.nickname);

    if (!nicknameValidation.isValid) {
      setNicknameError(nicknameValidation.ErrorMessage || "");
      return false;
    }

    return true;
  };

  const handleSaveChanges = async (): Promise<void> => {
    if (isSaving) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    try {
      const uploadedImageUrl = file ? await uploadImage() : undefined;

      if (file && !uploadedImageUrl) {
        setIsProcessing(false);
        throw new Error("이미지 업로드에 실패했습니다. 다시 시도해주세요.");
      }

      const requestBody: Partial<PatchUserProfileRequest> = {};

      if (formData.nickname.trim() !== initialData.nickname) {
        requestBody.nickname = formData.nickname.trim();
      }

      if (uploadedImageUrl) {
        requestBody.image = uploadedImageUrl;
      }

      if (Object.keys(requestBody).length === 0) {
        setIsProcessing(false);
        return;
      }

      await updateProfileAsync(requestBody as PatchUserProfileRequest);
    } catch {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasChanges) {
        e.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasChanges]);

  return {
    formData,
    imagePreview: preview,
    hasChanges,
    isSaving,
    errors: {
      nickname: nicknameError,
    },
    handlers: {
      onNicknameChange: handleNicknameChange,
      onImageChange: handleImageChange,
      onSave: handleSaveChanges,
    },
  };
};

export default useMyProfileSettings;
