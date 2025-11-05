const LeftMobile = () => {
  return (
    <nav className="flex flex-col items-center justify-start p-4 bg-white border-r border-[#E2E8F0]">
      <button className="w-6 h-6 bg-gray-300" />
      <div>
        <button
          type="button"
          className="w-full px-3 h-[33px] flex-center gap-[4px] rounded-[8px] border border-[#5189FA] text-lg-semibold text-[#5189FA]"
        >
          + 팀 추가하기
        </button>
      </div>
    </nav>
  );
};

export default LeftMobile;
