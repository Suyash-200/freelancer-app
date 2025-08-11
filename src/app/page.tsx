import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Offer } from "./components/Offer";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import {Testimonials} from "./components/Testimonials";
import {Navigation} from "./components/Navigation";

export default function Home() {
  return (
    <>
      <div className="flex overflow-hidden flex-col bg-[#fffaef]">
        <div className="w-full bg-neutral-900 max-md:max-w-full inset-0">
          <Navigation />
          <Hero />
          <div>
            <img src="./bg2.png" alt="" />
          </div>
        </div>

        <About />

        <div className="my-14 w-[90%] mx-auto border-t border-neutral-900/20" />

        <Portfolio />

        <Testimonials />

        <Services />

        <div className="my-14 w-[90%] mx-auto border-t border-neutral-900/20" />

        <Offer />

        <div>
          <img
            className="flex z-10 w-full min-h-[496px] max-md:max-w-full"
            src="./Bg.png"
            alt=""
          />
        </div>

        <Contact />
      </div>
    </>
  );
}
