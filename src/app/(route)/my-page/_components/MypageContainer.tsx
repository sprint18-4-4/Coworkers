"use client";

import { useGetUser } from "@/api/hooks";
import { BaseButton } from "@/common";
import { LoadingSpinner } from "@/features";
import ErrorState from "@/features/ErrorState/ErrorState";
import MyPageContent from "./MyPageContent/MyPageContent";
import NotFound from "@/app/not-found";

const MyPageContainer = () => {
  const { data: userData, isLoading, isError, refetch } = useGetUser();

  if (isLoading) {
    return <LoadingSpinner className="h-full flex-center" size="lg" />;
  }

  if (isError) {
    return (
      <div className="w-full h-full flex-col-center gap-6">
        <ErrorState />
        <BaseButton variant="solid" size="large" onClick={() => refetch()} className="w-[160px]">
          다시 시도하기
        </BaseButton>
      </div>
    );
  }

  if (!userData) {
    return NotFound();
  }

  return <MyPageContent userData={userData} />;
};

export default MyPageContainer;
