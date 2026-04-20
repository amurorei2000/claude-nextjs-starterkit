import { PageLayout } from "@/components/layout/page-layout"

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">소개</h1>
        <p className="text-muted-foreground text-lg">
          이 페이지는 서비스 소개 페이지입니다.
        </p>
      </section>
    </PageLayout>
  )
}
