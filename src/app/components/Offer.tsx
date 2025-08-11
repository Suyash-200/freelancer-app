import { OfferItem } from "./OfferItem";


export function Offer() {
  const offers = [
    {
      title: "Visual Alchemist",
      description: "Crafting brand identities that transcend, ensuring your brand captivates and stands out in a crowded digital landscape."
    },
    {
      title: "Aesthetic Maestro",
      description: "Elevating designs with a keen eye, seamlessly transitioning between print and digital for consistently striking visuals."
    },
    {
      title: "Storytelling Virtuoso",
      description: "Mastering the art of storytelling in video editing, creating compelling narratives for promotional videos and short films."
    }
  ];

  return (
    <section className="flex z-10 flex-wrap gap-10 items-start px-14 py-4 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col grow shrink uppercase min-w-60 w-[379px] max-md:max-w-full">
        <div className="max-w-full w-[474px]">
          <p className="text-xl font-bold tracking-wide leading-tight text-orange-400">
            My offer
          </p>
          <h2 className="mt-2 text-5xl font-medium leading-10 text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Art of Visual Alchemy
          </h2>
        </div>
        <button className="flex overflow-hidden gap-2.5 justify-center items-center self-start px-4 py-2.5 mt-10 text-sm font-medium rounded-3xl border border-solid border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-orange-50 transition-colors">
          <span className="self-stretch my-auto">contact me</span>
        </button>
      </div>
      <div className="grow shrink min-w-60 w-[449px] max-md:max-w-full">
        {offers.map((offer, index) => (
          <OfferItem index={0} key={index} {...offer} />
        ))}
      </div>
    </section>
  );
}
