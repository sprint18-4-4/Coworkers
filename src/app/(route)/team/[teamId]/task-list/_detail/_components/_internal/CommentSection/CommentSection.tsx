import { cn } from "@/utils";
import { DetailDataItem } from "@/types";
import { CommentItem, InputReply, Profile } from "@/common";
import { TASK_DETAIL_COMMENT_MOCK_DATA } from "@/MOCK_DATA";

interface CommentSectionProps {
  id: string;
  data: DetailDataItem;
}

const commentData = TASK_DETAIL_COMMENT_MOCK_DATA;

const CommentSection = ({ id, data }: CommentSectionProps) => {
  return (
    <>
      <section className="space-y-4">
        <div className={cn("flex items-center gap-1 text-lg-bold text-text-primary mt-10", "tablet:text-2lg-bold")}>
          <h2>댓글</h2>
          <span className={cn("text-lg-bold text-brand-primary", "tablet:text-2lg-bold")}>{data.commentCount}</span>
        </div>
        <form aria-label="댓글 작성" onSubmit={() => {}} className="flex items-center gap-3 w-full">
          <Profile src={data.writer.image} />
          <InputReply />
        </form>
      </section>

      <ul aria-label="댓글 목록" className="mt-1">
        {commentData.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
    </>
  );
};

export default CommentSection;
