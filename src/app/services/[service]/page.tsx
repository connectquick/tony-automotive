import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Container from "@/components/site/container";
import PageHero from "@/components/site/page-hero";
import FaqList from "@/components/site/faq";
import CtaBand from "@/components/site/cta";
import JsonLd from "@/components/site/json-ld";
import { BUSINESS, getService, services, locations } from "@/lib/site";
import {
  buildMetadata,
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} in Gaithersburg, MD`,
    description: service.short,
    path: `/services/${service.slug}`,
    keywords: [
      service.name,
      `${service.name} Gaithersburg`,
      "auto repair Gaithersburg",
    ],
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <div>
      <JsonLd data={serviceJsonLd(service.name, service.description)} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />

      <PageHero
        title={`${service.name} in Gaithersburg, MD`}
        subtitle={service.short}
      >
        <Button asChild variant="secondary" size="lg">
          <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Book an Appointment</Link>
        </Button>
      </PageHero>

      <Container className="py-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/services"
                className="hover:text-blue-600 hover:underline"
              >
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-slate-900">{service.name}</li>
          </ol>
        </nav>
      </Container>

      <section className="pb-4">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Professional {service.noun} in Gaithersburg
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {service.description}
              </p>

              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                What&rsquo;s included
              </h3>
              <ul className="mt-4 space-y-3">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700"
                    >
                      &#10003;
                    </span>
                    <span className="text-slate-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="md:col-span-1">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Need {service.noun} today?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Call {BUSINESS.name} for honest, dealer-quality service in{" "}
                  {BUSINESS.city}, {BUSINESS.state}.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <Button asChild variant="default" size="lg">
                    <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Available across Montgomery County
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            We provide {service.noun} for drivers throughout{" "}
            {BUSINESS.county}. Choose your area to learn more:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/services/${service.slug}/${location.slug}`}
                  className="group flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <span className="font-medium text-slate-900">
                    {service.name} in {location.name}
                  </span>
                  <span className="text-blue-600 group-hover:translate-x-0.5 group-hover:underline">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            {service.name} FAQs
          </h2>
          <div className="mt-6">
            <FaqList faqs={service.faqs} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </div>
  );
}
