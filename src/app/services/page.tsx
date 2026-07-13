import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Auto Repair Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional auto repair services for all makes and models in Gaithersburg, MD
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Auto Repair Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Tony Automotive, we provide top-quality auto repair services with honest pricing and reliable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Brake Repair & Service</h3>
              <p className="text-gray-600 mb-4">
                Complete brake inspection, repair, and replacement services for all vehicle types. We ensure your safety with quality brake components and professional installation.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Brake pad and rotor replacement</li>
                <li>Brake fluid flush and replacement</li>
                <li>Brake system inspection</li>
                <li>Emergency brake repair</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Oil Change & Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Regular oil changes with quality filters and synthetic oils to keep your engine running smoothly. We also provide comprehensive maintenance services.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Regular oil changes</li>
                <li>Filter replacements</li>
                <li>Fluid level checks</li>
                <li>Performance tune-ups</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tire Services</h3>
              <p className="text-gray-600 mb-4">
                Complete tire services including rotation, balancing, alignment, and replacement to ensure optimal performance and safety.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Tire rotation and balancing</li>
                <li>Alignment services</li>
                <li>Tire replacement</li>
                <li>Tire inspection and safety checks</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Emergency Repair</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency roadside assistance and immediate repair services for vehicle breakdowns and urgent repairs.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>24/7 roadside assistance</li>
                <li>Emergency jump starts</li>
                <li>Flat tire repairs</li>
                <li>Vehicle breakdown services</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border border-blue-100 mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Tony Automotive?</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Over 20 years of experience in auto repair</li>
              <li>Certified and trained technicians</li>
              <li>State-of-the-art equipment and facilities</li>
              <li>Honest pricing with no hidden fees</li>
              <li>Comprehensive warranty on all services</li>
              <li>Convenient location in Gaithersburg, MD</li>
            </ul>
          </div>

          <div className="text-center">
            <Button asChild variant="default" size="lg" className="py-6 text-lg">
              <Link href="/contact">Book an Appointment Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}