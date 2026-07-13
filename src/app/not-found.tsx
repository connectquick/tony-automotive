import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/site/page-hero";
import CtaBand from "@/components/site/cta";
import Container from "@/components/site/container";
import { BUSINESS } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Page not found"
        subtitle="Sorry, we couldn't find the page you were looking for. It may have moved, or the link may be out of date."
      >
        <Button asChild variant="secondary" size="lg">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
          <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
        </Button>
      </PageHero>

      <section className="py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Let&apos;s get you back on track
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Try one of these popular pages, or call {BUSINESS.name} and we&apos;ll
            point you in the right direction.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="default" size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/service-areas">Service Areas</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand />
    </div>
  );
}
