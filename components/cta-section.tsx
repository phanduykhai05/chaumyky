import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-gold-gradient">SẴN SÀNG BẮT ĐẦU</span>
            <br />
            <span className="text-gold-gradient">HÀNH TRÌNH KIẾM CHUYỆN?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Tham gia cùng hơn 10,000+ học viên đã thành công. Đăng ký ngay hôm nay và nhận ưu đãi Black Friday giảm đến
            6,000,000đ!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-black font-bold py-6 px-8 text-lg gap-2">
              <Sparkles className="w-5 h-5" />
              ĐĂNG KÝ HỌC MIỄN PHÍ
              <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-muted-foreground text-sm">Không cần thẻ tín dụng - Truy cập ngay lập tức</p>
          </div>
        </div>
      </div>
    </section>
  )
}
