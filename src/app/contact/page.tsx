import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Container from "@/components/site/container";
import PageHero from "@/components/site/page-hero";
import CtaBand from "@/components/site/cta";
import JsonLd from "@/components/site/json-ld";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Tony Automotive in Gaithersburg, MD. Call 301-401-6669 for auto repair, directions to 8041 Queenair Drive, and to confirm current shop hours.",
  path: "/contact",
});

const fullAddress = `${BUSINESS.address}, ${BUSINESS.city}, ${BUSINESS.state} ${BUSINESS.zip}`;
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BUSINESS.name}, ${fullAddress}`
)}&output=embed`;

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        title="Contact Tony Automotive"
        subtitle={`Find us at ${BUSINESS.address} in ${BUSINESS.city}, ${BUSINESS.state}. Call ahead and we'll get you scheduled.`}
      >
        <Button asChild variant="secondary" size="lg">
          <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
        </Button>
      </PageHero>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Details */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Get in touch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Have a question or need to schedule a repair? Give us a call and
                we'll be glad to help.
              </p>

              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-lg font-semibold text-blue-600 hover:underline"
                    >
                      {BUSINESS.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-base text-slate-800 hover:text-blue-600"
                    >
                      {BUSINESS.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Address
                  </dt>
                  <dd className="mt-1 text-base not-italic text-slate-800">
                    <address className="not-italic">
                      {BUSINESS.address}
                      <br />
                      {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                    </address>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Hours
                  </dt>
                  <dd className="mt-1 text-base text-slate-800">
                    Hours can vary — please call{" "}
                    <a
                      href={BUSINESS.phoneHref}
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      {BUSINESS.phone}
                    </a>{" "}
                    to confirm current hours before you stop by.
                  </dd>
                </div>
              </dl>

              <div className="mt-8">
                <Button asChild size="lg">
                  <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Find us
              </h2>
              <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
                <iframe
                  title={`Map to ${BUSINESS.name} in ${BUSINESS.city}, ${BUSINESS.state}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full md:h-96"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </main>
  );
}
