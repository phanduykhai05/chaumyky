import { Music, Mic, Headphones, Award } from "lucide-react"

const stats = [
  { icon: Music, value: "500+", label: "Bài hát" },
  { icon: Mic, value: "100+", label: "Nghệ sĩ" },
  { icon: Headphones, value: "10M+", label: "Lượt nghe" },
  { icon: Award, value: "50+", label: "Giải thưởng" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Về chúng tôi</p>
          <h2 className="text-gold-gradient text-4xl md:text-5xl font-bold mb-6">Câu chuyện của chúng tôi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bìa Recording được thành lập với sứ mệnh mang đến những sản phẩm âm nhạc chất lượng cao nhất. Chúng tôi tự
            hào là ngôi nhà của nhiều nghệ sĩ tài năng và những bản thu âm đẳng cấp.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors glow-gold"
            >
              <stat.icon className="text-primary mx-auto mb-4" size={32} />
              <p className="text-gold-gradient text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-gold-gradient text-2xl font-bold mb-4">Đam mê & Chất lượng</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Với đội ngũ producer và sound engineer hàng đầu, chúng tôi cam kết mang đến những sản phẩm âm nhạc hoàn
              hảo nhất cho nghệ sĩ và khán giả.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Phòng thu của chúng tôi được trang bị công nghệ hiện đại nhất, tạo nên môi trường sáng tạo lý tưởng cho
              mọi dự án âm nhạc.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <blockquote className="text-foreground text-lg italic leading-relaxed">
              "Âm nhạc là ngôn ngữ của tâm hồn. Tại Bìa Recording, chúng tôi biến mọi cảm xúc thành giai điệu."
            </blockquote>
            <p className="text-gold-gradient mt-4 font-semibold">— Founder, Bìa Recording</p>
          </div>
        </div>
      </div>
    </section>
  )
}
