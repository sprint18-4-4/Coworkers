import Link from "next/link";
import { cn } from "@/utils";
import Image from "next/image";
import { Dropdown, Icon } from "@/common";
import { SidebarDropdownProps } from "../../_types";
import LeftMobile from "../LeftMobile/LeftMobile";

const SidebarMobile = ({ user, isOpen, handleOpenDropdown, options }: SidebarDropdownProps) => {
  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-20 flex items-center justify-between bg-white px-4 py-3",
          "tablet:hidden pc:hidden",
        )}
      >
        <div className={cn("flex items-center", user && "gap-3")}>
          {user && (
            <button onClick={() => handleOpenDropdown(isOpen)}>
              <Icon name="menu" className="size-6 tablet:size-6" />
            </button>
          )}

          <Link href="/" className="text-brand-primary font-bold text-5 pr-[22px] flex items-center gap-[2px]">
            <Icon name="logo" className="size-6 tablet:size-6" />
            {!user && <span>COWORKERS</span>}
          </Link>
        </div>
        {user && (
          <Dropdown
            options={options}
            placement="bottom-right"
            image={
              <Image
                src={user.image}
                alt={`${user.nickname} 이미지`}
                width={28}
                height={28}
                className="size-7 rounded-full"
              />
            }
          />
        )}
      </nav>

      <LeftMobile isOpen={isOpen} handleOpenDropdown={handleOpenDropdown} user={user} />
    </>
  );
};

export default SidebarMobile;
