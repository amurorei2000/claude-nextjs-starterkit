import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 py-24 text-center">
      <Badge variant="outline" className="gap-1.5">
        <span className="size-1.5 rounded-full bg-emerald-500" />
        v1.0 출시
      </Badge>

      <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
        빠르게 시작하는{" "}
        <span className="text-muted-foreground">모던 웹 스타터킷</span>
      </h1>

      <p className="max-w-lg text-base text-muted-foreground sm:text-lg leading-relaxed">
        Next.js App Router, TypeScript, TailwindCSS, ShadcnUI로 구성된 프로덕션 레디 스타터킷.
        설정 없이 바로 개발을 시작하세요.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/features">
            시작하기
            <ArrowRight />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/about">더 알아보기</Link>
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        무료 오픈소스 · MIT 라이선스
      </p>
    </section>
  )
}