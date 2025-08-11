import { ServiceItem } from "./ServiceItem";

export function Services() {
  return (
    <section className="z-10 px-6 md:px-14 py-16 md:py-24 w-full max-w-[1400px] mx-auto">
      {/* Heading */}
      <div className="w-full max-w-[474px] mx-auto md:mx-0 text-center md:text-left uppercase">
        <p className="text-xl font-bold tracking-wide leading-tight text-orange-400">
          SERVICES
        </p>
        <h2 className="mt-2 text-4xl md:text-5xl font-medium leading-none text-neutral-900">
          HOW CAN I HELP
        </h2>
      </div>

      {/* Service Items */}
      <div className="mt-14 w-full max-w-[1328px] mx-auto md:mt-14 space-y-14">
        <ServiceItem
          title="Graphic Design"
          description="Crafting distinct brand identities that resonate with the essence of each project, from startups seeking recognition to established brands seeking a fresh visual perspective."
          includesTitle="What's Included?"
          includesDescription="Seamlessly transitioning between print and digital mediums, I bring ideas to life across diverse platforms, maintaining consistency and visual appeal."
          image="https://api.builder.io/api/v1/image/assets/TEMP/5b270e831fa3bbaae6600538410f10e3a2f222b5?placeholderIfAbsent=true&apiKey=1dc25df092204ad2af97e2cc14c5d1e5"
          imageAlt="Graphic design work showcase"
          secondaryImage="https://api.builder.io/api/v1/image/assets/TEMP/7900d4fd5f12ffbed644e5c4665afe02f51de5a6?placeholderIfAbsent=true&apiKey=1dc25df092204ad2af97e2cc14c5d1e5"
          secondaryImageAlt="Design tools and materials"
        />

        <div className="w-full border-t border-neutral-900 border-opacity-20" />

        <ServiceItem
          title="Video Editing"
          description="Weaving compelling narratives through meticulous editing, I bring stories to life, balancing pacing, timing, and visual elements to captivate audiences."
          includesTitle="What's Included?"
          includesDescription="Transforming raw footage into engaging promotional videos, whether for local businesses or festival-worthy short films, each project is a testament to my storytelling prowess."
          image="https://api.builder.io/api/v1/image/assets/TEMP/93b144fc47e212d75052fab4ba8379da1f0fea8f?placeholderIfAbsent=true&apiKey=1dc25df092204ad2af97e2cc14c5d1e5"
          imageAlt="Video editing workspace"
          secondaryImage="https://api.builder.io/api/v1/image/assets/TEMP/bb19750f19e3549634b760e5eaf3781a1a43de8f?placeholderIfAbsent=true&apiKey=1dc25df092204ad2af97e2cc14c5d1e5"
          secondaryImageAlt="Video production equipment"
          reverse
        />

        <div className="w-full border-t border-neutral-900 border-opacity-20" />

        <ServiceItem
          title="3D Animation"
          description="Creating realistic 3D models for architectural visualization, I bring concepts to life with attention to detail, lighting, and advanced rendering techniques."
          includesTitle="What's Included?"
          includesDescription="Contributing to virtual reality projects, I seamlessly integrate 3D elements, enhancing the immersive experience and pushing the boundaries of digital exploration."
          image="https://api.builder.io/api/v1/image/assets/TEMP/019c3c1174ec029bb689801a2ad5407c9e544a0c?placeholderIfAbsent=true&apiKey=1dc25df092204ad2af97e2cc14c5d1e5"
          imageAlt="3D animation and modeling work"
          secondaryImage="https://api.builder.io/api/v1/image/assets/TEMP/d031b4ab9c5aed05ef9e18edb6de1655d5e944ea?placeholderIfAbsent=true&apiKey=1dc25df092204ad2af97e2cc14c5d1e5"
          secondaryImageAlt="3D modeling software interface"
        />
      </div>
    </section>
  );
}
