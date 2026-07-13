import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/site";
import Container from "@/components/site/container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 text-lg font-bold text-slate-900 sm:text-xl"
        >
          Tony Automotive
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-6 overflow-x-auto md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="shrink-0">
          <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
        </Button>
      </Container>
      <nav className="flex items-center gap-5 overflow-x-auto border-t border-slate-100 px-4 py-2 md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
