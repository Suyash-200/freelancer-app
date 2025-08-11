export function About() {
  return (
    <section className="flex z-10 gap-20 items-center px-6 sm:px-12 lg:px-32 py-8 lg:py-16 mt-9 w-full flex-col lg:flex-row lg:gap-20">
      {/* Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/39f79ff7f054cb586a85b401417acb03b4207efe?placeholderIfAbsent=true&apiKey=1dc25df092204ad2af97e2cc14c5d1e5"
        alt="Erica Jones portrait"
        className="object-contain rounded-full max-w-xs sm:max-w-sm w-full"
      />

      {/* Text Content */}
      <div className="flex flex-col gap-6 w-full max-w-xl text-center lg:text-left">
        <div>
          <p className="text-lg sm:text-xl font-bold tracking-wide uppercase text-orange-400">
            ABOUT
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-neutral-900">
            Crafting UNIQUE BRAND EXPERIENCES SINCE 2014
          </h2>
        </div>

        <p className="text-base sm:text-lg tracking-wide leading-relaxed text-neutral-900">
          With a Visual Arts degree, my journey began in graphic design,
          crafting logos and marketing materials. Video editing followed,
          where meticulous attention to detail set my work apart, and I
          ventured into 3D modeling for immersive experiences.
        </p>

        <button className="flex items-center justify-center gap-2.5 px-6 py-3 mt-4 text-sm sm:text-base font-medium uppercase border border-neutral-900 rounded-[40px] w-full sm:w-auto text-neutral-900 hover:bg-neutral-900 hover:text-orange-50 transition-colors">
          SCHEDULE A CALL
        </button>
      </div>
    </section>
  );
}
