"use client";

import { useGetUser } from "@/api/hooks";
import NotFound from "@/app/not-found";
import MyPageContent from "./MyPageContent/MyPageContent";
import { LoadingSpinner } from "@/features";

const MyPageContainer = () => {
  const { data: userData, isLoading, isError } = useGetUser();

  if (isLoading) {
    return <LoadingSpinner className="h-full flex-center" size="lg" />;
  }

  if (isError || !userData) {
    return NotFound();
  }

  return <MyPageContent userData={userData} />;
};

export default MyPageContainer;
