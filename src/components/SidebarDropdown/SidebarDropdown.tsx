const MockData = [
  {
    title: "경영관리팀",
  },
  {
    title: "프로덕트팀",
  },
  {
    title: "마케팅팀",
  },
  {
    title: "콘텐츠팀",
  },
];

const DropdownItem = ({ title, isOpen }: { title: string; isOpen: boolean }) => {
  return (
    <div className={`h-[52px] rounded-[12px] p-4 flex items-center gap-3 bg-white ${isOpen ? "w-full" : "w-[52px]"}`}>
      <div className="w-5 h-5 bg-black shrink-0" />
      {isOpen && <span className="flex-1 min-w-0 text-lg-regular text-[#1E293B] truncate">{title}</span>}
    </div>
  );
};

const SidebarDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <details className="group w-full rounded-[12px] bg-white">
      <summary className="list-none px-4 py-2 flex items-center justify-between cursor-pointer rounded-[12px] select-none">
        <span className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-400" />
          <span className="text-lg-semibold text-slate-400">팀 선택</span>
        </span>
        <div className="w-5 h-5 bg-gray-400 group-open:rotate-180 transition-transform" />
      </summary>

      {/* 드롭다운 내용 */}
      <ul className="flex flex-col gap-2 mt-2">
        {MockData.map((item, index) => (
          <li key={index}>
            <DropdownItem title={item.title} isOpen={isOpen} />
          </li>
        ))}
      </ul>
    </details>
  );
};

export default SidebarDropdown;
