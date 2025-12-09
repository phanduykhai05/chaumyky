const stats = [
  { value: "10,000+", label: "Học viên" },
  { value: "100+", label: "Video bài giảng" },
  { value: "$500K+", label: "Học viên đã kiếm được" },
  { value: "4.9/5", label: "Đánh giá" },
]

export function StatsSection() {
  return (
    <section className="py-12 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gold-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
