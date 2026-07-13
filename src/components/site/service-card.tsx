import Link from "next/link";
import type { Service } from "@/lib/site";

export default function ServiceCard({
  service,
  href,
}: {
  service: Service;
  href?: string;
}) {
  return (
    <Link
      href={href ?? `/services/${service.slug}`}
      className="group block rounded-lg border border-slate-200 p-6 transition hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{service.short}</p>
      <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
        Learn more &rarr;
      </span>
    </Link>
  );
}
