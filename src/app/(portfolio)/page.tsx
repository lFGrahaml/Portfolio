import About from "@/modules/portfolio/ui/components/views/About";
import Contact from "@/modules/portfolio/ui/components/views/Contact";
import Footer from "@/modules/portfolio/ui/components/views/Footer";
import Header from "@/modules/portfolio/ui/components/views/Header";
import Navbar from "@/modules/portfolio/ui/components/views/Navbar";
import Services from "@/modules/portfolio/ui/components/views/Services";
import Work from "@/modules/portfolio/ui/components/views/Work";
import DarkModeProvider from "@/modules/portfolio/ui/components/controller/DarkModeProvider";

export default function Home() {
  return (
    <DarkModeProvider>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </DarkModeProvider>
  );
}
