"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import NumberFlow from "@number-flow/react"
import { useRef } from "react"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for personal branding, freelancers, and portfolios.",
    price: 2999,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    includes: [
      "Portfolio website",
      "Mobile responsive design",
      "Contact form",
      "Social media links",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business",
    description: "Best for businesses that need a website with extra features.",
    price: 3999,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Website with features",
      "Mobile responsive design",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO setup",
      "Custom sections",
    ],
  },
  {
    name: "Enterprise",
    description: "Ideal for businesses that want to sell online.",
    price: 6999,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    includes: [
      "Ecommerce website",
      "Product listing",
      "Cart and checkout",
      "Payment gateway integration",
      "Mobile responsive design",
      "SEO setup",
    ],
  },
]

export default function PricingSection4() {
  const pricingRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="pricing"
      className="py-24 px-6 relative z-10"
      ref={pricingRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne mb-4 text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your goals. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 max-w-6xl gap-6 mx-auto">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col h-full transition-all duration-300 ${
                plan.popular
                  ? "bg-card border-primary shadow-lg shadow-primary/10 z-10 scale-[1.02]"
                  : "bg-card border-border z-0 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              } rounded-2xl`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <Card className="flex flex-col h-full border-none bg-transparent shadow-none p-0">
                <CardHeader className="text-left pb-4">
                  <h3 className="text-xl font-semibold font-syne text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline my-3">
                    <span className="text-4xl font-bold text-foreground">
                      ₹
                      <NumberFlow
                        value={plan.price}
                        className="text-4xl font-bold"
                      />
                    </span>
                    <span className="text-muted-foreground ml-1">/project</span>
                  </div>
                  <p className="text-sm text-muted-foreground h-12">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-2 flex-grow flex flex-col">
                  <button
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-base transition-all duration-200 ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                        : "bg-transparent border-2 border-border text-foreground hover:border-primary hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  <div className="space-y-3 pt-4 border-t border-border flex-grow">
                    <h4 className="font-medium text-sm text-foreground">Includes:</h4>
                    <ul className="space-y-2.5">
                      {plan.includes.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Need a custom solution?{" "}
          <a href="#contact" className="text-primary hover:underline font-medium">
            Let's talk
          </a>
        </p>
      </div>
    </section>
  )
}
