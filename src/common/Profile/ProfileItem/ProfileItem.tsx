import Profile from "../Profile";
import { ProfileItemType } from "../_type/types";
import Dropdown from "@/common/Dropdown/Dropdown";

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
 *  dropdownOptions={[
 *  { label: "로그아웃", action: () => Logout()}
 *  />
 *
 * @example
 * // Member 타입 (멤버 목록)
 * <ProfileItem
 *  type="memberItem"
 *  src="/profile.jpg"
 *  name="팀원 사용자 이름"
 *  email="user@example.com"
 *  dropdownOptions={[
 *  { label: "멤버 삭제", action: () => delete() },
 *  ]}
 * />
 */

const ProfileItem = (props: ProfileItemType) => {
  const { src, name, alt = `${name}의 프로필`, type } = props;

  if (type === "myProfile") {
    const triggerContent = (
      <div className="flex items-center gap-3">
        <Profile src={src} alt={alt} size="lg" />
        <div className="flex flex-col text-left gap-[2px]">
          <p className="text-lg-medium text-text-primary">{name}</p>
          <p className="text-md-medium text-slate-400">{props.groupName}</p>
        </div>
      </div>
    );

    return (
      <div className="w-full">
        <Dropdown image={triggerContent} options={props.dropdownOptions || []} />
      </div>
    );
  }

  return (
    <div className="w-full flex items-center gap-3">
      <Profile src={src} alt={alt} size="md" />
      <div className="flex flex-col flex-grow">
        <p className="text-sm-semibold text-text-primary">{name}</p>
        <p className="text-xs-regular text-text-secondary">{props.email}</p>
      </div>
      <Dropdown
        iconName="kebab"
        iconClassName="size-4 tablet:size-4"
        options={props.dropdownOptions || []}
        placement="bottom-right"
        aria-label="메뉴 열기"
      />
    </div>
  );
};

export default ProfileItem;
