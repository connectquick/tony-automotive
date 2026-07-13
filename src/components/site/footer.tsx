import Link from "next/link";
import { BUSINESS, services, locations } from "@/lib/site";
import Container from "@/components/site/container";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white">{BUSINESS.name}</h3>
            <address className="mt-3 not-italic text-sm leading-relaxed text-slate-300">
              {BUSINESS.address}
              <br />
              {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
            </address>
            <a
              href={BUSINESS.phoneHref}
              className="mt-3 inline-block text-sm font-semibold text-white hover:text-blue-300"
            >
              {BUSINESS.phone}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {services.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Service Areas
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/service-areas/${location.slug}`}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
