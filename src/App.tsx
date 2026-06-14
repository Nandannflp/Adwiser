import PricingSection4 from "@/components/ui/pricing-section-4"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function App() {
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
    <div className="w-full min-h-screen bg-background relative selection:bg-primary selection:text-primary-foreground overflow-x-hidden text-foreground">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[100] backdrop-blur-md border-b border-border bg-background/80">
        <div className="text-2xl font-bold font-syne tracking-tight">Adwiser.</div>
        <div className="flex items-center gap-6">
          <a href="#services" className="font-semibold hover:text-primary transition-colors hidden sm:block">Services</a>
          <a href="#pricing" className="font-semibold hover:text-primary transition-colors hidden sm:block">Pricing</a>
          <a href="#contact" className="font-semibold hover:text-primary transition-colors hidden sm:block">Contact</a>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-muted transition-colors flex items-center justify-center border border-border"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-24">
        {/* Animated Background Blobs */}
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-primary/40 dark:bg-primary/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen pointer-events-none z-0"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-blue-500/40 dark:bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen pointer-events-none z-0" style={{animationDelay: '-5s'}}></div>

        <div className="relative z-10 max-w-4xl text-center">
          <div className="inline-block px-6 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold backdrop-blur-md text-sm uppercase tracking-wider">
            Next-Gen Digital Marketing
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold font-syne mb-6 leading-tight tracking-tighter">
            Elevate your brand <br/>to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-pink-500">stratosphere</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We craft ultra-visual, high-converting digital experiences. From Meta Ads to cutting-edge web development, Adwiser is your unfair advantage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(123,44,191,0.4)]">
              Explore Services
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full border-2 border-border hover:border-primary hover:bg-primary/5 font-bold text-lg transition-all">
              Let's Talk
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold font-syne mb-4">Our Arsenal</h2>
            <p className="text-xl text-muted-foreground">Everything you need to dominate the digital landscape.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service 1 */}
            <div className="group bg-card border border-border rounded-3xl p-8 hover:border-primary hover:-translate-y-2 transition-all duration-300 relative overflow-hidden backdrop-blur-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-syne">Lead Generation</h3>
              <p className="text-muted-foreground leading-relaxed">High-quality, intent-driven leads that convert. We fill your pipeline so you can focus on closing.</p>
            </div>

            {/* Service 2 */}
            <div className="group bg-card border border-border rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden backdrop-blur-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-500 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-syne">Meta Ads Accounts</h3>
              <p className="text-muted-foreground leading-relaxed">Secure, verified, and warmed-up Meta Ads accounts ready for scaling without bans.</p>
            </div>

            {/* Service 3 */}
            <div className="group bg-card border border-border rounded-3xl p-8 hover:border-pink-500 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden backdrop-blur-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-pink-500/20 text-pink-500 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-syne">Ads Setup & Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">Pixel integration, audience targeting, and campaign architecture designed for maximum ROI.</p>
            </div>

            {/* Service 4 */}
            <div className="group bg-card border border-border rounded-3xl p-8 hover:border-primary hover:-translate-y-2 transition-all duration-300 relative overflow-hidden backdrop-blur-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-syne">Web Development</h3>
              <p className="text-muted-foreground leading-relaxed">Blazing fast, ultra-visual websites built to convert. We don't just build sites, we build digital experiences.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10">
        <PricingSection4 />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-3xl p-8 sm:p-16 text-center backdrop-blur-lg">
          <h2 className="text-4xl sm:text-5xl font-bold font-syne mb-4">Ready to level up?</h2>
          <p className="text-xl text-muted-foreground mb-10">Let's build something extraordinary together.</p>
          
          <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Message sent! (Demo only)'); }}>
            <input type="text" placeholder="Your Name" required className="px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground" />
            <input type="email" placeholder="Your Email" required className="px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground" />
            <textarea placeholder="Tell us about your project" rows={4} required className="px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground resize-none"></textarea>
            <button type="submit" className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors mt-2">
              Send Message
            </button>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border py-12 text-center text-muted-foreground relative z-10">
        <div className="text-2xl font-bold font-syne tracking-tight mb-4 text-foreground">Adwiser.</div>
        <p>&copy; {new Date().getFullYear()} Adwiser. All rights reserved.</p>
      </footer>
    </div>
  )
}
