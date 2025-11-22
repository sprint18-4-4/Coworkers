"use client";

import dynamic from "next/dynamic";
import { TaskPdfDocument } from "./TaskPdfDocument";
import { TaskListData } from "@/types";

const PDFViewer = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink), {
  ssr: false,
  loading: () => <p>PDF 로드 중...</p>,
});

interface TaskPdfDownloadButtonProps {
  data: TaskListData; // tasks는 TaskGroupItem[] 타입
}

const TaskPdfDownloadButton = ({ data }: TaskPdfDownloadButtonProps) => {
  // TODO(지권): 기준 날짜 변경
  const fileName = `작업_보고서_2025년_11월_22일.pdf`;

  return (
    <PDFViewer
      document={<TaskPdfDocument data={data} />}
      fileName={fileName}
      onClick={() => {
        console.log("PDF 다운로드 시작");
        return true;
      }}
    >
      {({ loading, error }) => {
        if (error) {
          console.error("PDF 생성 오류:", error);
          return (
            <button type="button" className="px-3 py-2 rounded-md border text-sm bg-red-100 text-red-700">
              PDF 생성 오류 (콘솔 확인)
            </button>
          );
        }
        return (
          <button
            type="button"
            className="px-3 py-2 rounded-md border text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          >
            {loading ? "PDF 준비 중..." : "PDF 다운로드"}
          </button>
        );
      }}
    </PDFViewer>
  );
};

export default TaskPdfDownloadButton;
