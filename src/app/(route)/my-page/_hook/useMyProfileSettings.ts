import { useState, useEffect, useMemo } from "react";
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
    onSave: () => Promise<void>;
  };
}

const useMyProfileSettings = (initialData: UserData): UseMyProfileSettingsReturn => {
  const [formData, setFormData] = useState({
    nickname: initialData.nickname,
  });

  const [nicknameError, setNicknameError] = useState<string>("");

  const {
    preview,
    file,
    handleImageChange,
    uploadImage,
    isUploading,
    reset: resetImage,
  } = useImageUpload(initialData.image || undefined);

  const { mutate: updateProfile, isPending: isUpdating } = usePatchUserProfile({
    onSuccess: () => {
      resetImage();
      setNicknameError("");
    },
  });

  const isSaving = isUploading || isUpdating;

  const hasChanges = useMemo(() => {
    const nicknameChanged = formData.nickname.trim() !== initialData.nickname;
    const imageChanged = file !== null;
    return nicknameChanged || imageChanged;
  }, [formData.nickname, initialData.nickname, file]);

  const handleNicknameChange = (value: string) => {
    setFormData((prev) => ({ ...prev, nickname: value }));

    if (nicknameError) {
      setNicknameError("");
    }
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
    if (isSaving) return;

    if (!validateForm()) {
      return;
    }

    const uploadedImageUrl = file ? await uploadImage() : undefined;

    if (file && !uploadedImageUrl) {
      return;
    }

    const requestBody: Partial<PatchUserProfileRequest> = {};

    if (formData.nickname.trim() !== initialData.nickname) {
      requestBody.nickname = formData.nickname.trim();
    }

    if (uploadedImageUrl) {
      requestBody.image = uploadedImageUrl;
    }

    if (Object.keys(requestBody).length === 0) {
      return;
    }

    updateProfile(requestBody as PatchUserProfileRequest);
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
