import { PageLayout } from "@/components/layout/page-layout"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { CTA } from "@/components/sections/cta"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Separator />
      <Features />
      <Separator />
      <CTA />
    </PageLayout>
  )
}