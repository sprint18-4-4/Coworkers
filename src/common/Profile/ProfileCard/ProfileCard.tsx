import Profile from "../Profile";

/**
 * @author KimWonSeon
 * @description SideBar 부분의 프로필 부분을 담당하는 컴포넌트 입니다.
 *
 * @param src - 이미지 URL, 없을 시 기본 이미지
 * @param name - 사용자가 등록한 이름
 * @param groupName - 사용자가 속한 그룹 이름
 * @param alt - 이미지 대체 텍스트
 * @param onClick - 프로필 컴포넌트 전체 클릭 시 실행되는 함수
 */

export interface ProfileCardProps {
  src: string | null;
  name: string;
  groupName: string;
  alt?: string;
  onClick: () => void;
}

const ProfileCard = ({ src, name, groupName, alt = "사용자 프로필", onClick }: ProfileCardProps) => {
  return (
    <button onClick={onClick} className="flex items-center gap-3" type="button">
      <Profile src={src} alt={alt} size="lg" />
      <div className="flexColCenter text-left gap-[2px]">
        <p className="text-lg-medium text-text-primary">{name}</p>
        <p className="text-md-medium text-slate-400">{groupName}</p>
      </div>
    </button>
  );
};

export default ProfileCard;
