import { Phone, Mail, MapPin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#050505]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xs">KC</span>
              </div>
              <span className="text-gold-gradient text-xl font-bold">Châu Mỹ Kỳ</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Nền tảng đào tạo KIẾM CHUYỆN TỪ Lũ Quỷ Iu bằng AI hàng đầu Việt Nam. Giúp bạn xây dựng thu nhập thụ động từ
              Youtube mà không cần xuất hiện trước camera.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors"
              >
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Chương trình học
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Quyền lợi học viên
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Về Huân
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Chính sách</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Chính sách hoàn tiền
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Quy định thanh toán
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Hotline</p>
                  <a href="tel:0889697888" className="text-muted-foreground hover:text-primary text-sm">
                    088 9697 888
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <a href="mailto:admin@hihi haha.blabla" className="text-muted-foreground hover:text-primary text-sm">
                    admin@hihi haha.blabla
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Địa chỉ</p>
                  <p className="text-muted-foreground text-sm">TP. Hồ Chí Minh, Việt Nam</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2025 hihi haha.blabla - GODA Holding. All rights reserved.</p>
          <p className="text-muted-foreground text-sm">
            Designed with <span className="text-primary">♥</span> for Vietnamese Creators
          </p>
        </div>
      </div>
    </footer>
  )
}
