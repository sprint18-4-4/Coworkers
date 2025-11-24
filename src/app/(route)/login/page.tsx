import { LoginForm, SocialLogin } from "./_components";
import { CenteredCardLayout } from "../_components";

const page = () => {
  return (
    <CenteredCardLayout className="min-w-[343px] min-h-[614px] max-h-[720px] max-w-[550px]">
      <h1 className="text-xl-bold text-text-primary tablet:text-2xl-bold">로그인</h1>
      <LoginForm />
      <SocialLogin />
    </CenteredCardLayout>
  );
};

export default page;
