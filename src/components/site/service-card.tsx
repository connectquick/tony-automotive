import Link from "next/link";
import { type Service, serviceImage } from "@/lib/site";

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
      className="group block overflow-hidden rounded-lg border border-slate-200 transition hover:shadow-md"
    >
      <div className="aspect-[3/2] overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={serviceImage(service.slug)}
          alt={`${service.name} at Tony Automotive`}
          className="h-full w-full object-cover transition group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
        <p className="mt-2 text-sm text-slate-600">{service.short}</p>
        <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
          Learn more &rarr;
        </span>
      </div>
    </Link>
  );
}
