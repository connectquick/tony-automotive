import type { Faq } from "@/lib/site";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div>
      {faqs.map((faq, i) => (
        <details key={i} className="border-b py-4">
          <summary className="cursor-pointer font-medium">{faq.q}</summary>
          <p className="mt-2 text-slate-600">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
