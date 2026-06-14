import PricingSection4 from "@/components/ui/pricing-section-4"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="w-full min-h-screen bg-background relative selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[100] backdrop-blur-md border-b border-border bg-background/80">
        <div className="text-2xl font-bold font-syne tracking-tight">Adwiser.</div>
        <div className="flex items-center gap-6">
          <a href="#pricing" className="font-semibold hover:text-primary transition-colors">Pricing</a>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-muted transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <section id="pricing">
          <PricingSection4 />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Adwiser. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
