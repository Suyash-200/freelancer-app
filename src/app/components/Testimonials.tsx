"use client";
import { CgCircleci } from "react-icons/cg";
import { FaCuttlefish } from "react-icons/fa";
import { SiCodeblocks } from "react-icons/si";
import { TbUfo } from "react-icons/tb";

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-10 items-center px-6 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24 bg-neutral-900 w-full">
      
      {/* Header */}
      <div className="flex flex-col gap-2 items-center text-center px-4">
        <div className="text-lg sm:text-xl font-bold tracking-wide leading-6 uppercase text-orange-400 text-opacity-80">
          TESTIMONIALS
        </div>
        <div className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-orange-50 uppercase">
          WHAT PEOPLE SAY
        </div>
      </div>

      {/* Cards Wrapper */}
      <div className="grid gap-6 sm:gap-8 w-full max-w-[1328px] grid-cols-1 md:grid-cols-2">
        
        {[
          {
            icon: <TbUfo size={40} className="text-black" />,
            title: "TechStartup Xperience",
            name: "Sarah Thompson",
            date: "February 2024",
          },
          {
            icon: <FaCuttlefish size={40} className="text-black" />,
            title: "GlorifiedBrand",
            name: "Sarah Thompson",
            date: "January 2024",
          },
          {
            icon: <CgCircleci size={40} className="text-black" />,
            title: "WorldofStartups",
            name: "Sarah Thompson",
            date: "November 2023",
          },
          {
            icon: <SiCodeblocks size={40} className="text-black" />,
            title: "StartupNation",
            name: "Sarah Thompson",
            date: "April 2023",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="flex flex-col gap-6 p-6 rounded-2xl border border-solid border-neutral-900 bg-gradient-to-r from-[#FCD68B] to-[#FFFFFF] border-opacity-20"
          >
            <div className="flex gap-4 items-center">
              <div className="border rounded-full w-14 h-14 sm:w-16 sm:h-16 bg-[#fefaee] flex items-center justify-center">
                {card.icon}
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <div className="text-xl sm:text-2xl lg:text-3xl italic font-medium tracking-wider leading-tight text-neutral-900">
                  {card.title}
                </div>
                <div className="text-xs sm:text-sm font-medium tracking-wide uppercase text-neutral-900">
                  {card.name}
                </div>
              </div>
            </div>
            <div className="text-base sm:text-lg tracking-wide leading-6 text-neutral-900">
              Ability to capture the essence of our vision and translate it into
              a visually stunning logo exceeded our expectations.
            </div>
            <div className="text-xs sm:text-sm font-medium tracking-wide text-neutral-900 text-opacity-40">
              {card.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
