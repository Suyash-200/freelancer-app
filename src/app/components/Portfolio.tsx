import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function Portfolio() {
  return (
    <section className="flex flex-col items-center pt-4 w-full">
      {/* Heading */}
      <div className="flex flex-col items-center uppercase text-center px-4">
        <p className="text-lg sm:text-xl font-bold tracking-wide text-orange-400">
          PORTFOLIO
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-neutral-900">
          MY LATEST WORKS
        </h2>
      </div>

      {/* Project */}
      <article className="relative mt-10 w-full max-w-6xl px-4">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ce4dcd8cad2063ae7c5c4e5f5606c20751df8828?placeholderIfAbsent=true&apiKey=1dc25df092204ad2af97e2cc14c5d1e5"
          alt="Steaan branding project showcase"
          className="object-cover w-full rounded-lg aspect-[16/10] sm:aspect-[16/9]"
        />

        {/* Overlay Card */}
        <div className="relative lg:absolute lg:right-14 lg:bottom-24 z-10 flex flex-col p-6 sm:p-8 w-full sm:max-w-md rounded-xl bg-black/70 mt-6 lg:mt-0">
          {/* Nav Buttons */}
          <div className="flex gap-4 sm:gap-6 items-center justify-center sm:justify-start">
            <button
              aria-label="Previous project"
              className="p-2 rounded-full bg-white transition-colors"
            >
              <FiChevronLeft className="text-black text-2xl sm:text-3xl" />
            </button>
            <button
              aria-label="Next project"
              className="p-2 rounded-full bg-white transition-colors"
            >
              <FiChevronRight className="text-black text-2xl sm:text-3xl" />
            </button>
          </div>

          {/* Text */}
          <div className="flex flex-col mt-10 sm:mt-14">
            <div className="flex flex-col font-medium">
              <span className="px-3 py-1 text-xs sm:text-sm tracking-wide text-pink-800 uppercase bg-amber-200 rounded-3xl self-center sm:self-start">
                BRANDING
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl italic tracking-wider text-orange-50 text-center sm:text-left">
                Steaan
              </h3>
            </div>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base tracking-wide leading-relaxed text-orange-50 text-center sm:text-left">
              Merging modern aesthetics with brand essence, I crafted logos
              and visuals that not only resonated with each startup's unique
              vision but also left a lasting impression.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
