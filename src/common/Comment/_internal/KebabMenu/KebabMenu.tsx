"use client";

import { useState } from "react";
import Icon from "@/common/Icon/Icon";
import { KebabMenuProps } from "../../_types/type";

const KebabMenu = ({ onEdit }: KebabMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEditClick = () => {
    setIsOpen(false);
    onEdit();
  };

  const handleDeleteClick = () => {
    // TODO(김원선): 댓글 삭제 API 연동시 구현
  };

  return (
    <div className="size-6 mr-4">
      <button type="button" className="size-6" onClick={() => setIsOpen(!isOpen)} aria-label="댓글 옵션">
        <Icon name="kebab" className="size-6 tablet:size-6" />
      </button>
      {/* TODO(김원선): 드롭다운 구현시 교체 */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-border-primary z-10 min-w-[120px]">
          <button
            onClick={handleEditClick}
            className="w-full px-4 py-2 text-left text-md-regular hover:bg-background-secondary transition-colors"
          >
            수정하기
          </button>
          <button
            onClick={handleDeleteClick}
            className="w-full px-4 py-2 text-left text-md-regular hover:bg-background-secondary text-status-danger transition-colors"
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
};

export default KebabMenu;
