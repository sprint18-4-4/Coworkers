import { ChangeEvent } from "react";
import Image from "next/image";
import { cn } from "@/utils";
import Icon from "@/common/Icon/Icon";
import { ProfileEditProps } from "../_type/types";
import { SIZE_CLASSES, IMAGE_SIZE_VALUES, EDIT_ICON_SIZE, EDIT_BUTTON_SIZE } from "../PROFILE_SIZE_STYLES";

/**
 * @author KimWonSeon
 * @description 프로필 이미지 편집 컴포넌트입니다.
 *
 * @param src - 표시할 이미지 URL
 * @param alt - 이미지 대체 텍스트
 * @param size - md, lg 프로필 크기 옵션
 * @param onChange - 유효한 파일이 선택되었을 때 호출되는 콜백 함수
 */

const ProfileEdit = ({ src, alt = "프로필", size = "lg", onChange }: ProfileEditProps) => {
  const validateImageFile = (file: File): boolean => {
    if (!file.type.startsWith("image/")) {
      return false;
    }

    if (file.size > 5 * 1024 * 1024) {
      return false;
    }

    return true;
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!validateImageFile(file)) {
      e.target.value = "";
      return;
    }

    onChange(file);
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
            quality={85}
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
