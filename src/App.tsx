import React, { useState } from "react";

// Components
import SEOSchema from "./components/SEOSchema";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Transformation from "./components/Transformation";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import OffersAndFaqs from "./components/OffersAndFaqs";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import FloatingFAB from "./components/FloatingFAB";

export default function App() {
  const [selectedService, setSelectedService] = useState("");

  const handleBookClick = () => {
    const bookingSection = document.getElementById("book");
    if (bookingSection) {
      const topOffset = bookingSection.offsetTop - 85;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  const handleServicesClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      const topOffset = servicesSection.offsetTop - 85;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  // Seamless booking shortcut selection trigger
  const handleServiceSelect = (serviceName: string) => {
    setSelectedService(serviceName);
    // Smoothly scroll down to the booking form
    setTimeout(() => {
      handleBookClick();
    }, 100);
  };

  return (
    <>
      {/* 1. Insert Rich SEO Metadata schemas on mount */}
      <SEOSchema />

      <div className="relative min-h-screen bg-bg-dark text-luxury-cream selection:bg-primary selection:text-white overflow-x-hidden">
          
          {/* Glassmorphic Navbar */}
          <Navbar onBookClick={handleBookClick} />

          {/* Home Slideshow Header */}
          <main>
            <Hero
              onBookClick={handleBookClick}
              onServicesClick={handleServicesClick}
            />

            {/* High-level Achievements Counters */}
            <Stats />

            {/* Narrative Context of Akshai */}
            <About />

            {/* Catalog Grid Switcher */}
            <Services onServiceSelect={handleServiceSelect} />

            {/* Interactive draggable Before/After slider showcase */}
            <Transformation />

            {/* Fine Arts Gallery */}
            <Gallery />

            {/* Customer Testimonial Slider */}
            <Reviews />

            {/* Offers List & Collapsible FAQ Grid */}
            <OffersAndFaqs />

            {/* Full-stack Booking Form */}
            <BookingForm
              selectedService={selectedService}
              onClearService={() => setSelectedService("")}
            />
          </main>

          {/* Map links and Schedules */}
          <Footer />

          {/* Quick Connect touchpads FAB */}
          <FloatingFAB />

      </div>
    </>
  );
}
