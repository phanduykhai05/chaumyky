import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CourseSection } from "@/components/course-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <CourseSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
