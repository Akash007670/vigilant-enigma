import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Marquee } from "../components/Marquee";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { BrandIntro } from "../components/BrandIntro";
import { CollectionTeaser } from "../components/CollectionTeaser";
import { BrandStory } from "../components/BrandStory";
import { WaitlistSection } from "../components/WaitListSection";
import { SocialSection } from "../components/SocialSection";
import { initLenis, destroyLenis } from "../lib/scroll";

export default function HomePage() {
  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BrandIntro />
        <CollectionTeaser />
        <BrandStory />
        <WaitlistSection />
        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
