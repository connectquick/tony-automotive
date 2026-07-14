import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BUSINESS, services, locations, type Faq } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/seo";
import Container from "@/components/site/container";
import PageHero from "@/components/site/page-hero";
import ServiceCard from "@/components/site/service-card";
import FaqList from "@/components/site/faq";
import CtaBand from "@/components/site/cta";
import JsonLd from "@/components/site/json-ld";

const homeFaqs: Faq[] = [
  {
    q: "Do I need an appointment, or can I walk in?",
    a: `Walk-ins are welcome, but calling ahead at ${BUSINESS.phone} helps us plan your service and get you back on the road faster.`,
  },
  {
    q: "What kinds of vehicles do you work on?",
    a: "We service virtually all domestic and import cars, trucks, and SUVs. Call us with your year, make, and model and we'll confirm.",
  },
  {
    q: "Will I get an estimate before any work is done?",
    a: "Always. We show you exactly what your vehicle needs and get your approval before we begin any repair — no surprises.",
  },
  {
    q: "What areas do you serve?",
    a: `We're based in ${BUSINESS.city} and serve drivers throughout ${BUSINESS.county}, including Rockville, Germantown, Potomac, Olney, and more.`,
  },
];

const whyChooseUs = [
  "Honest, up-front estimates with your approval before any work begins",
  "Dealer-quality repairs on domestic and import vehicles",
  "Free inspections with brake and battery service",
  "Clear explanations so you understand what your car needs and why",
  "Conveniently located off Queenair Drive in Gaithersburg",
  "Friendly, local service for drivers across Montgomery County",
];

export default function Home() {
  return (
    <main>
      <JsonLd data={localBusinessJsonLd()} />

      <PageHero
        title="Professional Auto Repair in Gaithersburg, MD"
        subtitle="Honest, dealer-quality service for every make and model — from brakes and oil changes to engine and transmission repair."
        image="/images/hero-shop.png"
      >
        <Button asChild variant="secondary" size="lg">
          <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white/10"
        >
          <Link href="/services">View Services</Link>
        </Button>
      </PageHero>

      {/* Intro */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Your trusted neighborhood auto shop
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              {BUSINESS.name} is a full-service repair shop in {BUSINESS.city},{" "}
              {BUSINESS.state}, serving drivers across {BUSINESS.county}. Whether
              you need routine maintenance or a major repair, our technicians
              diagnose the real problem, explain your options in plain language,
              and get your approval before any work begins. You'll find us at{" "}
              {BUSINESS.address} in {BUSINESS.city}.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Services */}
      <section className="bg-slate-50 py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Our Services
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Comprehensive auto repair and maintenance for all makes and models.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Serving Montgomery County */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Serving {BUSINESS.county}
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Convenient auto repair for drivers throughout the area. Find your
              community below.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="rounded-lg border border-slate-200 px-4 py-4 text-center text-sm font-medium text-slate-800 transition hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-slate-50 py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Why drivers choose {BUSINESS.name}
              </h2>
              <p className="mt-4 text-base text-slate-600">
                We built our shop on honest work and clear communication. Here's
                what you can expect every time you visit.
              </p>
            </div>
            <ul className="space-y-3">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
                  >
                    ✓
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqList faqs={homeFaqs} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </main>
  );
}
