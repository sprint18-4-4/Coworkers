"use client";

import Link from "next/link";
import { Sidebar } from "@/common";
import type { User } from "@/types";
import { USER_MOCK_DATA } from "@/MOCK_DATA";

export default function LandingPage() {
  const mockUser = USER_MOCK_DATA as User;

  const WRAP = "mx-auto w-full max-w-[1440px] px-4 tablet:px-6 pc:px-8";
  const GRID = "grid items-center gap-10 tablet:gap-12 pc:grid-cols-2";
  const TEXT = "w-full max-w-[620px] place-self-center";
  const IMG = "w-full max-w-[1120px] place-self-center";
  // 사이드바가 차지하던 배경 영역만 섹션에서 보정
  const PAD_LEFT = "pl-[72px] tablet:pl-[72px] pc:pl-0";

  return (
    <div className="min-h-screen">
      <main>
        {/* HERO */}
        <section className={`w-full bg-[#F1F5F9] ${PAD_LEFT}`}>
          <div className={`${WRAP} ${GRID} pt-20 pb-12`}>
            <div className={`${TEXT} pc:pr-12`}>
              <div className="mb-4">
                <img src="/landing/land-1.svg" alt="" width={40} height={40} className="block" />
                <span className="mt-2 block text-text-default text-md-medium">함께 만들어가는 To do list</span>
              </div>
              <h1 className="text-brand-primary text-4xl">Coworkers</h1>
              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-block rounded-2xl bg-brand-primary px-6 py-3 text-text-inverse transition hover:bg-interaction-hover active:bg-interaction-pressed"
                >
                  지금 시작하기
                </Link>
              </div>
            </div>
            <div className={IMG}>
              <img src="/landing/img-1.png" alt="Coworkers 대시보드 미리보기" className="w-full" />
            </div>
          </div>
        </section>

        {/* SECTION 1 */}
        <section className={`w-full bg-[#F8FAFC]/80 ${PAD_LEFT}`}>
          <div className={`${WRAP} ${GRID} py-24`}>
            <div className={`${TEXT} pc:pr-10`}>
              <img src="/landing/land-2.svg" alt="" width={40} height={40} className="block mb-3" />
              <h2 className="text-brand-primary text-3xl-bold leading-[1.25]">
                <span className="block">칸반보드로 함께</span>
                <span className="block">할 일 목록을 관리해요</span>
              </h2>
              <p className="mt-3 text-text-default text-md-regular leading-7">
                팀원과 진행 현황을 한눈에, 실시간으로 공유할 수 있어요.
              </p>
            </div>
            <div className={IMG}>
              <img src="/landing/img-2.png" alt="칸반 보드 화면 예시" className="w-full" />
            </div>
          </div>
        </section>

        {/* SECTION 2 (파랑 배경) */}
        <section className={`w-full bg-brand-primary ${PAD_LEFT}`}>
          <div className={`${WRAP} grid items-center gap-10 tablet:gap-12 pc:grid-cols-[1.35fr_0.8fr] py-24`}>
            <div className={IMG}>
              <img src="/landing/img-3.png" alt="세부 업무 단계 화면 예시" className="w-full" />
            </div>
            <div className={`${TEXT} pc:-ml-6`}>
              <img src="/landing/land-3.svg" alt="" width={40} height={40} className="block mb-3" />
              <h2 className="text-text-inverse text-3xl-bold leading-[1.25]">
                <span className="block">세부적으로 할 일들을</span>
                <span className="block">간편하게 체계화해요</span>
              </h2>
              <p className="mt-3 text-text-inverse/80 text-md-regular leading-7">
                업무의 전체 흐름과 세부 단계가 연결되어 하나의 제품이 됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className={`w-full bg-[#F1F5F9]/80 ${PAD_LEFT}`}>
          <div className={`${WRAP} ${GRID} py-24`}>
            <div className={`${TEXT} pc:pr-10`}>
              <img src="/landing/land-4.svg" alt="" width={40} height={40} className="block mb-3" />
              <h2 className="text-brand-primary text-3xl-bold leading-[1.25]">
                <span className="block">할 일 공유를 넘어</span>
                <span className="block">의견을 나누고 함께 결정해요</span>
              </h2>
              <p className="mt-3 text-text-default text-md-regular leading-7">
                댓글과 멘션으로 빠르게 논의하고, 결정사항을 곧바로 반영해요.
              </p>
            </div>
            <div className={IMG}>
              <img src="/landing/img-4.png" alt="댓글 및 의사결정 화면 예시" className="w-full" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <footer className="bg-background-primary">
          <div className="mx-auto w-full max-w-[900px] px-4 tablet:px-6 pc:px-8 py-20 text-center">
            <h3 className="text-brand-primary text-xl-bold">지금 바로 시작해보세요</h3>
            <p className="mt-2 text-text-default text-sm-medium leading-6">
              팀원 모두와 같은 방향, 같은 속도로 나아가는 가장 쉬운 방법
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/signup"
                className="inline-block rounded-2xl bg-brand-primary px-6 py-3 text-text-inverse transition hover:bg-interaction-hover active:bg-interaction-pressed"
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
