import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { UseCases } from "@/components/use-cases"
import { ComparisonSection } from "@/components/comparison-section"
import { BuiltOn } from "@/components/built-on"
import { DeveloperSection } from "@/components/developer-section"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <UseCases />
      <ComparisonSection />
      <BuiltOn />
      <DeveloperSection />
      {/* <Testimonials /> */}
    </>
  )
}
