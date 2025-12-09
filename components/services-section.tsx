import { Disc, Radio, Video, Sparkles } from "lucide-react"

const services = [
  {
    icon: Disc,
    title: "Thu âm chuyên nghiệp",
    description: "Phòng thu đạt chuẩn quốc tế với thiết bị hiện đại nhất, mang đến chất lượng âm thanh hoàn hảo.",
  },
  {
    icon: Radio,
    title: "Mix & Master",
    description: "Đội ngũ engineer giàu kinh nghiệm xử lý âm thanh chuyên nghiệp cho mọi thể loại nhạc.",
  },
  {
    icon: Video,
    title: "Sản xuất MV",
    description: "Dịch vụ quay và dựng MV chất lượng cao, sáng tạo và ấn tượng cho nghệ sĩ.",
  },
  {
    icon: Sparkles,
    title: "Artist Development",
    description: "Hỗ trợ phát triển nghệ sĩ toàn diện từ hình ảnh, âm nhạc đến chiến lược marketing.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Dịch vụ</p>
          <h2 className="text-gold-gradient text-4xl md:text-5xl font-bold mb-6">Chúng tôi cung cấp</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dịch vụ toàn diện cho mọi nhu cầu âm nhạc của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-gold-gradient text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
