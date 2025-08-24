"use client"

import { useEffect, useState } from "react";
import About from "@/modules/portfolio/ui/components/About";
import Contact from "@/modules/portfolio/ui/components/Contact";
import Footer from "@/modules/portfolio/ui/components/Footer";
import Header from "@/modules/portfolio/ui/components/Header";
import Navbar from "@/modules/portfolio/ui/components/Navbar";
import Services from "@/modules/portfolio/ui/components/Services";
import Work from "@/modules/portfolio/ui/components/Work";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header />
      <About isDarkMode={isDarkMode} />
      <Services />
      <Work isDarkMode={isDarkMode} />
      <Contact />
      <Footer />
    </>
  );
}
