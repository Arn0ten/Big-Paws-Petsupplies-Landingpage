import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Marketing from "./components/Marketing"
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Location from "./components/Location"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Marketing />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Location />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

