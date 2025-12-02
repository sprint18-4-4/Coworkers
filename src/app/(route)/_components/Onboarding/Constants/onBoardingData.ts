export interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export const ONBOARDING_STORAGE_KEY = "hasSeenOnboarding";

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 1,
    title: "팀을 만들어\n협업을 시작하세요",
    description: "새로운 팀을 생성하거나,\n초대 코드로 기존 팀에 참여하여 동료들을 만나보세요.",
    imageSrc: "/onBoarding/team-create-onboarding.png",
  },
  {
    id: 2,
    title: "할 일을 체계적으로\n관리하고 공유하세요",
    description:
      "해야 할 일을 등록하고 우선순위를 정해보세요.\n상세 페이지에서 진행 상황을 꼼꼼하게 체크할 수 있습니다.",
    imageSrc: "/onBoarding/task-list-onboarding.png",
  },
  {
    id: 3,
    title: "자유롭게 소통하며\n아이디어를 나누세요",
    description: "팀 페이지에서 멤버들을 확인하고,\n자유게시판에서 업무 외적인 이야기도 편하게 나누어보세요.",
    imageSrc: "/onBoarding/notice-board-onboarding.png",
  },
  {
    id: 4,
    title: "나의 활동 기록을\n한눈에 확인하세요",
    description: "마이 히스토리에서 내가 완료한 일들을 모아보세요.\n성실하게 쌓여가는 기록들이 성장의 밑거름이 됩니다.",
    imageSrc: "/onBoarding/my-history-onboarding.png",
  },
  {
    id: 5,
    title: "모든 준비가\n완료되었습니다!",
    description: "계정 설정에서 프로필을 멋지게 꾸며보세요.\n이제 최고의 팀원들과 함께 프로젝트를 시작해볼까요?",
    imageSrc: "/onBoarding/my-page-onboarding.png",
  },
];
