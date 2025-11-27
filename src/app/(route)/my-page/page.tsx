"use client";

import NotFound from "@/app/not-found";
import { useGetUser } from "@/api/hooks";
import MyPageContainer from "./_components/MyPageContainer/MyPageContainer";

const MyPage = () => {
  const { data: userData, isLoading, isError } = useGetUser();

  // TODO(김원선): 스피너 생기면 적용
  if (isLoading) return;

  if (isError || !userData) {
    NotFound();
  }

  return <MyPageContainer userData={userData} />;
};

export default MyPage;
