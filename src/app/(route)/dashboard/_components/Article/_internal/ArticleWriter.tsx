import { formatTime } from "@/utils";

interface ArticleWriterProps {
  nickname: string;
  createdAt: string;
}

const ArticleWriter = ({ nickname, createdAt }: ArticleWriterProps) => {
  const date = formatTime(createdAt);
  return (
    <span className="flex items-center gap-2">
      <span className="text-md-medium text-text-primary">{nickname}</span>
      <hr className="border border-text-primary h-3" />
      <span className="text-md-medium text-state-400">{date}</span>
    </span>
  );
};

export default ArticleWriter;
