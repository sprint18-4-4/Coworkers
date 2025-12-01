<img src="https://private-user-images.githubusercontent.com/169524126/521039880-a378be81-f539-4529-8701-5d3b4193c61a.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ2Mjk3MjAsIm5iZiI6MTc2NDYyOTQyMCwicGF0aCI6Ii8xNjk1MjQxMjYvNTIxMDM5ODgwLWEzNzhiZTgxLWY1MzktNDUyOS04NzAxLTVkM2I0MTkzYzYxYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIwMVQyMjUwMjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNmU5YWVjOTFhY2U5Nzk0ZTIzNWYyZjAzY2IwNjA3NjdmOTNlMWQ1YTExZTcxYzIwYjdjZTQyNTMzYzUzOTAwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.df0yEL2wQ0DOsEMSjsRKCNr-O_5kLEBqfNDZMbkELZc" />

# Coworkers Frontend

## 기술 스택

### Core

- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.18
- **State Management**:
  - React Query 5.x (TanStack Query)
  - Zustand 5.x
- **API**: Axios 1.13.1
- **Animation**:
  - Framer Motion 12.x
  - GSAP 3.13.0
- **UI Components**:
  - React Calendar 6.x
  - React Hot Toast 2.x

### Development

- **Documentation**: Storybook 10.x
- **Linting**:
  - ESLint 9.x
  - Prettier 3.6.2
- **Husky**:
  - Husky 9.x
  - lint-staged 16.x
- **UI Testing**:
  - Chromatic
  - Storybook Test Runner

## 주요 기능

### 인증

- JWT 기반 인증
- 카카오 소셜 로그인 연동
- 이메일/비밀번호 로그인
- 자동 로그인 유지

### 상태 관리

- **서버 상태 관리**: React Query (TanStack Query)
- **클라이언트 상태 관리**: Zustand

### 성능 최적화

- **이미지 최적화**:
  - Next.js Image 컴포넌트를 활용한 자동 최적화
  - WebP 포맷 지원을 통한 용량 감소
  - Lazy Loading 적용

- **번들 최적화**:
  - 코드 스플리팅 (Code Splitting)
  - 동적 임포트(dynamic import)를 활용한 지연 로딩
  - Tree Shaking을 통한 미사용 코드 제거
  - Webpack 설정 최적화 (--webpack 플래그 사용)

- **애니메이션**:
  - GSAP: 복잡한 시각적 효과 구현
  - Framer Motion: 인터랙티브한 UI 컴포넌트 구현

### 테스트

- **시각적 테스팅**: Chromatic을 활용한 UI 컴포넌트 시각적 테스트
- **컴포넌트 문서화**: Storybook을 활용한 컴포넌트 문서화 및 개발
- **접근성 검사**: Storybook a11y 애드온을 활용한 접근성 점검

## 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/sprint18-4-4/Coworkers.git
cd Coworkers

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.local.example .env.local
# .env.local 파일 수정

# 개발 서버 실행
npm run dev
```

## 스크립트

```json
{
  "dev": "next dev --webpack",
  "build": "next build --webpack",
  "start": "next start",
  "lint": "eslint",
  "storybook": "storybook dev -p 6006",
  "build-storybook": "storybook build",
  "chromatic": "npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN",
  "build-all": "npm run build && npm run build-storybook"
}
```

## 컨벤션

### Git 커밋 메시지

```plaintext
- feat: 새로운 기능 추가
- fix: 버그 수정
- design: UI/UX 및 스타일 변경
- docs: 문서 작성 또는 수정
- refactor: 코드 리팩토링 (기능 변화 없음)
- chore: 설정, 빌드, 패키지 등 유지보수
- test: 테스트 코드 및 주석 추가/수정
- hotfix: 긴급 버그 수정
- review: 코드 리뷰 요청
- performance: 성능 최적화
- main: 메인 브랜치 관련 변경 (배포 등)
```

### 코드 스타일

- 컴포넌트: PascalCase (예: `UserProfile.tsx`)
- util 함수: camelCase (예: `formatDate.ts`)
- 상수: UPPER_SNAKE_CASE (예: `API_ENDPOINT.ts`)

### 폴더 구조

```plaintext
├── src
│   ├── api
│   │   ├── axios.ts
│   │   └── hooks.ts
│   ├── app
│   │   └── login
│   │       ├── _components
│   │       ├── _hooks
│   │       ├── _types
│   │       ├── _constants
│   │       └── page.tsx
│   ├── constants
│   ├── common
│   │   └── 공통 컴포넌트
│   ├── hooks
│   │   └── 공통 훅
│   ├── types
│   │   └── 공통 타입
│   └── utils
│       └── 공통 유틸
├── public
└── package.json
```
