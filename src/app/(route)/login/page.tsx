import { LoginForm } from "./_components";
import { CenteredCardLayout, SocialAuthSection } from "../_components";

const LoginPage = () => {
  return (
    <CenteredCardLayout className="min-w-[343px] min-h-[614px] max-h-[670px] max-w-[550px]" title="로그인">
      <LoginForm />
      <SocialAuthSection mode="login" />
    </CenteredCardLayout>
  );
};

export default LoginPage;
