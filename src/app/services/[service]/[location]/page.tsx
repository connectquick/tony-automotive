import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Container from "@/components/site/container";
import PageHero from "@/components/site/page-hero";
import FaqList from "@/components/site/faq";
import CtaBand from "@/components/site/cta";
import JsonLd from "@/components/site/json-ld";
import {
  BUSINESS,
  services,
  getService,
  getLocation,
  serviceLocationPairs,
} from "@/lib/site";
import {
  buildMetadata,
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

type Params = { service: string; location: string };

export function generateStaticParams() {
  return serviceLocationPairs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service, location } = await params;
  const s = getService(service);
  const l = getLocation(location);
  if (!s || !l) return {};
  return buildMetadata({
    title: `${s.name} in ${l.name}, MD`,
    description: `${s.short} Trusted ${s.noun} for ${l.name} drivers — call Tony Automotive at ${BUSINESS.phone}.`,
    path: `/services/${s.slug}/${l.slug}`,
    keywords: [
      `${s.name} ${l.name}`,
      `${s.noun} ${l.name} MD`,
      `auto repair ${l.name}`,
    ],
  });
}

export default async function ServiceLocationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service, location } = await params;
  const s = getService(service);
  const l = getLocation(location);
  if (!s || !l) notFound();

  const path = `/services/${s.slug}/${l.slug}`;

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.name, path: `/services/${s.slug}` },
    { name: `${l.name}, MD`, path },
  ];

  const otherServices = services.filter((o) => o.slug !== s.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={serviceJsonLd(
          `${s.name} in ${l.name}`,
          `${s.description} Serving ${l.name}, ${BUSINESS.stateFull} drivers.`,
          `${l.name}, MD`
        )}
      />
      <JsonLd data={faqJsonLd(s.faqs)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />

      <PageHero
        title={`${s.name} in ${l.name}, MD`}
        subtitle={`${s.short} Trusted ${s.noun} for ${l.name} drivers from the team at Tony Automotive in Gaithersburg.`}
      >
        <Button asChild variant="secondary" size="lg">
          <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Book an Appointment</Link>
        </Button>
      </PageHero>

      {/* Breadcrumb */}
      <section className="border-b border-slate-100 bg-slate-50 py-3">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
              {breadcrumbItems.map((item, i) => {
                const last = i === breadcrumbItems.length - 1;
                return (
                  <li key={item.path} className="flex items-center gap-x-2">
                    {last ? (
                      <span className="font-medium text-slate-700">
                        {item.name}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={item.path}
                          className="hover:text-blue-600 hover:underline"
                        >
                          {item.name}
                        </Link>
                        <span aria-hidden="true" className="text-slate-300">
                          /
                        </span>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </Container>
      </section>

      {/* Localized intro + service detail */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-slate-700">
                {l.name} drivers trust Tony Automotive for {s.noun}. {l.blurb}{" "}
                We&apos;re {l.drive} in Gaithersburg, which makes dependable{" "}
                {s.noun} an easy, no-hassle trip — whether you&apos;re heading in
                for a quick check or a bigger job.
              </p>

              <h2 className="mt-10 text-2xl font-bold text-slate-900 md:text-3xl">
                {s.name} you can count on
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                {s.description}
              </p>

              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                What&apos;s included
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3 text-slate-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-800">
                  Neighborhoods we serve in {l.name}:
                </span>{" "}
                {l.neighborhoods.join(", ")}.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Schedule Service</Link>
                </Button>
              </div>
            </div>

            {/* Sidebar: cross-links */}
            <aside className="lg:col-span-1">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Other services in {l.name}
                </h3>
                <ul className="mt-4 space-y-2">
                  {otherServices.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/services/${o.slug}/${l.slug}`}
                        className="text-blue-600 hover:underline"
                      >
                        {o.name} in {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-2 border-t border-slate-100 pt-6 text-sm">
                  <Link
                    href={`/service-areas/${l.slug}`}
                    className="block font-medium text-slate-700 hover:text-blue-600 hover:underline"
                  >
                    All services in {l.name} →
                  </Link>
                  <Link
                    href={`/services/${s.slug}`}
                    className="block font-medium text-slate-700 hover:text-blue-600 hover:underline"
                  >
                    {s.name} (all areas) →
                  </Link>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-6">
                <p className="font-semibold text-slate-900">Tony Automotive</p>
                <p className="mt-2 text-sm text-slate-600">
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Hours: Call to confirm
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-4 inline-block font-semibold text-blue-700 hover:underline"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-100 bg-slate-50 py-14 md:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            {s.name} FAQs
          </h2>
          <p className="mt-3 text-slate-600">
            Common questions from {l.name} drivers about {s.noun}.
          </p>
          <div className="mt-8 max-w-3xl">
            <FaqList faqs={s.faqs} />
          </div>
        </Container>
      </section>

      <CtaBand heading={`Need ${s.name.toLowerCase()} in ${l.name}?`} />
    </div>
  );
}
