"use client";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "../Icon/Icon";
import Modal from "../Modal/Modal";
import Dropdown from "../Dropdown/Dropdown";
import BaseButton from "../Button/BaseButton";
import { cn } from "@/utils";
import { LoadingSpinner } from "@/features";
import { useDeleteGroup } from "@/api/hooks";

/**
 * @author jikwon
 * @component
 * @example
 * ```tsx
 * <PageHeaderBar title="경영관리팀" />
 */

interface PageHeaderBarProps {
  title: ReactNode;
  id: number;
  isDropdown?: boolean;
}

const PageHeaderBar = ({ title, id, isDropdown = true }: PageHeaderBarProps) => {
  const router = useRouter();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const { mutate: deleteGroup, isPending } = useDeleteGroup();

  const options = [
    { label: "수정하기", action: () => router.push(`/team/${id}/edit`) },
    { label: "삭제하기", action: () => setIsOpenDeleteModal(true) },
  ];

  const handleTeamDelete = () => {
    deleteGroup(
      { id },
      {
        onSettled: () => setIsOpenDeleteModal(false),
      },
    );
  };

  return (
    <>
      <div
        className={cn(
          "w-full max-w-[1120px] flex items-center gap-2",
          "pc:px-[26px] pc:py-[18px] pc:justify-between pc:bg-background-primary pc:rounded-xl",
        )}
      >
        <h2 className={cn("text-lg-bold text-text-primary", "tablet:text-2xl-bold", "pc:text-2xl-bold")}>
          {title || <LoadingSpinner size="sm" />}
        </h2>
        {isDropdown && (
          <Dropdown iconName="setting" options={options} iconClassName="size-5 tablet:size-6 text-slate-400" />
        )}
      </div>

      {isOpenDeleteModal && (
        <Modal isOpen={isOpenDeleteModal} onClose={() => setIsOpenDeleteModal(false)}>
          <Modal.Body className="flex-col-center gap-4">
            <Icon name="alert" className="text-status-danger" />
            <p className="text-lg-medium pb-4">정말로 팀을 삭제하시겠습니까?</p>
          </Modal.Body>
          <Modal.Footer>
            <BaseButton variant="outlinedSecondary" size="large" onClick={() => setIsOpenDeleteModal(false)}>
              취소하기
            </BaseButton>
            <BaseButton
              variant="outlinedPrimary"
              size="large"
              danger
              onClick={handleTeamDelete}
              disabled={isPending}
              className="transition-colors"
            >
              삭제하기
            </BaseButton>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default PageHeaderBar;
