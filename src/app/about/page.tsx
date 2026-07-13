import { BUSINESS, locations } from "@/lib/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Container from "@/components/site/container";
import PageHero from "@/components/site/page-hero";
import CtaBand from "@/components/site/cta";
import JsonLd from "@/components/site/json-ld";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Tony Automotive is a full-service auto repair shop in Gaithersburg, MD, built on honest work, clear communication, and dealer-quality repairs for Montgomery County drivers.",
  path: "/about",
});

const values = [
  {
    title: "Honest estimates",
    body: "We diagnose the real problem and explain it in plain language, then get your approval before any work begins. No upsells, no surprises.",
  },
  {
    title: "Quality repairs",
    body: "We work on domestic and import vehicles with quality parts and careful workmanship, so the fix lasts.",
  },
  {
    title: "Community first",
    body: "We're a local shop that treats every customer the way we'd want to be treated — like a neighbor, not a number.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        title={`About ${BUSINESS.name}`}
        subtitle={`Honest, dealer-quality auto repair in ${BUSINESS.city}, ${BUSINESS.state}.`}
      />

      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            A neighborhood shop you can trust
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              {BUSINESS.name} is a full-service auto repair shop right off
              Queenair Drive in {BUSINESS.city}, {BUSINESS.state}. We handle
              everything from routine oil changes and brake jobs to engine
              diagnostics, transmission service, and everything in between — for
              nearly every make and model on the road.
            </p>
            <p>
              Our approach is simple: figure out what's actually wrong, explain
              it clearly, and give you an honest estimate before we touch a bolt.
              We'd rather earn your trust and keep you as a customer for years
              than push a repair you don't need. When your car is ready, we'll
              walk you through what we did and why.
            </p>
            <p>
              Whether it's a warning light you can't ignore, a strange noise, or
              the maintenance that keeps your vehicle running for the long haul,
              we're here to help you drive with confidence.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <Container>
          <h2 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">
            What we stand for
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Proudly serving {BUSINESS.county}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From our shop in {BUSINESS.city}, we serve drivers across{" "}
            {BUSINESS.county} and the surrounding communities — including{" "}
            {locations
              .filter((l) => l.slug !== "gaithersburg")
              .slice(0, 6)
              .map((l) => l.name)
              .join(", ")}
            , and more. Wherever you are in the area, dealer-quality service is
            just a short drive away.
          </p>
        </Container>
      </section>

      <CtaBand heading="Have a question about your vehicle?" />
    </main>
  );
}
