import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Hero from "../component/Hero/Hero";
import Section from "../component/section/Section";
import Footer from "../component/Footer/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <Footer />
    </div>
  );
}
