import { cn } from "@/utils";
import LeftMobile from "../LeftMobile/LeftMobile";

interface SidebarMobileProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SidebarMobile = ({ isOpen, setIsOpen }: SidebarMobileProps) => {
  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-20 flex items-center justify-between bg-white px-4 py-3",
          "tablet:hidden pc:hidden",
        )}
      >
        <div className="flex items-center gap-3">
          <button className="w-6 h-6 bg-gray-300" onClick={() => setIsOpen(!isOpen)} aria-label="사이드바 열기" />
          <h2 className="text-[#5189FA] font-bold text-[20px] pr-[22px] truncate">COWORKERS</h2>
        </div>
        <div className="w-7 h-7 bg-gray-300" />
      </nav>

      <LeftMobile isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default SidebarMobile;
