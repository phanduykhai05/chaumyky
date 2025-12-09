"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Dashboard", href: "#dashboard" },
    { label: "Blog", href: "#blog" },
    { label: "FAQs", href: "#faqs" },
  ]

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">KC</span>
              </div>
              <span className="text-gold-gradient text-xl font-bold">Châu Mỹ Kỳ</span>
            </a>
            <Button
              variant="outline"
              className="hidden lg:flex border-primary text-primary hover:bg-primary hover:text-black text-sm bg-transparent"
            >
              Hãy thành công theo cách đơn giản
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-white hover:text-primary transition-colors text-sm">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Buttons contact*/}
            <div className="hidden lg:flex items-center gap-4">
                <Button className="bg-primary text-black hover:bg-primary/90 text-sm">Đăng ký và học thử ngay</Button>
            </div>
            

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 flex flex-col gap-4 border-t border-border">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-white hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline" className="border-primary text-primary w-full bg-transparent">
                Đăng nhập
              </Button>
              <Button className="bg-primary text-black w-full">Đăng ký và học thử ngay</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
