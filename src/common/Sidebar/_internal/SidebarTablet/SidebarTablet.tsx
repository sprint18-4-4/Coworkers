import Image from "next/image";
import { cn } from "@/utils/cn";
import Link from "next/link";
import SidebarDropdown from "../SidebarDropdown/SidebarDropdown";
import AddTeamButton from "../AddTeamButton/AddTeamButton";
import SidebarLink from "../SidebarLink/SidebarLink";
import { SidebarProps } from "../../_types";

const Sidebar = ({ isOpen, setIsOpen, user }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "flex-col sticky top-0 h-[100vh] border-r border-background-tertiary",
        isOpen ? "w-[270px]" : "w-[72px]",
        "hidden tablet:flex pc:flex",
      )}
    >
      <header className="flex items-center gap-[10px] px-6 py-8 relative">
        <Link href="/" className="flex items-center gap-1">
          <div className="w-4 h-4 bg-black" aria-hidden />
          {isOpen && <h1 className="text-brand-primary font-bold text-[20px] leading-none pr-[22px] m-0">COWORKERS</h1>}
        </Link>
        <button
          type="button"
          className={cn(
            "ml-auto rounded-full border border-background-tertiary",
            isOpen ? "w-7 h-7 bg-gray-400" : "p-1 ml-[5px] bg-background-primary",
          )}
          aria-label={isOpen ? "사이드바 접기" : "사이드바 펼치기"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen && <div className="w-6 h-6 bg-gray-400 rounded-full" aria-hidden />}
        </button>
      </header>

      <nav className={cn("w-full flex-1 min-h-0 flex flex-col justify-between", isOpen ? "px-6" : "px-[10px]")}>
        <section className="w-full flex-1 min-h-0 flex flex-col items-center justify-start gap-[12px]">
          <div className={cn("w-full flex flex-col gap-2", isOpen && "pb-3")}>
            <SidebarDropdown isOpen={isOpen} />

            {isOpen && <AddTeamButton />}
          </div>

          <hr className={cn("w-full text-background-tertiary", !isOpen && "hidden")} />

          <SidebarLink title="자유게시판" isOpen={isOpen} />
        </section>

        <footer
          className={cn(
            "w-full shrink-0 border-t border-background-tertiary pt-5 pb-6 flex items-center gap-[10px]",
            !isOpen && "flex-center",
          )}
        >
          <Image
            src={user.image}
            alt={`${user.nickname} 이미지`}
            width={40}
            height={40}
            className="w-10 h-10 rounded-[12px]"
          />
          {isOpen && (
            <div className="flex flex-col items-start gap-[2px]">
              <span className="text-text-primary text-lg-medium">{user.nickname}</span>
              <span className="text-slate-400 text-md-medium">{user.memberships[0].group.name}</span>
            </div>
          )}
        </footer>
      </nav>
    </aside>
  );
};

export default Sidebar;
