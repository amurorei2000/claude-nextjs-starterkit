import { PageLayout } from "@/components/layout/page-layout"
import { Features } from "@/components/sections/features"

export default function FeaturesPage() {
  return (
    <PageLayout>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">기능</h1>
          <p className="text-muted-foreground text-lg">
            이 스타터킷에 포함된 모든 기능을 살펴보세요.
          </p>
        </div>
        <Features />
      </section>
    </PageLayout>
  )
}
