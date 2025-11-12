import { cn } from "@/utils";
import Image from "next/image";
import { SidebarProps } from "../../_types";
import LeftMobile from "../LeftMobile/LeftMobile";

const SidebarMobile = ({ user, isOpen, handleOpenDropdown }: SidebarProps) => {
  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-20 flex items-center justify-between bg-white px-4 py-3",
          "tablet:hidden pc:hidden",
        )}
      >
        <div className={cn("flex items-center", user ? "gap-3" : "gap-[2px]")}>
          {user ? (
            <button
              className="size-6 bg-gray-300"
              onClick={() => handleOpenDropdown(isOpen)}
              aria-label="사이드바 열기"
            />
          ) : (
            <div className="size-4 rounded-full bg-brand-primary" />
          )}
          <h2 className="text-brand-primary font-bold text-5 pr-[22px]">COWORKERS</h2>
        </div>
        {user && (
          <Image
            src={user.image}
            alt={`${user.nickname} 이미지`}
            width={28}
            height={28}
            className="size-7 rounded-full"
          />
        )}
      </nav>

      <LeftMobile isOpen={isOpen} handleOpenDropdown={handleOpenDropdown} />
    </>
  );
};

export default SidebarMobile;
