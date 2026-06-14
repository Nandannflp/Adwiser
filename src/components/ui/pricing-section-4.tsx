"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import {VerticalCutReveal} from "@/components/ui/vertical-cut-reveal";
import NumberFlow from "@number-flow/react";
import { useRef } from "react";

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
];

export default function PricingSection4() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div
      className="min-h-screen mx-auto relative bg-background overflow-x-hidden py-10"
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] "
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] dark:opacity-100 opacity-30"></div>
        <div className="hidden dark:block">
            <SparklesComp
              density={1800}
              direction="bottom"
              speed={1}
              color="#FFFFFF"
              className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            />
        </div>
        <div className="block dark:hidden">
            <SparklesComp
              density={1800}
              direction="bottom"
              speed={1}
              color="#5a189a"
              className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            />
        </div>
      </TimelineContent>
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0 pointer-events-none"
      >
        <div className="w-full">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
          ></div>
        </div>
      </TimelineContent>

      <article className="text-center mb-10 pt-20 max-w-3xl mx-auto space-y-2 relative z-50 px-4">
        <h2 className="text-5xl font-bold text-foreground font-syne">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center "
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Pricing Plans
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-muted-foreground text-lg"
        >
          Choose a plan that works best for your digital goals.
        </TimelineContent>
      </article>

      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #206ce8 0%, transparent 70%)`,
          opacity: 0.15,
          mixBlendMode: "screen",
        }}
      />

      <div className="grid md:grid-cols-3 max-w-6xl gap-6 py-6 mx-auto px-4 z-10 relative">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="h-full"
          >
            <Card
              className={`relative h-full flex flex-col text-foreground border-border transition-transform hover:-translate-y-2 duration-300 ${
                plan.popular
                  ? "bg-card dark:shadow-[0px_-13px_300px_0px_#0900ff] shadow-[0px_5px_15px_0px_rgba(9,0,255,0.2)] z-20 border-primary"
                  : "bg-card z-10"
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-2 font-syne">{plan.name}</h3>
                </div>
                <div className="flex items-baseline my-2">
                  <span className="text-4xl font-bold">
                    ₹
                    <NumberFlow
                      value={plan.price}
                      className="text-4xl font-bold"
                    />
                  </span>
                  <span className="text-muted-foreground ml-1">
                    /-
                  </span>
                </div>
                <p className="text-sm text-muted-foreground h-10">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-4 flex-grow flex flex-col">
                <button
                  className={`w-full mb-6 p-4 text-lg font-semibold rounded-xl transition-all cursor-pointer ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-blue-500/20"
                      : "bg-transparent border-2 border-border hover:bg-muted text-foreground"
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-4 pt-4 border-t border-border flex-grow">
                  <h4 className="font-medium text-base">Includes:</h4>
                  <ul className="space-y-3">
                    {plan.includes.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
