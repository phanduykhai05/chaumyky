import { Play, Clock, Star, Lock } from "lucide-react"

const modules = [
  {
    title: "Module 1: Tư Duy KIẾM CHUYỆN Youtube",
    lessons: 12,
    duration: "2h 30m",
    isLocked: false,
  },
  {
    title: "Module 2: Nghiên Cứu Niche & Keyword",
    lessons: 15,
    duration: "3h 15m",
    isLocked: false,
  },
  {
    title: "Module 3: Tạo Kênh Youtube Chuẩn SEO",
    lessons: 10,
    duration: "1h 45m",
    isLocked: false,
  },
  {
    title: "Module 4: Viết Script Với AI",
    lessons: 18,
    duration: "4h 00m",
    isLocked: true,
  },
  {
    title: "Module 5: Tạo Video Bằng AI Tools",
    lessons: 20,
    duration: "5h 30m",
    isLocked: true,
  },
  {
    title: "Module 6: Thumbnail & Tiêu Đề Viral",
    lessons: 14,
    duration: "2h 45m",
    isLocked: true,
  },
  {
    title: "Module 7: SEO & Tối Ưu Video",
    lessons: 16,
    duration: "3h 00m",
    isLocked: true,
  },
  {
    title: "Module 8: Monetization & Scale",
    lessons: 12,
    duration: "2h 30m",
    isLocked: true,
  },
]

export function CourseSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Chương trình học</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            <span className="text-gold-gradient">LỘ TRÌNH HỌC CHI TIẾT</span>
            <br />
            <span className="text-gold-gradient">TỪ 0 ĐẾN KIẾM CHUYỆN</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            8 Module - 117 Bài học - 25+ Giờ nội dung chất lượng cao
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-5 flex items-center justify-between hover:border-primary/50 transition-colors ${
                module.isLocked ? "opacity-70" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    module.isLocked ? "bg-secondary" : "bg-primary/10"
                  }`}
                >
                  {module.isLocked ? (
                    <Lock className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Play className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{module.title}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span>{module.lessons} bài học</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {module.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <Star className="w-4 h-4 fill-primary" />
                <Star className="w-4 h-4 fill-primary" />
                <Star className="w-4 h-4 fill-primary" />
                <Star className="w-4 h-4 fill-primary" />
                <Star className="w-4 h-4 fill-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
