import { cn } from "@/utils/cn";
import Link from "next/link";
import { SidebarDropdownProps } from "../../_types";
import { Dropdown, Icon, Profile } from "@/common";
import SidebarDropdown from "../SidebarDropdown/SidebarDropdown";
import AddTeamButton from "../AddTeamButton/AddTeamButton";
import SidebarLink from "../SidebarLink/SidebarLink";

const SidebarTablet = ({ user, isOpen, handleOpenDropdown, options }: SidebarDropdownProps) => {
  return (
    <aside
      className={cn(
        "flex-col sticky top-0 h-[100vh] border-r border-background-tertiary z-[10]",
        isOpen ? "w-[270px]" : "w-[72px]",
        "hidden tablet:flex pc:flex",
      )}
    >
      <header className="flex items-center gap-[10px] px-6 py-8 relative">
        <Link href="/" className="flex items-center gap-1">
          <Icon name="logo" />
          {isOpen && <h2 className="text-brand-primary font-bold text-5 leading-none pr-[22px] m-0">COWORKERS</h2>}
        </Link>
        <button
          type="button"
          aria-label={isOpen ? "사이드바 접기" : "사이드바 펼치기"}
          onClick={() => handleOpenDropdown(isOpen)}
          className={cn(
            "ml-auto rounded-full bg-background-primary",
            isOpen ? "size-7" : "p-1 -mx-1.5 border border-background-tertiary",
          )}
        >
          {isOpen ? (
            <Icon name="leftFold" className="size-6 tablet:size-6" />
          ) : (
            <Icon name="rightFold" className="size-6 tablet:size-6 text-slate-300" />
          )}
        </button>
      </header>

      <nav className={cn("w-full flex-1 min-h-0 flex flex-col justify-between", isOpen ? "px-6" : "px-[10px]")}>
        <section className="w-full flex-1 min-h-0 flex flex-col items-center justify-start gap-3">
          {user && (
            <>
              {user.memberships.length > 0 && (
                <>
                  <SidebarDropdown isOpen={isOpen} membership={user.memberships} />
                  <hr className={cn("w-full text-background-tertiary", !isOpen && "hidden")} />
                </>
              )}

              <SidebarLink title="자유게시판" isOpen={isOpen} href="/dashboard" iconName="board" />
              {isOpen ? (
                <AddTeamButton />
              ) : (
                <SidebarLink title="팀 추가하기" isOpen={isOpen} href="/team-creation" iconName="plus" />
              )}
            </>
          )}
        </section>

        <footer
          className={cn(
            "w-full shrink-0 border-t border-background-tertiary pt-5 pb-6 flex items-center gap-[10px]",
            !isOpen && "flex-center",
          )}
        >
          {user ? (
            <Dropdown
              options={options}
              placement="top-left"
              image={
                <div className="flex items-center gap-3">
                  <Profile src={user?.image} alt={user?.nickname} size="lg" />
                  {isOpen && (
                    <div className="flex flex-col items-start gap-[2px]">
                      <span className="text-text-primary text-lg-medium truncate max-w-[120px]">{user.nickname}</span>
                      <span className="text-slate-400 text-md-medium truncate max-w-[120px]">
                        {user.memberships?.[0]?.group?.name ?? "소속없음"}
                      </span>
                    </div>
                  )}
                </div>
              }
            />
          ) : (
            <div className="flex items-center gap-3">
              {isOpen && <Profile src="" alt="" size="lg" />}
              <Link href="/login">로그인</Link>
            </div>
          )}
        </footer>
      </nav>
    </aside>
  );
};

export default SidebarTablet;
