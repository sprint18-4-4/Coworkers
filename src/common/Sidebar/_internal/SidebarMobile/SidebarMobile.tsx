import { cn } from "@/utils";
import LeftMobile from "../LeftMobile/LeftMobile";
import Image from "next/image";
import { SidebarProps } from "../../_types";

const SidebarMobile = ({ isOpen, setIsOpen, user }: SidebarProps) => {
  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-20 flex items-center justify-between bg-white px-4 py-3",
          "tablet:hidden pc:hidden",
        )}
      >
        <div className="flex items-center gap-3">
          <button className="size-6 bg-gray-300" onClick={() => setIsOpen(!isOpen)} aria-label="사이드바 열기" />
          <h2 className="text-brand-primary font-bold text-5 pr-[22px] truncate">COWORKERS</h2>
        </div>
        <Image
          src={user.image}
          alt={`${user.nickname} 이미지`}
          width={28}
          height={28}
          className="size-7 rounded-full"
        />
      </nav>

      <LeftMobile isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
    </>
  );
};

export default SidebarMobile;
