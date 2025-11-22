import Link from "next/link";
import { PageEmptyState } from "@/features";

const NotFound = () => {
  return (
    <PageEmptyState
      title={
        <p>
          요청하신 페이지를 찾을 수 없습니다. <br />
          경로가 변경되었거나 존재하지 않는 주소입니다.
        </p>
      }
    >
      <Link
        href="/"
        className="px-8 py-3 text-text-inverse bg-brand-primary rounded-xl hover:bg-brand-tertiary transition-colors"
      >
        메인 페이지 이동
      </Link>
    </PageEmptyState>
  );
};

export default NotFound;
