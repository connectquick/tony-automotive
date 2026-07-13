import Link from "next/link";
import { BUSINESS, locations } from "@/lib/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Container from "@/components/site/container";
import PageHero from "@/components/site/page-hero";
import CtaBand from "@/components/site/cta";
import JsonLd from "@/components/site/json-ld";

export const metadata = buildMetadata({
  title: "Service Areas",
  description:
    "Tony Automotive serves drivers across Montgomery County, MD — including Gaithersburg, Rockville, Germantown, Potomac, Olney, and more. Find your community.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />

      <PageHero
        title={`Serving ${BUSINESS.county}`}
        subtitle={`Based in ${BUSINESS.city}, ${BUSINESS.state}, we provide honest, dealer-quality auto repair to drivers across the area. Find your community below.`}
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="group block rounded-lg border border-slate-200 p-6 transition hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  {location.name}
                </h2>
                <p className="mt-2 text-sm text-slate-600">{location.blurb}</p>
                <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
                  Auto repair in {location.name} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </main>
  );
}
