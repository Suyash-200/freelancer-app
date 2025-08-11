interface ServiceItemProps {
  title: string;
  description: string;
  includesTitle: string;
  includesDescription: string;
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  reverse?: boolean;
}

export function ServiceItem({
  title,
  description,
  includesTitle,
  includesDescription,
  image,
  imageAlt,
  secondaryImage,
  secondaryImageAlt,
  reverse = false,
}: ServiceItemProps) {
  const content = (
    <div className="flex-1 max-w-lg text-center md:text-left">
      {/* Title & Description */}
      <div>
        <h3 className="text-3xl italic font-medium tracking-wider leading-none text-neutral-900">
          {title}
        </h3>
        <p className="mt-4 text-lg tracking-wide leading-6 text-neutral-900">
          {description}
        </p>
      </div>

      {/* What's Included */}
      <div className="mt-10">
        <h4 className="text-xl font-medium tracking-wide leading-none text-neutral-900">
          {includesTitle}
        </h4>
        <p className="mt-4 text-base tracking-wide leading-6 text-neutral-900">
          {includesDescription}
        </p>
      </div>
    </div>
  );

  const mainImage = (
    <img
      src={image}
      alt={imageAlt}
      className="object-contain rounded-md w-full max-w-sm"
    />
  );

  const secondImage = secondaryImage && (
    <img
      src={secondaryImage}
      alt={secondaryImageAlt}
      className="object-contain rounded-md w-full max-w-xs"
    />
  );

  return (
    <div
      className={`flex flex-col items-center gap-8 md:gap-10 lg:gap-16 
      ${reverse ? "md:flex-row-reverse" : "md:flex-row"} 
      md:justify-center text-center md:text-left`}
    >
      {mainImage}
      {content}
      {secondImage}
    </div>
  );
}
