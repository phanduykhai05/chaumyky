"use client"

import type React from "react"

import { useState } from "react"
import { Bot, UserX, VideoOff, Send, User, Mail, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-xl lg:text-2xl font-bold">
          <span className="text-gold-gradient">ĐĂNG KÝ TƯ VẤN</span>
          <br />
          <span className="text-gold-gradient">KHÓA HỌC MIỄN PHÍ!</span>
        </h2>
        <p className="text-muted-foreground text-sm">Để lại thông tin - Nhận tư vấn ngay - Học miễn phí</p>
      </div>

      {/* Info Box */}
      <div className="bg-secondary/50 border border-border rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
            <span className="text-black font-bold text-xs">KC</span>
          </div>
          <span className="text-gold-gradient font-semibold text-lg">Châu Mỹ Kỳ</span>
        </div>
        <p className="text-primary text-sm">
          Ngồi ở nhà 1 người + 1 máy tính + AI đơn giản + quy trình GODA chi tiết là làm được ngay...
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <p className="text-white text-xs font-medium">DÙNG AI</p>
          <p className="text-muted-foreground text-xs">ĐƠN GIẢN</p>
        </div>
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
            <UserX className="w-6 h-6 text-primary" />
          </div>
          <p className="text-white text-xs font-medium">KHÔNG</p>
          <p className="text-muted-foreground text-xs">XUẤT HIỆN MẶT</p>
        </div>
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
            <VideoOff className="w-6 h-6 text-primary" />
          </div>
          <p className="text-white text-xs font-medium">KHÔNG</p>
          <p className="text-muted-foreground text-xs">QUAY VIDEO</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-muted-foreground text-sm">
          Để lại thông tin của bạn. <span className="text-primary">Chúng tôi sẽ liên hệ tư vấn ngay!</span>
        </p>

        <div className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Họ và tên"
              className="bg-secondary border-border text-white pl-10"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email"
              className="bg-secondary border-border text-white pl-10"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="tel"
              placeholder="Số điện thoại"
              className="bg-secondary border-border text-white pl-10"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Textarea
              placeholder="Nội dung tin nhắn (không bắt buộc)"
              className="bg-secondary border-border text-white pl-10 min-h-[80px] resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-6 text-base gap-2"
        >
          <div className="relative">
            <Send className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 text-[8px] bg-green-500 text-white px-1 rounded">FREE</span>
          </div>
          <div className="flex flex-col items-start">
            <span>GỬI THÔNG TIN NGAY</span>
            <span className="text-xs font-normal opacity-80">Hoàn toàn MIỄN PHÍ | Tư vấn 24/7</span>
          </div>
        </Button>
      </form>
    </div>
  )
}
