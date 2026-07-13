import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/site";
import Container from "@/components/site/container";

export default function CtaBand({ heading }: { heading?: string }) {
  return (
    <section className="bg-blue-600 py-12 text-center text-white">
      <Container>
        <h2 className="text-2xl font-bold md:text-3xl">
          {heading ?? "Ready to get back on the road?"}
        </h2>
        <p className="mt-3 text-base text-blue-100">
          Call {BUSINESS.name} today at {BUSINESS.phone} for honest,
          dealer-quality service.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild variant="secondary" size="lg">
            <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
