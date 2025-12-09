"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Tôi không biết gì về Youtube, có học được không?",
    answer:
      "Hoàn toàn được! Khóa học được thiết kế từ cơ bản đến nâng cao, phù hợp với cả người mới bắt đầu. Bạn sẽ được hướng dẫn từng bước từ A-Z.",
  },
  {
    question: "Mất bao lâu để bắt đầu KIẾM CHUYỆN?",
    answer:
      "Tùy thuộc vào nỗ lực của bạn, thông thường học viên bắt đầu có thu nhập từ Youtube sau 3-6 tháng áp dụng đúng phương pháp.",
  },
  {
    question: "Tôi có cần xuất hiện trước camera không?",
    answer:
      "Không cần! Đó là điểm đặc biệt của khóa học. Bạn sẽ học cách tạo video chất lượng cao bằng AI mà không cần quay mặt hay thu âm giọng nói.",
  },
  {
    question: "Khóa học có cập nhật không?",
    answer:
      "Có! Khóa học được cập nhật liên tục theo xu hướng mới nhất của Youtube và các công cụ AI. Bạn sẽ được truy cập vĩnh viễn vào tất cả nội dung mới.",
  },
  {
    question: "Tôi có được hỗ trợ không?",
    answer:
      "Bạn sẽ được tham gia cộng đồng hỗ trợ 24/7, có mentor hướng dẫn 1-1, và được giải đáp mọi thắc mắc trong quá trình học.",
  },
  {
    question: "Có hoàn tiền không nếu không hài lòng?",
    answer:
      "Có! Chúng tôi cam kết hoàn 100% học phí trong vòng 30 ngày nếu bạn không hài lòng với khóa học, không cần giải thích lý do.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQs</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            <span className="text-gold-gradient">CÂU HỎI THƯỜNG GẶP</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
