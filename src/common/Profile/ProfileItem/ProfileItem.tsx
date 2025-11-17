import Icon from "@/common/Icon/Icon";
import Profile from "../Profile";
import { ProfileItemType } from "../_type/types";

/**
 * @author KimWonSeon
 * @description 프로필 표시 통합 컴포넌트 입니다.
 *
 * @example
 * // MyProfile 타입 (사이드바/ 헤더)
 * <ProfileItem
 *  type="myProfile"
 *  src="/profile.jpg"
 *  name="사용자 이름"
 *  groupName="사용자 그룹"
 *  onClick={() => openProfileModal()}
 *  />
 *
 * @example
 * // Member 타입 (멤버 목록)
 * <ProfileItem
 *  type="memberItem"
 *  src="/profile.jpg"
 *  name="팀원 사용자 이름"
 *  email="user@example.com"
 *  onClick={() => openMemberModal()}
 * />
 */

const ProfileItem = (props: ProfileItemType) => {
  const { src, name, alt = `${name}의 프로필`, type } = props;

  if (type === "myProfile") {
    return (
      <button onClick={props.onClick} className="flex items-center gap-3" type="button">
        <Profile src={src} alt={alt} size="lg" />
        <div className="flex flex-col text-left gap-[2px]">
          <p className="text-lg-medium text-text-primary">{name}</p>
          <p className="text-md-medium text-slate-400">{props.groupName}</p>
        </div>
      </button>
    );
  }
  return (
    <div className="w-full flex items-center gap-3">
      <Profile src={src} alt={alt} size="md" />
      <div className="flex flex-col flex-grow">
        <p className="text-sm-semibold text-text-primary">{name}</p>
        <p className="text-xs-regular text-text-secondary">{props.email}</p>
      </div>
      {/* TODO: 케밥 메뉴 컴포넌트는 PR이 할쳐졌을 때 공용으로 쓸 수 있게 수정 */}
      <button className="w-4" type="button" onClick={props.onClick} aria-label="메뉴 열기">
        <Icon name="kebab" className="size-4 tablet:size-4" />
      </button>
    </div>
  );
};

export default ProfileItem;
