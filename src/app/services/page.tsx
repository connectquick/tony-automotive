import { services } from "@/lib/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Container from "@/components/site/container";
import PageHero from "@/components/site/page-hero";
import ServiceCard from "@/components/site/service-card";
import CtaBand from "@/components/site/cta";
import JsonLd from "@/components/site/json-ld";

export const metadata = buildMetadata({
  title: "Auto Repair Services",
  description:
    "Full-service auto repair in Gaithersburg, MD: brakes, oil changes, tires, engine and transmission repair, AC, diagnostics, and more for all makes and models.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        title="Auto Repair Services"
        subtitle="Comprehensive repair and maintenance for every make and model — done right, explained clearly, and backed by honest estimates."
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </main>
  );
}
