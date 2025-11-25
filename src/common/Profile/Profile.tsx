"use client";

import Image from "next/image";
import { cn } from "@/utils";
import { ProfileProps } from "./_type/types";
import { PROFILE_SIZE, PROFILE_IMAGE_SIZE, PROFILE_ICON_SIZE, DEFAULT_ICON_SIZE } from "./PROFILE_SIZE_STYLES";
import IcUser from "@/assets/icon/ic-user.svg?url";
import useImageError from "./_hook/useImageError";

/**
 * @author KimWonSeon
 * @description 프로필 컴포넌트입니다.
 *
 * @param src - 이미지 URL, 없을 시 기본 이미지
 * @param alt - 이미지 대체 텍스트
 * @param size - sm, md, lg 프로필 크기 옵션
 */

const Profile = ({ src, alt = "프로필", size = "lg" }: ProfileProps) => {
  const { hasError, handleError } = useImageError(src);

  const hasImage = src && !hasError;

  return (
    <div
      className={cn(
        "overflow-hidden border border-background-tertiary bg-background-tertiary flex-center flex-shrink-0",
        PROFILE_SIZE[size],
        hasImage ? "bg-transparent" : "bg-background-tertiary",
      )}
    >
      {hasImage ? (
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
        <Image
          src={IcUser}
          alt="기본 프로필"
          width={DEFAULT_ICON_SIZE[size]}
          height={DEFAULT_ICON_SIZE[size]}
          quality={85}
          className={PROFILE_ICON_SIZE[size]}
        />
      )}
    </div>
  );
};

export default Profile;
