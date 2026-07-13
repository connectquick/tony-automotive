import type { Metadata } from "next";
import { BUSINESS, type Faq } from "@/lib/site";

const BASE = BUSINESS.url;

// Build a Metadata object with sensible OpenGraph + canonical defaults.
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string; // e.g. "/services/brake-repair"
  keywords?: string[];
}): Metadata {
  const url = `${BASE}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: BUSINESS.name,
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}

export function localBusinessJsonLd(extra?: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    url: BUSINESS.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
    areaServed: `${BUSINESS.county}, ${BUSINESS.stateFull}`,
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    ...extra,
  };
}

export function serviceJsonLd(serviceName: string, description: string, area?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    description,
    provider: { "@type": "AutoRepair", name: BUSINESS.name, telephone: BUSINESS.phone },
    areaServed: area ?? `${BUSINESS.county}, ${BUSINESS.stateFull}`,
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BASE}${it.path}`,
    })),
  };
}

// Convenience component-friendly serializer.
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data);
}
