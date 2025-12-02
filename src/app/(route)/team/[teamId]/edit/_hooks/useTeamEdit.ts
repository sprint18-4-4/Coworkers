"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetGroups, usePatchGroup } from "@/api/hooks";
import useImageUpload from "@/hooks/useImageUpload";

const useTeamEdit = (teamId: number) => {
  const router = useRouter();
  const { data: group } = useGetGroups({ id: teamId });
  const { mutateAsync: patchGroup } = usePatchGroup();

  const [name, setName] = useState(group?.name ?? "");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const originImage = group?.image ?? null;

  const { preview, file, handleImageChange, uploadImage, clear } = useImageUpload(originImage ?? undefined);

  const [isImageRemoved, setIsImageRemoved] = useState(false);

  const handleNameChange = (value: string) => {
    setName(value);

    if (value.trim().length < 2) {
      setErrorMessage("팀 이름은 2자 이상 입력해주세요.");
      return;
    }

    setErrorMessage("");
  };

  const isValid = name.trim().length >= 2 && !errorMessage;

  const handleRemoveImage = () => {
    clear();
    setIsImageRemoved(true);
  };

  const handleSubmit = async () => {
    if (!isValid) return;

    try {
      setIsSubmitting(true);

      let imageUrl: string | null = null;
      if (file) {
        imageUrl = await uploadImage();
      }

      const body = {
        name,
        ...(imageUrl && { image: imageUrl }),
        ...(isImageRemoved && !imageUrl && { image: null }),
      };

      await patchGroup({
        param: { id: teamId },
        body,
      });

      router.push(`/team/${teamId}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    name,
    errorMessage,
    preview,
    isValid,
    isSubmitting,
    handleNameChange,
    handleImageChange,
    handleRemoveImage,
    handleSubmit,
  };
};

export default useTeamEdit;
