import { SignUpForm } from "./_components";
import { CenteredCardLayout, SocialAuthSection } from "../_components";

const SignUpPage = () => {
  return (
    <CenteredCardLayout className="min-w-[343px] min-h-[692px] max-h-[800px] max-w-[550px]" title="회원가입">
      <SignUpForm />
      <SocialAuthSection mode="signup" />
    </CenteredCardLayout>
  );
};

export default SignUpPage;
