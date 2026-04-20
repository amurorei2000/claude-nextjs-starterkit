# CLAUDE.md

이 파일은 이 저장소에서 작업하는 Claude Code(claude.ai/code)에게 안내를 제공합니다.

## 주의사항

이 프로젝트는 **Next.js 16.2.4**를 사용합니다. 학습 데이터와 API, 컨벤션, 파일 구조가 다를 수 있습니다. 코드 작성 전 반드시 `node_modules/next/dist/docs/`에서 현재 API를 확인하세요. 지원 중단 공지를 반드시 따르세요.

## 명령어

모든 명령어는 `my-app/` 디렉토리에서 실행합니다:

```bash
pnpm dev        # 개발 서버 실행 (http://localhost:3000)
pnpm build      # 프로덕션 빌드
pnpm start      # 프로덕션 서버 실행
pnpm lint       # ESLint 실행 (eslint-config-next core-web-vitals + typescript)
```

테스트 러너는 설정되어 있지 않습니다.

## 아키텍처

앱은 전적으로 `my-app/` 안에 있습니다. 루트 `claude-nextjs-starterkit/` 디렉토리는 단순 래퍼입니다.

**경로 별칭**: `@/*` → `./` (프로젝트 루트, 즉 `my-app/`)

### 레이아웃 구조

```
app/layout.tsx          ← ThemeProvider + TooltipProvider + Toaster 래핑
components/
  theme-provider.tsx    ← next-themes 래퍼 (Client Component)
  layout/
    page-layout.tsx     ← Header + main + Footer 조합, fullWidth prop으로 전체폭 제어
    header.tsx          ← sticky 헤더: 로고, 데스크탑 nav, 다크모드 토글, CTA, 모바일 메뉴
    footer.tsx          ← 링크 그리드 + 저작권
    nav-links.ts        ← navLinks 배열 (header/mobile-nav 공유)
    mobile-nav.tsx      ← Sheet 기반 모바일 드로어 (Client Component)
    theme-toggle.tsx    ← 다크/라이트 전환 버튼 (Client Component)
  sections/
    hero.tsx            ← 뱃지 + 제목 + 설명 + CTA 버튼
    features.tsx        ← 아이콘 카드 그리드
    cta.tsx             ← 행동 유도 배너 섹션
```

**새 페이지 생성 패턴**:
```tsx
import { PageLayout } from "@/components/layout/page-layout"

export default function MyPage() {
  return <PageLayout>{/* 내용 */}</PageLayout>
}
```

### 스타일링

- TailwindCSS **v4** — `tailwind.config.ts` 없이 CSS(`globals.css`)로만 설정. 토큰 확장 시 `@theme inline` 블록 사용
- 다크모드는 `.dark` 클래스 셀렉터 방식 (`@custom-variant dark (&:is(.dark *))`)
- 디자인 토큰(oklch 색상, 반경 등)은 `app/globals.css`의 `:root`와 `.dark` 블록에서 관리

### 컴포넌트 시스템

- ShadcnUI 컴포넌트는 `components/ui/`에 **로컬 소스 파일**로 존재 (패키지 import 아님)
- `lib/utils.ts`의 `cn()` (clsx + tailwind-merge) — 조건부 클래스 병합 시 항상 사용
- `radix-ui`는 단일 패키지로 사용 (예: `"radix-ui"`에서 `Slot.Root`), 개별 `@radix-ui/react-*` 패키지 아님
- 아이콘: **`@phosphor-icons/react`** 사용 (shadcn 기본값). `lucide-react`도 설치되어 있으나 혼용 지양
  - SSR 컴포넌트에서는 `@phosphor-icons/react/dist/ssr`에서 import
- `cva` (class-variance-authority) + `Slot.Root` + `data-slot` 속성이 컴포넌트 패턴의 표준

### 설치된 ShadcnUI 컴포넌트

```
ui/: button, card, badge, avatar, separator, skeleton
     input, textarea, label
     dialog, sheet, tooltip, sonner
     dropdown-menu, navigation-menu, breadcrumb
     scroll-area, tabs, table
     checkbox, select, switch
```

## 유틸리티 기능 추가 원칙

직접 구현하기 전에 검증된 라이브러리가 있는지 먼저 확인하세요. 이미 설치된 라이브러리:

| 용도 | 라이브러리 |
|---|---|
| React 커스텀 훅 | **`usehooks-ts`** — `useLocalStorage`, `useDebounce`, `useMediaQuery`, `useOnClickOutside` 등 |
| 날짜 처리 | `date-fns` 또는 `dayjs` |
| 폼 상태 관리 | `react-hook-form` |
| 스키마 검증 | `zod` |
| 클래스 병합 | `clsx` + `tailwind-merge` (`cn()` 사용) |
| 애니메이션 | `tw-animate-css` (이미 전역 적용) |
| 토스트 알림 | `sonner` (`Toaster`는 layout에 등록됨) |
| HTTP 요청 | `fetch` (Next.js 내장) |
| 서버 상태 | `@tanstack/react-query` |

새 라이브러리를 추가할 때는 번들 크기와 유지보수 활성도를 확인하고, npm trends나 bundlephobia에서 먼저 검토하세요.

## ShadcnUI 컴포넌트 추가

```bash
pnpm shadcn add <컴포넌트명>
```

`components.json`의 스타일: `radix-lyra`, 아이콘: `phosphor`