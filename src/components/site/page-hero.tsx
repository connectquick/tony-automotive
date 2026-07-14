import Container from "@/components/site/container";

export default function PageHero({
  title,
  subtitle,
  image,
  children,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 py-16 text-white md:py-24">
      {image ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 to-blue-900/70" />
        </>
      ) : null}
      <Container className="relative text-center">
        <h1 className="text-3xl font-bold drop-shadow-sm md:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-50 md:text-lg">
            {subtitle}
          </p>
        ) : null}
        {children ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
