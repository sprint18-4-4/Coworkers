import { SignUpForm, SocialSignUp } from "./_components";
import { CenteredCardLayout } from "../_components";

const page = () => {
  return (
    <CenteredCardLayout className="min-w-[343px] min-h-[692px] max-h-[840px] max-w-[550px]" title="회원가입">
      <SignUpForm />
      <SocialSignUp />
    </CenteredCardLayout>
  );
};

export default page;
