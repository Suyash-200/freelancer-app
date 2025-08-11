export function Hero() {
  return (
    <section className="flex z-10 flex-col items-start px-6 sm:px-10 lg:px-14 py-6 w-full uppercase">
      <div className="w-full max-w-[1102px]">
        <p className="text-lg sm:text-xl font-bold tracking-wide leading-tight text-orange-50">
          👋 Hey, I am Erica
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-medium tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FEFAEE] via-[#FCD68B] via-[#F9784C] to-[#9C356D] leading-[1.1] mt-3">
          A YOUNG CREATIVE DESIGNER BASED IN SAN DIEGO
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-8 text-sm sm:text-base font-medium">
        <button className="flex gap-2.5 justify-center items-center px-5 sm:px-6 py-2.5 sm:py-3 text-orange-50 border border-orange-50 border-solid rounded-[40px] hover:bg-orange-50 hover:text-neutral-900 transition-colors w-full sm:w-auto">
          My WORKS
        </button>

        <button className="flex gap-2.5 justify-center items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-50 rounded-[40px] text-neutral-900 hover:bg-orange-100 transition-colors w-full sm:w-auto">
          LET`S TALK
        </button>
      </div>
    </section>
  );
}
