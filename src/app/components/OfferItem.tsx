"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { GiPolarStar } from "react-icons/gi";

interface OfferItemProps {
  title: string;
  description: string;
  index: number;
}

export function OfferItem({ title, description, index }: OfferItemProps) {
  return (
    <motion.div 
      className="flex flex-wrap gap-8 items-start mt-20 w-full max-w-[544px] max-md:mt-10 max-md:max-w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex gap-8 items-center">
        <div className="flex shrink-0 self-stretch my-auto w-8 h-8 aspect-square items-center justify-center text-neutral-900">
          <GiPolarStar size={25}/>
        </div>
        <div className="shrink-0 self-stretch my-auto w-20 border-t border-neutral-900/20" />
      </div>
      <div className="flex-1 shrink basis-0 min-w-60">
        <h3 className="text-3xl italic font-medium tracking-wider leading-none text-neutral-900">
          {title}
        </h3>
        <p className="mt-4 text-lg tracking-wide leading-6 text-neutral-900">
          {description}
        </p>
        <button className="flex items-center mt-6 text-orange-400 hover:text-orange-500 transition-colors">
          Learn more <FiArrowRight className="ml-2" />
        </button>
      </div>
    </motion.div>
  );
}