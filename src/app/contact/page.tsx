import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Tony Automotive</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Visit us at 8041 Queenair Drive Suite 2 in Gaithersburg, MD
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch With Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to help with all your auto repair needs. Contact us for appointments, questions, or emergency services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
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

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-gray-800 mb-2">Emergency Services</h4>
                <p className="text-gray-600 mb-4">Need immediate assistance? Call us at 301-401-6669 for 24/7 emergency roadside support.</p>
                <Button asChild variant="default" className="w-full">
                  <a href="tel:3014016669">Call Now</a>
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="brake">Brake Repair</option>
                    <option value="oil">Oil Change</option>
                    <option value="tire">Tire Services</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="suspension">Suspension Repair</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your vehicle needs..."
                  ></textarea>
                </div>
                
                <Button type="submit" variant="default" size="lg" className="w-full py-6">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located at 8041 Queenair Drive Suite 2 in Gaithersburg, MD
            </p>
          </div>
          
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center mb-8">
            <span className="text-gray-500">Google Maps Embed</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">By Car</h3>
              <p className="text-gray-600">Take I-270 to MD-124 West, then follow signs to Gaithersburg</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">By Public Transit</h3>
              <p className="text-gray-600">Closest stops near Queenair Drive and Rickenbacker Dr</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Parking</h3>
              <p className="text-gray-600">On-street parking available, shop has designated customer spots</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}