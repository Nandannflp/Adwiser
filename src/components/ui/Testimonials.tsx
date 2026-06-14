import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "CMO, ElevateTech",
    image: "/Adwiser/avatar-1.png",
    text: "Adwiser completely transformed our lead generation pipeline. Within 3 months, we saw a 300% increase in qualified leads and a massive drop in CPA. Highly recommended!",
    projectType: "Meta Ads Scaling"
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Founder, Zenith E-commerce",
    image: "/Adwiser/avatar-2.png",
    text: "The web development team is phenomenal. They built us a blazing-fast Shopify store with custom animations that increased our conversion rate by 45%.",
    projectType: "Web Development"
  },
  {
    id: 3,
    name: "Anita Chen",
    role: "Marketing Director, Bloom Retail",
    image: "/Adwiser/avatar-3.png",
    text: "Their ad account setup service saved us from constant bans. We've been running uninterrupted campaigns for 8 months straight with their verified setups.",
    projectType: "Ads Setup & Strategy"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="w-full shrink-0 px-4">
              <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl relative">
                <Quote className="absolute top-8 right-8 text-primary/10 w-24 h-24" />
                
                <p className="text-xl md:text-3xl font-medium leading-relaxed mb-10 relative z-10 text-foreground">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-6 relative z-10 border-t border-border pt-8">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
                  <div>
                    <h4 className="text-lg font-bold font-syne text-foreground flex items-center gap-2">
                      {t.name}
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    </h4>
                    <p className="text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="ml-auto hidden sm:block">
                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {t.projectType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors focus:outline-none"
        >
          <ChevronLeft />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? "bg-primary" : "bg-border hover:bg-primary/50"}`}
            />
          ))}
        </div>
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors focus:outline-none"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
