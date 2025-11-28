import { SignUpForm } from "./_components";
import { CenteredCardLayout, SocialAuthSection } from "../_components";

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
