import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Auto Repair in Gaithersburg, MD</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Brake repair, oil changes, tire services, emergency auto repair, and suspension repair
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8 rounded-full">
              <Link href="/contact">Book an Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/20 text-lg py-6 px-8 rounded-full">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Tony Automotive</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located at 8041 Queenair Drive Suite 2 in Gaithersburg, MD, we provide reliable auto repair services for all makes and models.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Trusted Local Auto Shop</h3>
              <p className="text-gray-600 mb-4">
                For over 20 years, Tony Automotive has been serving the Gaithersburg community with quality auto repair services. Our certified technicians use state-of-the-art equipment to ensure your vehicle runs smoothly.
              </p>
              <p className="text-gray-600 mb-4">
                We specialize in brake repair, oil changes, tire services, emergency auto repair, and suspension repair. Whether you need routine maintenance or major repairs, we're here to help.
              </p>
              <div className="mt-6">
                <Button asChild variant="default" className="text-lg py-3 px-6">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Shop Interior Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive auto repair services for all your vehicle needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Brake Repair</h3>
              <p className="text-gray-600">
                Complete brake inspection, repair, and replacement services for all vehicle types.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Oil Changes</h3>
              <p className="text-gray-600">
                Regular oil changes with quality filters and synthetic oils for optimal engine performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tire Services</h3>
              <p className="text-gray-600">
                Tire rotation, balancing, alignment, and replacement services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Emergency Repair</h3>
              <p className="text-gray-600">
                24/7 emergency roadside assistance and immediate repair services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Suspension Repair</h3>
              <p className="text-gray-600">
                Complete suspension system inspection and repair for better handling.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">General Maintenance</h3>
              <p className="text-gray-600">
                Routine maintenance to keep your vehicle running smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <p className="text-gray-600 italic mb-4">"Tony Automotive fixed my brake problem quickly and affordably. Great service!"</p>
              <p className="font-semibold text-gray-800">- Sarah M.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <p className="text-gray-600 italic mb-4">"Professional, honest, and reliable. My car has never run better."</p>
              <p className="font-semibold text-gray-800">- Michael T.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Tony Automotive</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit us at 8041 Queenair Drive Suite 2 in Gaithersburg, MD
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600"><a href="tel:3014016669" className="hover:text-blue-600">301-401-6669</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">8041 Queenair Drive Suite 2<br />Gaithersburg, MD 20879</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 8:00 AM - 1:00 PM<br />Closed Sunday</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild variant="default" size="lg" className="w-full py-6 text-lg">
                  <Link href="/contact">Book an Appointment</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Google Maps Embed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}