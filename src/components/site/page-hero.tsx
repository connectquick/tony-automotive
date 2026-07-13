import Container from "@/components/site/container";

export default function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 text-white md:py-24">
      <Container className="text-center">
        <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 md:text-lg">
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
