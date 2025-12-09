import { CheckCircle, Gift, Users, Zap, BookOpen, HeadphonesIcon } from "lucide-react"

const benefits = [
  {
    icon: BookOpen,
    title: "100+ Video Bài Giảng",
    description: "Hệ thống video chi tiết từ A-Z, cập nhật liên tục theo xu hướng mới nhất",
  },
  {
    icon: Users,
    title: "Cộng Đồng 10,000+ Thành Viên",
    description: "Tham gia cộng đồng học viên sôi động, hỗ trợ lẫn nhau 24/7",
  },
  {
    icon: Zap,
    title: "Công Cụ AI Độc Quyền",
    description: "Truy cập các công cụ AI được phát triển riêng cho học viên GODA",
  },
  {
    icon: Gift,
    title: "Tặng Kèm Template Premium",
    description: "Hàng trăm template video, thumbnail, script có sẵn để sử dụng ngay",
  },
  {
    icon: HeadphonesIcon,
    title: "Hỗ Trợ 1-1 Với Mentor",
    description: "Được mentor hướng dẫn trực tiếp, giải đáp mọi thắc mắc",
  },
  {
    icon: CheckCircle,
    title: "Cam Kết Hoàn Tiền",
    description: "Hoàn 100% học phí nếu bạn không hài lòng trong 30 ngày đầu",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Quyền lợi học viên</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            <span className="text-gold-gradient">BẠN SẼ NHẬN ĐƯỢC GÌ</span>
            <br />
            <span className="text-gold-gradient">KHI THAM GIA KHÓA HỌC?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
