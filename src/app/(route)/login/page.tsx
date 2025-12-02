import { LoginForm } from "./_components";
import { CenteredCardLayout, SocialAuthSection } from "../_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coworkers | 로그인 페이지",
  description: "팀원들과 함께하는 일정 관리 서비스. 함께 일정을 계획하고 관리해보세요.",
  openGraph: {
    title: "Coworkers",
    description: "팀원들과 함께하는 일정 관리 서비스. 함께 일정을 계획하고 관리해보세요.",
    type: "website",
  },
};

const LoginPage = () => {
  return (
    <CenteredCardLayout
      className="min-w-[343px] max-h-[670px] max-w-[550px] py-[60px] tablet:py-[70px]"
      title="로그인"
      titleClassName="text-xl-bold"
    >
      <LoginForm />
      <SocialAuthSection mode="login" />
    </CenteredCardLayout>
  );
};

export default LoginPage;
