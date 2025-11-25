"use client";

import { TaskGroupItem, TaskListData } from "@/types";
import { getFrequencyLabel } from "@/utils";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { format } from "date-fns";

Font.register({
  family: "NotoSansKR",
  src: "/fonts/NotoSansKR-Regular.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontFamily: "NotoSansKR",
    fontSize: 11,
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  metaText: {
    fontSize: 10,
  },
  sectionTitle: {
    fontSize: 14,
    marginTop: 16,
    marginBottom: 8,
  },
  taskItem: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 12,
    marginBottom: 4,
  },
  taskMeta: {
    fontSize: 10,
    marginBottom: 2,
  },
  taskDescription: {
    fontSize: 10,
    marginTop: 4,
  },
});

interface TaskPdfDocumentProps {
  data: TaskListData;
}

const TaskPdfDocument = ({ data }: TaskPdfDocumentProps) => {
  const date = format(new Date(), "yyyy년 M월 d일");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* 문서 제목 */}
        <Text style={styles.title}>Coworkers</Text>

        {/* 상단 메타 정보 */}
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>날짜: {date}</Text>
          <Text style={styles.metaText}>총 작업 개수: {data?.length}개</Text>
        </View>

        {/* 작업 목록 섹션 제목 */}
        <Text style={styles.sectionTitle}>작업 목록</Text>

        {/* 작업 아이템들 */}
        {data?.map((task: TaskGroupItem) => (
          <View key={task.id} style={styles.taskItem}>
            <Text style={styles.taskTitle}>{task.name}</Text>
            <Text style={styles.taskMeta}>날짜: {date}</Text>
            <Text style={styles.taskMeta}>생성자: {task.writer.nickname}</Text>
            <Text style={styles.taskMeta}>작업 반복: {getFrequencyLabel(task.frequency)}</Text>
            {task.description && <Text style={styles.taskDescription}>상세 설명: {task.description}</Text>}
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default TaskPdfDocument;
