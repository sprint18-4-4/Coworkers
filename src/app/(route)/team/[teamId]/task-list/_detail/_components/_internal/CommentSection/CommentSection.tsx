import { cn } from "@/utils";
import { CommentItem, InputReply, Profile } from "@/common";
import { COMMENT_MOCK_DATA } from "@/MOCK_DATA";

const CommentSection = () => {
  return (
    <>
      <section className="space-y-4">
        <div className={cn("flex items-center gap-1 text-lg-bold text-text-primary mt-10", "tablet:text-2lg-bold")}>
          <h2>댓글</h2>
          <span className={cn("text-lg-bold text-brand-primary", "tablet:text-2lg-bold")}>3</span>
        </div>
        <form aria-label="댓글 작성" onSubmit={() => {}} className="flex items-center gap-3 w-full">
          <Profile src={""} />
          <InputReply />
        </form>
      </section>

      <ul aria-label="댓글 목록" className="mt-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <CommentItem key={index} comment={COMMENT_MOCK_DATA} />
        ))}
      </ul>
    </>
  );
};

export default CommentSection;
