"use client";

import Image from "next/image";
import { cn } from "@/utils";
import Icon from "@/common/Icon/Icon";
import { ProfileProps } from "./_type/types";
import { PROFILE_SIZE, PROFILE_IMAGE_SIZE, PROFILE_ICON_SIZE } from "./PROFILE_SIZE_STYLES";
import useProfileImage from "./_hook/useProfileImage";

/**
 * @author KimWonSeon
 * @description 프로필 컴포넌트입니다.
 *
 * @param src - 이미지 URL, 없을 시 기본 이미지
 * @param alt - 이미지 대체 텍스트
 * @param size - sm, md, lg 프로필 크기 옵션
 */

const Profile = ({ src, alt = "프로필", size = "lg" }: ProfileProps) => {
  const { hasError, handleError } = useProfileImage(src);
  return (
    <div className={cn("overflow-hidden bg-background-tertiary flex-center flex-shrink-0", PROFILE_SIZE[size])}>
      {src && !hasError ? (
        <Image
          src={src}
          alt={alt}
          width={PROFILE_IMAGE_SIZE[size]}
          height={PROFILE_IMAGE_SIZE[size]}
          quality={85}
          className="w-full h-full object-cover"
          onError={handleError}
        />
      ) : (
        <Icon name="user" className={PROFILE_ICON_SIZE[size]} />
      )}
    </div>
  );
};

export default Profile;
