"use client";

import dynamic from "next/dynamic";
import { toastKit } from "@/utils";
import { TaskListData } from "@/types";
import { format } from "date-fns";
import { TaskPdfDocument } from "./_internal";

const PDFViewer = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink), {
  ssr: false,
  loading: () => <p className="text-sm-medium text-text-primary">PDF 로딩중...</p>,
});

interface TaskPdfDownloadButtonProps {
  data: TaskListData;
}

const TaskPdfDownloadButton = ({ data }: TaskPdfDownloadButtonProps) => {
  const { success, error: errorToast } = toastKit();

  const date = format(new Date(), "yyyy년_M월_d일");
  const fileName = `작업_보고서_${date}.pdf`;

  return (
    <PDFViewer
      key={data?.[0]?.id ?? 0}
      document={<TaskPdfDocument data={data} />}
      fileName={fileName}
      onClick={() => {
        return true;
      }}
    >
      {({ loading, error }) => {
        if (error) {
          errorToast("PDF 생성 오류");
        }
        return (
          <button
            type="button"
            disabled={loading || data?.length === 0}
            onClick={() => {
              success("PDF 다운로드가 완료되었습니다.");
              return true;
            }}
            className={`text-sm-medium ${data?.length === 0 ? "text-gray-500 cursor-not-allowed" : "text-text-primary"}`}
          >
            PDF 다운로드
          </button>
        );
      }}
    </PDFViewer>
  );
};

export default TaskPdfDownloadButton;
