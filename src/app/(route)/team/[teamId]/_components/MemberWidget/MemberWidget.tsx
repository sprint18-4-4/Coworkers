import { FloatingButton, Icon, ProfileItem } from "@/common";
import { useState } from "react";

const MemberWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // TODO(상인): 일단은 맨 오른쪽 하단에 두고, 추후 변경
    <span className="fixed right-3 bottom-3">
      <FloatingButton iconName="user" onClick={() => setIsOpen((prev) => !prev)} />

      {isOpen && (
        <aside
          className={
            "absolute bottom-[65px] right-0 flex flex-col gap-6 w-[240px] border border-border-primary rounded-xl bg-background-primary px-5 py-[24px]"
          }
        >
          <header className="flex justify-between items-center">
            <span className="flex gap-2">
              <span className="text-lg-medium text-text-primary">멤버</span>
              <span className="text-lg-regular text-text-default">(4명)</span>
            </span>

            <button onClick={() => {}} className="flex items-center gap-1 text-lg-semibold text-brand-primary">
              <span>초대하기</span>
              <Icon name="plus" className="size-4 tablet:size-4" />
            </button>
          </header>

          <ul className="flex flex-col gap-[18px]">
            <li>
              <ProfileItem
                type="memberItem"
                src="/profile.jpg"
                name="우지은"
                email="jieun@codeit.com"
                onClick={() => {}}
              />
            </li>
            <li>
              <ProfileItem
                type="memberItem"
                src="/profile.jpg"
                name="우지은"
                email="jieun@codeit.com"
                onClick={() => {}}
              />
            </li>
            <li>
              <ProfileItem
                type="memberItem"
                src="/profile.jpg"
                name="우지은"
                email="jieun@codeit.com"
                onClick={() => {}}
              />
            </li>
            <li>
              <ProfileItem
                type="memberItem"
                src="/profile.jpg"
                name="우지은"
                email="jieun@codeit.com"
                onClick={() => {}}
              />
            </li>
          </ul>
        </aside>
      )}
    </span>
  );
};

export default MemberWidget;
