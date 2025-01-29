import Hero from "./Hero";
import Services from "./Services";
import Footer from "./Footer";

import Header from "./Header";
import About from "./About";
import IndustryServing from "./IndustryServing";

function Home() {
  return (
    <div className="min-h-screen pt-16 bg-background text-foreground relative">
      <Header />
      <Hero />
      <About />
      <Services />
      <IndustryServing/>
      <Footer />
    </div>
  );
}

export default Home;
