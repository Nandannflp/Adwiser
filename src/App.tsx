import PricingSection4 from "@/components/ui/pricing-section-4"
import { useState, useEffect } from "react"
import { Moon, Sun, ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { GlowButton } from "@/components/ui/GlowButton"
import { Marquee } from "@/components/ui/Marquee"
import { SectionBackground } from "@/components/ui/SectionBackground"
import { Testimonials } from "@/components/ui/Testimonials"
import { GoogleRatings } from "@/components/ui/GoogleRatings"

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
    <div className="w-full min-h-screen bg-background relative selection:bg-primary selection:text-primary-foreground overflow-x-hidden text-foreground antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-[100] backdrop-blur-md border-b border-border bg-background/90">
        <div className="flex items-center gap-3">
          <img src="/Adwiser/logo.png" alt="Adwiser Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain dark:invert" />
          <div className="text-xl font-bold font-syne tracking-tight text-foreground">Adwiser.</div>
        </div>
        <div className="flex items-center gap-8">
          <a href="#services" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#trust" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          <a href="#pricing" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#contact" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition-colors flex items-center justify-center border border-border"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/Adwiser/hero-bg.png" alt="Digital Marketing Workspace" className="w-full h-full object-cover opacity-30 dark:opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center px-4 mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-md text-sm font-medium text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            #1 Performance Marketing Agency
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-syne mb-8 leading-[1.1] tracking-tight text-foreground drop-shadow-lg">
            Scale your brand to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">stratosphere</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow">
            We build high-converting digital experiences. From Meta Ads scaling to custom web development — Adwiser is your ultimate growth partner.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#contact">
              <GlowButton variant="primary" className="w-full sm:w-auto text-lg px-10 py-6">
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
              </GlowButton>
            </a>
            <a href="#services">
              <GlowButton variant="outline" className="w-full sm:w-auto text-lg px-10 py-6">
                View Services
              </GlowButton>
            </a>
          </div>
        </div>
      </header>

      {/* Marquee Highlights Section */}
      <section className="relative z-20 py-10 border-y border-border bg-muted/20 backdrop-blur-sm overflow-hidden">
        <Marquee className="text-2xl md:text-4xl font-bold font-syne opacity-80" pauseOnHover>
          <span className="text-primary mx-8">✦</span>
          <span>3.2x Average ROAS</span>
          <span className="text-primary mx-8">✦</span>
          <span>98% Client Retention</span>
          <span className="text-primary mx-8">✦</span>
          <span>Verified Meta Partner</span>
          <span className="text-primary mx-8">✦</span>
          <span>₹50Cr+ Ad Spend Managed</span>
          <span className="text-primary mx-8">✦</span>
          <span>Award Winning Designs</span>
        </Marquee>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24">
        <SectionBackground pattern="grid">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-6xl font-bold font-syne mb-6 text-foreground">End-to-end digital solutions</h2>
                <p className="text-xl text-muted-foreground">Built for modern brands that want to dominate their niche. We combine data-driven marketing with world-class engineering.</p>
              </div>
              <div className="lg:w-1/2 relative">
                <img src="/Adwiser/data-viz.png" alt="Growth Analytics" className="rounded-3xl shadow-2xl shadow-primary/20 border border-border" />
                {/* Floating stat badge */}
                <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '4s'}}>
                  <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average Growth</p>
                    <p className="text-xl font-bold">+245%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service 1 */}
              <article className="group bg-card/80 backdrop-blur border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-syne text-foreground">Lead Generation</h3>
                <p className="text-muted-foreground leading-relaxed">High-intent leads that convert. We fill your pipeline so you focus on closing deals.</p>
              </article>

              {/* Service 2 */}
              <article className="group bg-card/80 backdrop-blur border border-border rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 text-blue-500 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-syne text-foreground">Meta Ads Accounts</h3>
                <p className="text-muted-foreground leading-relaxed">Secure, verified, warmed-up accounts ready for scaling without sudden bans.</p>
              </article>

              {/* Service 3 */}
              <article className="group bg-card/80 backdrop-blur border border-border rounded-2xl p-8 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 text-pink-500 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-syne text-foreground">Ads Setup & Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">Pixel integration, pinpoint audience targeting, and campaign architecture for max ROI.</p>
              </article>

              {/* Service 4 */}
              <article className="group bg-card/80 backdrop-blur border border-border rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 text-purple-500 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-syne text-foreground">Web Development</h3>
                <p className="text-muted-foreground leading-relaxed">Fast, conversion-focused websites. We build stunning digital experiences, not just sites.</p>
              </article>
            </div>
          </div>
        </SectionBackground>
      </section>

      {/* Trust & Testimonials Section */}
      <section id="trust" className="py-24 px-6 relative z-10 bg-muted/10 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne mb-6 text-foreground">Trusted by industry leaders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">Don't just take our word for it. See what our partners have achieved.</p>
            
            <div className="max-w-3xl mx-auto mb-16">
              <GoogleRatings />
            </div>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-12">
        <PricingSection4 />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10 overflow-hidden">
        <SectionBackground pattern="dots">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-16 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              
              {/* Decorative background circle */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

              <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                <div className="text-left lg:pr-8">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-syne mb-6 text-foreground">
                    Let's scale your business.
                  </h2>
                  <p className="text-xl text-muted-foreground mb-12 max-w-xl">
                    Ready to achieve record-breaking growth? Tell us about your project and we'll get back to you within 24 hours.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center flex-shrink-0 text-primary">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">Email us</h3>
                        <p className="text-muted-foreground">hello@adwiser.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center flex-shrink-0 text-primary">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">Call us</h3>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center flex-shrink-0 text-primary">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">Visit us</h3>
                        <p className="text-muted-foreground">Mumbai, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-background/80 backdrop-blur-md border border-border rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold font-syne mb-6">Send a message</h3>
                  <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); alert('Message sent! (Demo only)'); }}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="px-5 py-4 rounded-xl bg-card border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="px-5 py-4 rounded-xl bg-card border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Company (optional)"
                      className="px-5 py-4 rounded-xl bg-card border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
                    />
                    <select
                      className="px-5 py-4 rounded-xl bg-card border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground appearance-none"
                    >
                      <option value="" disabled selected>Project Type</option>
                      <option value="lead-gen">Lead Generation</option>
                      <option value="meta-ads">Meta Ads Accounts</option>
                      <option value="ads-setup">Ads Setup & Strategy</option>
                      <option value="web-dev">Web Development</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea
                      placeholder="Tell us about your project goals..."
                      rows={4}
                      required
                      className="px-5 py-4 rounded-xl bg-card border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground resize-none"
                    ></textarea>
                    
                    <GlowButton variant="primary" type="submit" className="w-full mt-2">
                      Submit Inquiry
                    </GlowButton>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </SectionBackground>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 relative z-10 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/Adwiser/logo.png" alt="Adwiser Logo" className="w-10 h-10 object-contain dark:invert opacity-80" />
                <div className="text-2xl font-bold font-syne tracking-tight text-foreground">Adwiser.</div>
              </div>
              <p className="text-muted-foreground max-w-sm mb-8 text-lg">
                Building high-converting digital experiences for ambitious brands across the globe.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Services</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Lead Generation</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Meta Ads Accounts</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Ads Setup & Strategy</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Company</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#trust" className="hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Adwiser. All rights reserved.
            </p>
            <p className="text-muted-foreground font-medium flex items-center gap-2">
              Made with precision in Mumbai <span className="text-red-500">♥</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
