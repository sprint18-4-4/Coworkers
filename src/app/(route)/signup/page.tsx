import { SignUpForm, SocialSignUp } from "./_components";
import { CenteredCardLayout } from "../_components";

const SignUpPage = () => {
  return (
    <CenteredCardLayout className="min-w-[343px] min-h-[692px] max-h-[840px] max-w-[550px]">
      <h1 className="text-xl-bold text-text-primary tablet:text-2xl-bold">회원가입</h1>
      <SignUpForm />
      <SocialSignUp />
    </CenteredCardLayout>
  );
};

export default SignUpPage;
