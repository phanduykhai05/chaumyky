import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Nguyễn Minh Tuấn",
    avatar: "/kychau.jpg",
    role: "Học viên khóa 3",
    content:
      "Sau 3 tháng học và áp dụng, kênh Youtube của mình đã đạt 50k subscribers và bắt đầu kiếm được $1,500/tháng. Cảm ơn anh Huân!",
    income: "$1,500/tháng",
  },
  {
    name: "Trần Thị Mai",
    avatar: "/kychau.jpg",
    role: "Học viên khóa 5",
    content:
      "Mình là mẹ bỉm sữa, không có thời gian quay video. Nhờ phương pháp AI của anh Huân, mình vẫn có thể kiếm thêm thu nhập tại nhà.",
    income: "$800/tháng",
  },
  {
    name: "Lê Văn Hùng",
    avatar: "/kychau.jpg",
    role: "Học viên khóa 2",
    content:
      "Từ một người không biết gì về Youtube, giờ mình đã có 3 kênh đang monetize. Khóa học thực sự đáng giá từng đồng!",
    income: "$3,200/tháng",
  },
  {
    name: "Phạm Thị Lan",
    avatar: "/kychau.jpg",
    role: "Học viên khóa 4",
    content:
      "Mình đã thử nhiều khóa học khác nhưng không hiệu quả. Khóa học của anh Huân là khóa duy nhất giúp mình KIẾM CHUYỆN thực sự.",
    income: "$2,100/tháng",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Học viên nói gì</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            <span className="text-gold-gradient">HÀNG NGÀN HỌC VIÊN</span>
            <br />
            <span className="text-gold-gradient">ĐÃ THÀNH CÔNG</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{testimonial.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-primary font-bold">{testimonial.income}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
