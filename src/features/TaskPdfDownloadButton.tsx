"use client";

import dynamic from "next/dynamic";
import { format } from "date-fns";
import { TaskListData } from "@/types";
import { TaskPdfDocument } from "./TaskPdfDocument";

const PDFViewer = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink), {
  ssr: false,
  loading: () => <p className="text-sm-medium text-text-primary">PDF 로딩중...</p>,
});

interface TaskPdfDownloadButtonProps {
  data: TaskListData;
}

const TaskPdfDownloadButton = ({ data }: TaskPdfDownloadButtonProps) => {
  const date = format(new Date(), "yyyy년_M월_d일");
  const fileName = `작업_보고서_${date}.pdf`;

  return (
    <PDFViewer
      document={<TaskPdfDocument data={data} />}
      fileName={fileName}
      onClick={() => {
        // TODO(지권): 토스트 메시지 변경
        // console.log("PDF 다운로드 시작");
        return true;
      }}
    >
      {({ loading, error }) => {
        if (error) {
          // TODO(지권): 토스트 메시지 변경
          console.error("PDF 생성 오류:", error);
        }
        return (
          <button
            type="button"
            disabled={loading}
            onClick={() => {
              return true;
            }}
            className="text-sm-medium text-text-primary"
          >
            PDF 다운로드
          </button>
        );
      }}
    </PDFViewer>
  );
};

export default TaskPdfDownloadButton;
