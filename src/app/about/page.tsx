import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Tony Automotive</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional auto repair services in Gaithersburg, MD since 2003
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For over 20 years, Tony Automotive has been serving the Gaithersburg community with quality auto repair services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Auto Repair Since 2003</h3>
              <p className="text-gray-600 mb-4">
                Tony Automotive started as a small family-owned shop and has grown into a trusted auto repair service in Gaithersburg, MD. Our commitment to quality, honesty, and customer satisfaction has made us the go-to choice for vehicle maintenance and repairs.
              </p>
              <p className="text-gray-600 mb-4">
                With over two decades of experience, our certified technicians are equipped with state-of-the-art tools and equipment to handle all types of auto repair services for domestic and foreign vehicles.
              </p>
              <div className="mt-6">
                <Button asChild variant="default" size="lg" className="py-3 px-6">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Shop Interior Image</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-5.618 2.33M2.5 17h21m-2.5-10h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Certified Technicians</h3>
              <p className="text-gray-600">All our mechanics are certified and trained in the latest auto repair techniques.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Parts</h3>
              <p className="text-gray-600">We use only quality parts and components for all our repairs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all our services and repairs.</p>
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
              <li>24/7 emergency roadside assistance available</li>
            </ul>
          </div>

          <div className="text-center">
            <Button asChild variant="default" size="lg" className="py-6 text-lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}