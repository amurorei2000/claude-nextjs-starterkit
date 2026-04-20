import { Lightning, Palette, Lock, Devices, Code, Rocket } from "@phosphor-icons/react/dist/ssr"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const features = [
  {
    icon: Lightning,
    title: "빠른 성능",
    description: "Next.js App Router와 React Server Components로 최적화된 성능을 제공합니다.",
  },
  {
    icon: Palette,
    title: "다크모드 지원",
    description: "CSS 변수 기반 디자인 토큰으로 라이트/다크 모드를 완벽하게 지원합니다.",
  },
  {
    icon: Lock,
    title: "TypeScript",
    description: "strict 모드 TypeScript로 타입 안전성을 보장합니다.",
  },
  {
    icon: Devices,
    title: "반응형 디자인",
    description: "모든 디바이스에서 최적화된 레이아웃을 제공합니다.",
  },
  {
    icon: Code,
    title: "ShadcnUI 컴포넌트",
    description: "라디우스 기반의 접근성 높은 컴포넌트 라이브러리가 포함되어 있습니다.",
  },
  {
    icon: Rocket,
    title: "바로 배포 가능",
    description: "Vercel 원클릭 배포를 지원합니다.",
  },
]

export function Features() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">주요 기능</h2>
        <p className="mt-3 text-muted-foreground">빠른 개발을 위한 모든 것이 준비되어 있습니다.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="border-border">
            <CardHeader>
              <feature.icon className="size-5 mb-2 text-muted-foreground" />
              <CardTitle className="text-sm font-semibold">{feature.title}</CardTitle>
              <CardDescription className="text-xs leading-relaxed">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}