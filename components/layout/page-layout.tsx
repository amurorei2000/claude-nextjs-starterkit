import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
}

export function PageLayout({ children, className, fullWidth = false }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={cn("flex-1", !fullWidth && "mx-auto w-full max-w-6xl px-4 py-8", className)}>
        {children}
      </main>
      <Footer />
    </div>
  )
}