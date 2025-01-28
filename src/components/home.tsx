import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

import Header from "./Header";
import About from "./About";
import ServiceCards from "./ServiceCards";

function Home() {
  return (
    <div className="min-h-screen pt-16 bg-gray-900 text-gray-100 relative">
      <Header />
      <Hero />
      <About />
      <Services />
      <ServiceCards />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
