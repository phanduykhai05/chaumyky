"use client"

import { Youtube } from "lucide-react"
import { ContactCard } from "@/components/auth-card"

export function HeroSection() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-4 py-2">
              <div className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-full">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <span className="text-gold-gradient font-bold text-lg">100+ VIDEOS</span>
              <span className="text-muted-foreground text-sm hidden sm:inline">
                Cách tạo ra đế chế kiếm tiền Youtube sử dụng AI chỉ với 1 người từ A-Z
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-gold-gradient">HỌC HỎI TỪ YOUTUBE VỚI</span>
              <br />
              <span className="text-gold-gradient">CONTENT *AI* ĐƠN GIẢN</span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-2">
              <p className="text-white text-lg underline decoration-white underline-offset-4">
                Chỉ cần 1 người và 1 chiếc máy tính sử dụng các ứng dụng *AI* đơn giản
              </p>
              <p className="text-muted-foreground text-lg">Là bạn đã có thể ngồi ở nhà và kiếm được tiền rồi...</p>
            </div>

            {/* Phone Mockup with Person */}
            <div className="relative mt-8">
              <div className="relative mx-auto w-full max-w-md">
                {/* Phone Frame */}
                <div className="relative bg-card border-4 border-zinc-800 rounded-3xl p-2 shadow-2xl">
                  <div className="relative aspect-[9/16] bg-zinc-900 rounded-2xl overflow-hidden max-h-[400px]">
                    {/* Video Player UI */}
                    <img
                      src="/kychau.jpg"
                      alt="Châu Mỹ Kỳ"
                      className="w-full h-full object-cover"
                    />
                    {/* YouTube Play Buttons */}
                    <div className="absolute top-4 left-4 bg-red-600 rounded-full p-2">
                      <Youtube className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 bg-red-600 rounded-full p-2">
                      <Youtube className="w-4 h-4 text-white" />
                    </div>
                    {/* Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-full bg-zinc-700 h-1 rounded-full">
                          <div className="w-1/3 bg-red-600 h-1 rounded-full" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-white text-xs">
                        <span>10:24</span>
                        <span>45:31</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -right-4 top-1/4 animate-float">
                  <span className="text-3xl">👍</span>
                </div>
                <div className="absolute -left-4 top-1/3 animate-float" style={{ animationDelay: "0.5s" }}>
                  <span className="text-3xl">👋</span>
                </div>
              </div>

              {/* Name Tag */}
              <div className="text-center mt-6">
                <h3 className="text-gold-gradient text-xl font-bold">Châu Mỹ Kỳ</h3>
                <p className="text-muted-foreground text-sm italic">
                    Người sáng lập nền tảng KIẾM CHUYỆN TỪ LŨ QUỶ IU bằng AI
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:pl-8">
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  )
}
