import { useRef, useState } from "react";
import { AxiosError } from "axios";
import { toastKit } from "@/utils";
import { validateTeamName } from "@/utils";
import { useGetUser } from "@/api/hooks";
import { usePostCreateTeam } from "@/api/hooks";
import { useImageUpload } from "@/hooks";
import { resolveTeamImageUrl } from "../_util/resolveTeamImage";

interface UseCreateTeamFlowReturn {
  name: string;
  errorMessage: string;
  preview: string;
  file: File | null;
  isValid: boolean;
  isSubmitting: boolean;
  handleNameChange: (value: string) => void;
  handleImageChange: (file: File) => void;
  handleSubmit: () => Promise<void>;
}

const useTeamCreation = (): UseCreateTeamFlowReturn => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmittingRef = useRef(false);

  const { error } = toastKit();
  const { data: userData } = useGetUser();
  const { mutate: createTeam } = usePostCreateTeam();
  const { preview, file, handleImageChange, uploadImage } = useImageUpload();

  const isValid = name.trim().length >= 1 && name.trim().length <= 30;

  const handleNameChange = (value: string) => {
    setName(value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async () => {
    if (isSubmittingRef.current) return;

    const nameValidation = validateTeamName(name, userData?.memberships);
    if (!nameValidation.isValid) {
      setErrorMessage(nameValidation.error);
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    try {
      const trimmedName = name.trim();
      const imageUrl = await resolveTeamImageUrl(file, trimmedName, uploadImage);

      createTeam(
        { name: trimmedName, image: imageUrl },
        {
          onError: (err) => {
            isSubmittingRef.current = false;
            setIsSubmitting(false);

            if (err instanceof AxiosError && err.response?.status === 409) {
              setErrorMessage("이미 존재하는 팀 이름입니다.");
            } else {
              const message = err instanceof Error ? err.message : "팀 생성에 실패했습니다.";
              error(message);
            }
          },
        },
      );
    } catch {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return {
    name,
    errorMessage,
    preview,
    file,
    isValid,
    isSubmitting,
    handleNameChange,
    handleImageChange,
    handleSubmit,
  };
};

export default useTeamCreation;
