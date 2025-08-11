import { ContactForm } from "./ContactForm";
import { FaCheckCircle } from "react-icons/fa";
import { Footer } from "./Footer";

export function Contact() {
  return (
    <section className="flex overflow-hidden flex-col justify-center w-full bg-neutral-900 max-md:max-w-full">
      <div className="flex flex-col items-center px-14 py-10 max-md:px-5 max-md:py-16 max-md:max-w-full">
        
        <div className="flex flex-wrap items-start justify-between gap-10 lg:gap-44 w-full max-w-6xl">
          
          {/* Left Side */}
          <div className="flex flex-col gap-8 min-w-60 w-[432px] max-md:max-w-full">
            <div className="text-orange-50 space-y-4">
              <h2 className="text-5xl font-medium tracking-tighter leading-none uppercase max-md:text-4xl">
                Contact
              </h2>
              <p className="text-lg tracking-wide leading-7 opacity-90">
                Ready to elevate your visual presence? I’m here to bring your creative visions to life.  
                Feel free to reach out.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-orange-50/20" />

            {/* Info with check icons */}
            <div className="flex gap-6 text-base tracking-wide">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-400 text-lg mt-1" />
                <div>
                  <h3 className="font-medium text-orange-50">Location</h3>
                  <p className="text-orange-50 opacity-90">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-400 text-lg mt-1" />
                <div>
                  <h3 className="font-medium text-orange-50">Phone</h3>
                  <p className="text-orange-50 opacity-90">+331012345678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1 min-w-[300px]">
            <ContactForm />
          </div>
            
        </div>
      </div>
      <Footer />
    </section>
  );
}
