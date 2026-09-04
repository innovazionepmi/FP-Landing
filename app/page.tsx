import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Audience from "@/components/sections/Audience";
import WhatYouLearn from "@/components/sections/WhatYouLearn";
import Tools from "@/components/sections/Tools";
import Uniqueness from "@/components/sections/Uniqueness";
import Trainer from "@/components/sections/Trainer";
import Results from "@/components/sections/Results";
import Trust from "@/components/sections/Trust";
import Testimonials from "@/components/sections/Testimonials";
import Schedule from "@/components/sections/Schedule";
import Pricing from "@/components/sections/Pricing";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Audience />
      <WhatYouLearn />
      <Tools />
      <Uniqueness />
      <Trainer />
      <Results />
      <Trust />
      <Testimonials />
      <Schedule />
      <Pricing />
      <FinalCta />
      <Footer />
    </>
  );
}
