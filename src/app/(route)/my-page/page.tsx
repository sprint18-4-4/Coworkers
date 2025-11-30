"use client";

import { LoadingSpinner } from "@/features";
import dynamic from "next/dynamic";

const MyPageContainer = dynamic(() => import("./_components/MypageContainer"), {
  ssr: false,
  loading: () => <LoadingSpinner className="h-full flex-center" size="lg" />,
});

const MyPage = () => {
  return <MyPageContainer />;
};

export default MyPage;
