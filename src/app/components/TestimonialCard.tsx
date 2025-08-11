interface TestimonialCardProps {
  avatar: string;
  company: string;
  name: string;
  testimonial: string;
  date: string;
}

export function TestimonialCard({ avatar, company, name, testimonial, date }: TestimonialCardProps) {
  return (
    <article className="grow shrink self-stretch p-6 my-auto rounded-2xl border border-solid border-neutral-900 border-opacity-20 min-w-60 w-[525px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="object-contain shrink-0 self-stretch my-auto w-14 aspect-square"
        />
        <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
          <h3 className="text-3xl italic tracking-wider leading-none text-neutral-900 max-md:max-w-full">
            {company}
          </h3>
          <p className="mt-2 text-sm tracking-wide leading-none uppercase text-neutral-900 max-md:max-w-full">
            {name}
          </p>
        </div>
      </div>
      <p className="mt-6 text-lg tracking-wide leading-6 text-neutral-900 max-md:max-w-full">
        {testimonial}
      </p>
      <time className="mt-6 text-sm tracking-wide text-neutral-900">
        {date}
      </time>
    </article>
  );
}
