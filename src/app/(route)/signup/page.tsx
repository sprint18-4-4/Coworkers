import { SignUpForm } from "./_components";
import { CenteredCardLayout, SocialAuthSection } from "../_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coworkers | 회원가입",
  description: "회원가입 후 Coworkers 서비스를 이용해보세요.",
  openGraph: {
    title: "Coworkers",
    description: "팀원들과 함께하는 일정 관리 서비스. 함께 일정을 계획하고 관리해보세요.",
    type: "website",
  },
};

const SignUpPage = () => {
  return (
    <CenteredCardLayout
      className="w-full min-w-[343px] tablet:max-h-[800px] tablet:max-w-[550px] my-[35px] pt-[50px] pb-[30px]"
      title="회원가입"
      titleClassName="text-xl-bold"
    >
      <SignUpForm />
      <SocialAuthSection mode="signup" />
    </CenteredCardLayout>
  );
};

export default SignUpPage;
