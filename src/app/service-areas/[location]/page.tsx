import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/site/container";
import PageHero from "@/components/site/page-hero";
import ServiceCard from "@/components/site/service-card";
import CtaBand from "@/components/site/cta";
import JsonLd from "@/components/site/json-ld";
import { Button } from "@/components/ui/button";
import { BUSINESS, services, locations, getLocation } from "@/lib/site";
import { buildMetadata, localBusinessJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const l = getLocation(location);
  if (!l) {
    return buildMetadata({
      title: "Service Area Not Found",
      description: "This service area could not be found.",
      path: `/service-areas/${location}`,
    });
  }
  return buildMetadata({
    title: `Auto Repair in ${l.name}, MD`,
    description: `${l.blurb} Full-service auto repair for ${l.name} — call ${BUSINESS.phone}.`,
    path: `/service-areas/${l.slug}`,
    keywords: [`auto repair ${l.name}`, `mechanic ${l.name} MD`],
  });
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const l = getLocation(location);
  if (!l) notFound();

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: l.name, path: `/service-areas/${l.slug}` },
  ];

  return (
    <div className="min-h-screen">
      <JsonLd data={localBusinessJsonLd({ areaServed: `${l.name}, MD` })} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-slate-50">
        <Container>
          <ol className="flex flex-wrap items-center gap-2 py-3 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/service-areas"
                className="hover:text-blue-600 hover:underline"
              >
                Service Areas
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-slate-900" aria-current="page">
              {l.name}
            </li>
          </ol>
        </Container>
      </nav>

      <PageHero title={`Auto Repair in ${l.name}, MD`} subtitle={l.blurb}>
        <Button asChild variant="secondary" size="lg">
          <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
        </Button>
      </PageHero>

      {/* Intro */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Trusted Auto Repair for {l.name} Drivers
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              {l.blurb} {BUSINESS.name} is {l.drive} from {l.name}, serving
              neighborhoods like {formatNeighborhoods(l.neighborhoods)} with
              honest, dealer-quality repairs and maintenance. From quick oil
              changes to major engine work, our technicians explain exactly what
              your vehicle needs — and what it doesn&apos;t — before any work
              begins.
            </p>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Located at {BUSINESS.address}, {BUSINESS.city}, {BUSINESS.state}{" "}
              {BUSINESS.zip}, we make it easy for {l.name} residents to get back
              on the road with confidence. Call us at{" "}
              <a
                href={BUSINESS.phoneHref}
                className="font-semibold text-blue-600 hover:underline"
              >
                {BUSINESS.phone}
              </a>{" "}
              to schedule your visit.
            </p>
          </div>

          {/* Services grid */}
          <div className="mt-12">
            <h3 className="text-center text-xl font-semibold text-slate-900 md:text-2xl">
              Our Services in {l.name}
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <ServiceCard
                  key={s.slug}
                  service={s}
                  href={`/services/${s.slug}/${l.slug}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand heading={`Ready for honest auto repair in ${l.name}?`} />
    </div>
  );
}

function formatNeighborhoods(neighborhoods: string[]): string {
  if (neighborhoods.length === 0) return "the surrounding area";
  if (neighborhoods.length === 1) return neighborhoods[0];
  if (neighborhoods.length === 2)
    return `${neighborhoods[0]} and ${neighborhoods[1]}`;
  return `${neighborhoods.slice(0, -1).join(", ")}, and ${
    neighborhoods[neighborhoods.length - 1]
  }`;
}
