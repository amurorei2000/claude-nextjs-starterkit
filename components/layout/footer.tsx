import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  "제품": [
    { href: "/features", label: "기능" },
    { href: "/pricing", label: "요금제" },
    { href: "/changelog", label: "변경 이력" },
  ],
  "회사": [
    { href: "/about", label: "소개" },
    { href: "/blog", label: "블로그" },
    { href: "/contact", label: "문의" },
  ],
  "법적 고지": [
    { href: "/privacy", label: "개인정보처리방침" },
    { href: "/terms", label: "이용약관" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-bold text-sm">
              Starter Kit
            </Link>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Next.js + TypeScript + TailwindCSS로 빠르게 시작하는 웹 스타터킷
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold mb-3">{category}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Starter Kit. All rights reserved.
        </p>
      </div>
    </footer>
  )
}