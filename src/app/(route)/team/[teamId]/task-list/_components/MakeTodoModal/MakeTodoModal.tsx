"use client";

import { BaseButton, Input, Modal, Select } from "@/common";
import { useState } from "react";

const STYLES = {
  baseDiv: "w-full flex flex-col gap-4",
} as const;

const options = [
  { label: "최신순", value: "recent" },
  { label: "좋아요순", value: "like" },
];

const MakeTodoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [order, setOrder] = useState("recent");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Body className="flex-col-center gap-4">
        <h2 className="text-text-primary text-lg-medium mb-2">할 일 만들기</h2>
        <div className={STYLES.baseDiv}>
          <p>할 일 제목</p>
          <Input className="" placeholder="할 일 제목을 입력해주세요." />
        </div>
        <div className={STYLES.baseDiv}>
          <p>시작 날짜 및 시간</p>
          <div className="w-full flex gap-2">
            <div className="flex-[2]">
              <Input placeholder="2024년 7월 29일" className="w-full" />
            </div>
            <div className="flex-[1]">
              <Input placeholder="오후 3:30" className="w-full" />
            </div>
          </div>
        </div>
        <div className={STYLES.baseDiv}>
          <p>반복 설정</p>
          <Select value={order} options={options} onChange={setOrder} />
        </div>
        <div className={STYLES.baseDiv}>
          <p>할 일 메모</p>
          <Input placeholder="할 일 메모를 입력해주세요." />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <BaseButton variant="solid" size="large" onClick={onClose}>
          만들기
        </BaseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default MakeTodoModal;
