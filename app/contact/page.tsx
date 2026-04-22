"use client"

import { useState } from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    toast.success("문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.")
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <PageLayout>
      <section className="py-16 px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">문의하기</h1>
        <p className="text-muted-foreground text-lg mb-10">
          궁금한 점이 있으시면 아래 양식을 통해 문의해 주세요.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              placeholder="홍길동"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">메시지</Label>
            <Textarea
              id="message"
              placeholder="문의 내용을 입력해 주세요."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <Button type="submit" size="lg">
            문의 보내기
          </Button>
        </form>
      </section>
    </PageLayout>
  )
}
