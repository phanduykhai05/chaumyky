import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Liên hệ</p>
          <h2 className="text-gold-gradient text-4xl md:text-5xl font-bold mb-6">Kết nối với chúng tôi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hãy liên hệ để bắt đầu hành trình âm nhạc của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground">contact@biarecording.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Điện thoại</h4>
                <p className="text-muted-foreground">+84 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Địa chỉ</h4>
                <p className="text-muted-foreground">123 Đường ABC, Quận 1, TP.HCM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Nội dung tin nhắn"
                rows={4}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Gửi tin nhắn
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
