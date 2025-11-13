import { ChangeEvent } from "react";
import Image from "next/image";
import Icon from "@/common/Icon/Icon";
import { cn } from "@/utils";
import { SIZE_CLASSES, IMAGE_SIZE_VALUES, EDIT_ICON_SIZE, EDIT_BUTTON_SIZE } from "../PROFILE_SIZE_STYLES";

/**
 *
 */

export interface ProfileImageProps {
  src: string | null;
  alt?: string;
  size?: "md" | "lg";
  onError?: (error: string) => void;
  onImageSelect: (file: File) => void;
}

const ProfileEdit = ({ src, alt = "프로필", size = "lg", onError, onImageSelect }: ProfileImageProps) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      onError?.("이미지 파일만 업로드 가능합니다");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      onError?.("파일 크기는 5MB 이하여야 합니다");
      return;
    }

    onImageSelect(file);

    e.target.value = "";
  };

  return (
    <label className="relative inline-block cursor-pointer">
      <div
        className={cn(
          " border-[2px] border-background-tertiary bg-background-tertiary  overflow-hidden flex-center",
          SIZE_CLASSES[size],
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={IMAGE_SIZE_VALUES[size]}
            height={IMAGE_SIZE_VALUES[size]}
            className="w-full h-full object-cover"
          />
        ) : (
          <Icon name="humanLg" size="lg" className="size-10" />
        )}
      </div>
      <div
        className={cn("absolute bottom-0 -right-[5px] bg-background-tertiary rounded-full p-1", EDIT_BUTTON_SIZE[size])}
      >
        {/* TODO(김원선): 아이콘이 css 적용이 안되어, css 적용이 구현 됬을 때 변경 */}
        <Icon name="plusLg" className={cn(EDIT_ICON_SIZE[size])} />
      </div>
      <input
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        className="hidden"
        onChange={handleImageChange}
        aria-label="프로필 이미지 업로드"
      />
    </label>
  );
};

export default ProfileEdit;
