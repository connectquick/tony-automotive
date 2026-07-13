import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/site/container";
import PageHero from "@/components/site/page-hero";
import JsonLd from "@/components/site/json-ld";
import CtaBand from "@/components/site/cta";
import { posts, formatDate } from "@/lib/posts";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `Auto Repair Tips & Advice | ${BUSINESS.name} Blog`,
  description:
    "Honest, local auto repair advice for Montgomery County drivers — brakes, oil changes, tires, seasonal care, and more from Tony Automotive in Gaithersburg, MD.",
  path: "/blog",
  keywords: [
    "auto repair blog",
    "car maintenance tips Montgomery County",
    "Gaithersburg auto repair advice",
  ],
});

// Newest first. ISO date strings sort lexicographically = chronologically.
const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <PageHero
        title="Auto Repair Tips & Advice"
        subtitle="Straight talk on keeping your car safe and reliable — written for drivers across Gaithersburg and Montgomery County."
      >
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          Call {BUSINESS.phone}
        </a>
      </PageHero>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-lg border border-slate-200 p-6 transition hover:shadow-md"
              >
                <time
                  dateTime={post.date}
                  className="text-xs font-medium uppercase tracking-wide text-blue-600"
                >
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-blue-700">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </div>
  );
}
