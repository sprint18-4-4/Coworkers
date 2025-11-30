import { cn } from "@/utils";
import { ReactNode } from "react";

/**
 * @author KimWonSeon
 * @description 로그인, 회원가입, 팀 생성하기 등 여러 페이지에서 사용될 가운데 카드 레이아웃 디자인 컴포넌트입니다.
 *
 * @param children - 레이아웃 내부에 렌더링될 메인 콘텐츠입니다
 * @param className - 카드 부분을 담당하는 className 입니다. 페이지마다 크기가 달라 width와 height를 조정해주셔야합니다.
 *
 * @example
 * ```tsx
 * <CenteredCardLayout className="min-w-[343px] min-h-[692px] max-h-[840px] max-w-[550px]">
 *  <h1>로그인</h1>
 *  <SignUpForm />
 *  <SocialSingUp />
 * </CenteredCardLayout>
 */

interface CenteredCardLayoutProps {
  children: ReactNode;
  title?: string;
  titleClassName?: string;
  sectionClassName?: string;
  className?: string;
  bottomContent?: ReactNode;
}

const CenteredCardLayout = ({
  children,
  className,
  sectionClassName,
  title,
  titleClassName,
  bottomContent,
}: CenteredCardLayoutProps) => {
  return (
    <section className={cn("w-full min-h-screen mobile:h-[calc(100vh-52px)] flex-center", sectionClassName)}>
      <div
        className={cn(
          "mx-4 px-[22px] rounded-[20px]",
          "w-full bg-background-primary flex flex-col items-center justify-center",
          "tablet:h-svh tablet:mx-[61px] tablet:px-[45px]",
          className,
        )}
      >
        <h2 className={cn("text-xl-bold text-text-primary tablet:text-2xl-bold", titleClassName)}>{title}</h2>
        {children}
      </div>
      {bottomContent && <>{bottomContent}</>}
    </section>
  );
};

export default CenteredCardLayout;
