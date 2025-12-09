import { Phone, Mail } from "lucide-react"

export function TopBanner() {
  return (
    <div className="bg-[#111111] border-b border-border py-2 text-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="tel:0889697888" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            <span>Hotline: 088 9697 888</span>
          </a>
          <span className="text-muted-foreground hidden sm:inline">|</span>
          <a
            href="mailto:admin@hihi haha.blabla"
            className="hidden sm:flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span>Email: admin@hihi haha.blabla</span>
          </a>
        </div>

        <div className="flex-1 mx-8 overflow-hidden hidden md:block">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="text-primary mx-4">BLACK FRIDAY 2025 - ƯU ĐÃI 6.000.000Đ LỚN NHẤT TRONG NĂM!!!</span>
            <span className="text-white mx-4">•</span>
            <span className="text-primary mx-4">BLACK FRIDAY 2025 - ƯU ĐÃI 6.000.000Đ LỚN NHẤT TRONG NĂM!!!</span>
            <span className="text-white mx-4">•</span>
            <span className="text-primary mx-4">BLACK FRIDAY 2025 - ƯU ĐÃI 6.000.000Đ LỚN NHẤT TRONG NĂM!!!</span>
            <span className="text-white mx-4">•</span>
            <span className="text-primary mx-4">BLACK FRIDAY 2025 - ƯU ĐÃI 6.000.000Đ LỚN NHẤT TRONG NĂM!!!</span>
          </div>
        </div>

        <a href="#" className="text-white hover:text-primary transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span className="hidden sm:inline">Fanpage</span>
        </a>
      </div>
    </div>
  )
}
