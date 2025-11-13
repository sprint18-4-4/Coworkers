import Image from "next/image";
import { cn } from "@/utils";
import Icon from "@/common/Icon/Icon";
import { PROFILE_SIZE, PROFILE_IMAGE_SIZE } from "./PROFILE_SIZE_STYLES";

/**
 * @author KimWonSeon
 * @description 프로필 컴포넌트입니다.
 *
 * @param src - 이미지 URL, 없을 시 기본 이미지
 * @param alt - 이미지 대체 텍스트
 * @param size - sm, md, lg 프로필 크기 옵션
 */

export interface ProfileProps {
  src: string | null;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

const Profile = ({ src, alt = "프로필", size = "lg" }: ProfileProps) => {
  return (
    <div className={cn("overflow-hidden bg-background-tertiary flex-center flex-shrink-0", PROFILE_SIZE[size])}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={PROFILE_IMAGE_SIZE[size]}
          height={PROFILE_IMAGE_SIZE[size]}
          className={cn("w-full h-full object-cover")}
        />
      ) : (
        // TODO(김원선): Icon 사이즈 조정 가능시 수정
        <Icon name="humanLg" size="md" className={cn("flex-center")} />
      )}
    </div>
  );
};

export default Profile;
