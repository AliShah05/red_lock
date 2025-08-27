import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import BenefitsSection from "@/components/benefits-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  )
}

