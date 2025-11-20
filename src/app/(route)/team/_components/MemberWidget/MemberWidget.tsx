import { Icon, ProfileItem } from "@/common";

// GET: /teamId/groups/id

// TODO(상인): 사이드바 open시 없애기 -> 사이드바의 상태는 전역상태가 좋아보임
const MemberWidget = () => {
  return (
    <aside className="absolute right-0 top-[350px] flex flex-col gap-6 w-[240px] border border-border-primary rounded-xl bg-background-primary px-5 py-[24px]">
      <header className="flex justify-between items-center">
        <span className="flex gap-2">
          <span className="text-lg-medium text-text-primary">멤버</span>
          <span className="text-lg-regular text-text-default">(4명)</span>
        </span>

        {/* TODO(상인): 모달 머지될 시 띄우기 */}
        <button onClick={() => {}} className="flex items-center gap-1 text-lg-semibold text-brand-primary">
          <span>초대하기</span>
          <Icon name="plus" className="size-4 tablet:size-4" />
        </button>
      </header>

      <ul className="flex flex-col gap-[18px]">
        <li>
          <ProfileItem type="memberItem" src="/profile.jpg" name="우지은" email="jieun@codeit.com" onClick={() => {}} />
        </li>
        <li>
          <ProfileItem type="memberItem" src="/profile.jpg" name="우지은" email="jieun@codeit.com" onClick={() => {}} />
        </li>
        <li>
          <ProfileItem type="memberItem" src="/profile.jpg" name="우지은" email="jieun@codeit.com" onClick={() => {}} />
        </li>
        <li>
          <ProfileItem type="memberItem" src="/profile.jpg" name="우지은" email="jieun@codeit.com" onClick={() => {}} />
        </li>
      </ul>
    </aside>
  );
};

export default MemberWidget;
