import Link from "next/link";
import { Sidebar } from "@/common";
import type { User } from "@/types";
import { USER_MOCK_DATA } from "@/MOCK_DATA";

export default function LandingPage() {
  const mockUser = USER_MOCK_DATA as User;

  return (
    <div className="min-h-screen bg-background-secondary">
      {/* 좌측 사이드바 */}
      <aside className="fixed left-0 top-0 h-screen w-[72px] border-r border-border-primary bg-background-primary">
        <Sidebar user={mockUser} />
      </aside>

      {/* 본문 */}
      <main className="ml-[72px]">
        {/* HERO — 좌 텍스트 / 우 대표 이미지 */}
        <section className="mx-auto w-full max-w-[1200px] px-6 pt-16 pb-8">
          <div className="grid items-center gap-10 pc:grid-cols-2">
            {/* 텍스트 */}
            <div className="pc:pr-8">
              <p className="text-text-default text-md-medium">함께 만들어가는 To do list</p>
              <h1 className="mt-2 text-text-primary text-4xl">Coworkers</h1>

              <div className="mt-8">
                {/* 공통 버튼으로 추후 교체 가능 */}
                <Link
                  href="/signup"
                  className="inline-block rounded-2xl bg-brand-primary px-6 py-3 text-text-inverse shadow-md transition hover:bg-interaction-hover active:bg-interaction-pressed"
                >
                  지금 시작하기
                </Link>
              </div>
            </div>

            {/* 이미지 (시안의 대시보드 미리보기) */}
            <img
              src="/landing/img-1.png" // ← 대표 이미지 경로 (public/landing/img-1.png)
              alt="Coworkers 대시보드 미리보기"
              className="rounded-2xl border border-border-primary bg-background-primary shadow-sm"
            />
          </div>
        </section>

        {/* 섹션 1 */}
        <section className="mx-auto w-full max-w-[1200px] px-6 py-16">
          <div className="grid items-center gap-10 pc:grid-cols-2">
            <div className="pc:pr-8">
              <h2 className="text-text-primary text-3xl-bold">칸반보드로 함께 할 일 목록을 관리해요</h2>
              <p className="mt-3 text-text-default text-md-regular leading-7">
                팀원과 진행 현황을 한눈에, 실시간으로 공유할 수 있어요.
              </p>
            </div>
            <img
              src="/landing/img-2.png"
              alt="칸반 보드 화면 예시"
              className="rounded-2xl border border-border-primary bg-background-primary shadow-sm"
            />
          </div>
        </section>

        {/* 섹션 2 (반전) */}
        <section className="mx-auto w-full max-w-[1200px] px-6 py-16">
          <div className="grid items-center gap-10 pc:grid-cols-2">
            <img
              src="/landing/img-3.png"
              alt="세부 업무 단계 화면 예시"
              className="rounded-2xl border border-border-primary bg-background-primary shadow-sm pc:order-1"
            />
            <div className="pc:pl-8 pc:order-2 pc:text-right">
              <h2 className="text-text-primary text-3xl-bold">세부적으로 할 일들을 간편하게 체계화해요</h2>
              <p className="mt-3 text-text-default text-md-regular leading-7">
                업무의 전체 흐름과 세부 단계가 연결되어 하나의 제품이 됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* 섹션 3 */}
        <section className="mx-auto w-full max-w-[1200px] px-6 py-16">
          <div className="grid items-center gap-10 pc:grid-cols-2">
            <div className="pc:pr-8">
              <h2 className="text-text-primary text-3xl-bold">할 일 공유를 넘어 의견을 나누고 함께 결정해요</h2>
              <p className="mt-3 text-text-default text-md-regular leading-7">
                댓글과 멘션으로 빠르게 논의하고, 결정사항을 곧바로 반영해요.
              </p>
            </div>
            <img
              src="/landing/img-4.png"
              alt="댓글 및 의사결정 화면 예시"
              className="rounded-2xl border border-border-primary bg-background-primary shadow-sm"
            />
          </div>
        </section>

        {/* 하단 CTA */}
        <footer className="bg-background-primary">
          <div className="mx-auto w-full max-w-[900px] px-6 py-20 text-center">
            <h3 className="text-text-primary text-xl-bold">지금 바로 시작해보세요</h3>
            <p className="mt-2 text-text-default text-sm-medium leading-6">
              팀원 모두와 같은 방향, 같은 속도로 나아가는 가장 쉬운 방법
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/signup"
                className="rounded-2xl bg-brand-primary px-6 py-3 text-text-inverse shadow-md transition hover:bg-interaction-hover active:bg-interaction-pressed"
              >
                지금 시작하기
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
