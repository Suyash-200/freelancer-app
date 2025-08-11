import * as React from "react";
import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { LogoShowcase } from "./LogoShowcase";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Testimonials } from "./Testimonials";
import { Services } from "./Services";
import { Offer } from "./Offer";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function FreelanceTemplate() {
  return (
    <div className="flex overflow-hidden flex-col bg-orange-50">
      <div className="w-full bg-neutral-900 max-md:max-w-full">
        <Navigation />
        <Hero />
        <LogoShowcase />
      </div>

      <About />

      <div className="shrink-0 self-center max-w-full h-px border border-solid border-neutral-900 border-opacity-20 w-[1328px]" />

      <Portfolio />

      <Testimonials />

      <Services />

      <div className="shrink-0 self-center max-w-full h-px border border-solid border-neutral-900 border-opacity-20 w-[1328px]" />

      <Offer />

      <div className="flex z-10 w-full min-h-[576px] max-md:max-w-full" />

      <Contact />
      <Footer />
    </div>
  );
}

export default FreelanceTemplate;
