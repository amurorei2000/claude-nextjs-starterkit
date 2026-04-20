import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function CTA() {
  return (
    <section className="py-16">
      <div className="rounded-xl border border-border bg-muted/40 px-8 py-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          지금 바로 시작하세요
        </h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
          이 스타터킷을 기반으로 여러분만의 프로젝트를 빠르게 구축하세요.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              문의하기
              <ArrowRight />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/features">기능 살펴보기</Link>
          </Button>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground">
          문의 사항이 있으신가요?{" "}
          <Link href="/contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
            연락주세요
          </Link>
        </p>
      </div>
    </section>
  )
}