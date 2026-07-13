import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/site/container";
import PageHero from "@/components/site/page-hero";
import JsonLd from "@/components/site/json-ld";
import CtaBand from "@/components/site/cta";
import FaqList from "@/components/site/faq";
import { getPost, posts, formatDate } from "@/lib/posts";
import { services, BUSINESS } from "@/lib/site";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return buildMetadata({
      title: `Article Not Found | ${BUSINESS.name}`,
      description: "The article you are looking for could not be found.",
      path: `/blog/${slug}`,
    });
  }
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: [post.keyword],
  });
}

// Find services relevant to a post by matching distinctive words from the
// service name/noun/slug against the post's title, keyword, and excerpt.
// Padded to at least three so the section always reads well.
const STOP = new Set([
  "repair", "service", "services", "system", "replacement",
  "auto", "help", "maryland", "state", "check", "light",
]);
function relatedServices(post: NonNullable<ReturnType<typeof getPost>>) {
  const haystack = `${post.title} ${post.keyword} ${post.excerpt}`.toLowerCase();
  const matches = services.filter((s) => {
    const words = `${s.slug.replace(/-/g, " ")} ${s.name} ${s.noun}`
      .toLowerCase()
      .split(/[^a-z]+/)
      .filter((w) => w.length > 3 && !STOP.has(w));
    return words.some((w) => haystack.includes(w));
  });
  const chosen = matches.slice(0, 4);
  for (const s of services) {
    if (chosen.length >= 3) break;
    if (!chosen.includes(s)) chosen.push(s);
  }
  return chosen;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedServices(post);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    keywords: post.keyword,
    mainEntityOfPage: `${BUSINESS.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.url },
    publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.url },
  };
  const breadcrumbLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);
  const jsonLdData: unknown[] = [articleLd, breadcrumbLd];
  if (post.faqs && post.faqs.length) jsonLdData.push(faqJsonLd(post.faqs));

  return (
    <div className="min-h-screen">
      <JsonLd data={jsonLdData} />

      <PageHero title={post.title} subtitle={post.excerpt} />

      <article className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700">{post.title}</li>
            </ol>
          </nav>

          <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="text-slate-400"> &middot; {post.city}</span>
          </p>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-lg bg-slate-50 p-6 text-center">
            <p className="text-lg font-semibold text-slate-900">
              Questions about your vehicle?
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Talk to {BUSINESS.name} in Gaithersburg for an honest answer.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              Call {BUSINESS.phone}
            </a>
          </div>

          {post.faqs && post.faqs.length ? (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-4">
                <FaqList faqs={post.faqs} />
              </div>
            </section>
          ) : null}

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">Related Services</h2>
            <p className="mt-2 text-sm text-slate-600">
              How {BUSINESS.name} can help with what you just read about.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block rounded-lg border border-slate-200 p-4 transition hover:border-blue-300 hover:shadow-sm"
                  >
                    <span className="font-semibold text-slate-900 group-hover:text-blue-700">
                      {s.name}
                    </span>
                    <span className="mt-1 block text-sm text-slate-600">
                      {s.short}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              <Link
                href="/blog"
                className="font-medium text-blue-600 hover:underline"
              >
                &larr; Back to all articles
              </Link>
            </p>
          </section>
        </Container>
      </article>

      <CtaBand />
    </div>
  );
}
