import { Icon } from "@/types";
import Profile from "../Profile";

/**
 * @author KimWonSeon
 * @description 멤버 목록 컴포넌트에 쓰이는 프로필 컴포넌트입니다.
 *
 * @param src - 이미지 URL, 없을 시 기본 이미지
 * @param name - 사용자가 등록한 이름
 * @param email - 사용자가 등록한 이메일
 * @param alt - 이미지 대체 텍스트
 * @param onMenuClick - 케밥 버튼 클릭시 실행되는 함수
 */

export interface ProfileMemberProps {
  src: string | null;
  name: string;
  email: string;
  alt?: string;
  onMenuClick: () => void;
}

const ProfileMember = ({ src, name, email, alt = "사용자 프로필", onMenuClick }: ProfileMemberProps) => {
  return (
    <div className="w-full flex items-center gap-3">
      <Profile src={src} alt={alt} size="md" />
      <div className="flexColCenter flex-grow">
        <p className="text-sm-semibold text-text-primary">{name}</p>
        <p className="text-xs-regular text-text-secondary">{email}</p>
      </div>
      <button className="w-4" type="button" onClick={onMenuClick} aria-label="메뉴 열기">
        <Icon name="kebabSm" size="sm" />
      </button>
    </div>
  );
};

export default ProfileMember;
