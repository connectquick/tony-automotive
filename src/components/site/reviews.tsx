import { GOOGLE_RATING, googleReviews } from "@/lib/site";
import Container from "@/components/site/container";

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span
      aria-label={`${rating} out of 5 stars`}
      className={`text-amber-400 ${className}`}
    >
      {"★".repeat(Math.round(rating))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            What our customers say
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-base text-slate-600">
            <Stars rating={GOOGLE_RATING.value} className="text-lg" />
            <span className="font-semibold text-slate-900">{GOOGLE_RATING.value}</span>
            <span>
              rating from {GOOGLE_RATING.count} Google reviews
            </span>
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {googleReviews.map((review) => (
            <figure
              key={review.author}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                {review.author}
                <span className="ml-2 font-normal text-slate-500">
                  Google review
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={GOOGLE_RATING.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Read all our reviews on Google →
          </a>
        </div>
      </Container>
    </section>
  );
}
