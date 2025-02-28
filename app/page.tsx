"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import Marketing from "./components/Marketing";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ServicesMenu from "./components/ServicesMenu";
import ServiceInfo from "./components/ServiceInfo";
import VideoSection from "./components/VideoSection";
import Location from "./components/Location";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import HomeService from "./components/HomeService";
import PetSupplies from "./components/PetSupplies";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutUs />
        <WhyUs />
        <ServicesMenu />
        <ServiceInfo />
        <HomeService />
        <PetSupplies />
        <VideoSection />
        <Marketing />
        <Gallery />
        <Testimonials />
        <Location />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
