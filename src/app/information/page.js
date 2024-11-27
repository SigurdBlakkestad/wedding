import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Utensils, Hotel, Phone, Mail } from 'lucide-react'

export default function InformationPage() {
  return (
    <div className="min-h-screen bg-blush-pink bg-opacity-20 text-gray-800">
<div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 
                rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] 
                sm:w-[72.1875rem]'
            />
          </div>
      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Everything You Need to Know</h1>
        <p className="text-xl">Here are the details to make your experience smooth and memorable!</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        {/* Dress Code Section */}
        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Dress Code</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">The dress code for our wedding is semi-formal. We kindly ask that men wear suits and women wear cocktail dresses or elegant separates.</p>
            <div className="flex justify-center space-x-4">
              <Image src="/placeholder.svg?height=200&width=150" alt="Men's Attire Example" width={150} height={200} className="rounded-md" />
              <Image src="/placeholder.svg?height=200&width=150" alt="Women's Attire Example" width={150} height={200} className="rounded-md" />
            </div>
          </CardContent>
        </Card>

        {/* Food Section */}
        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Food</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">We will be serving a plated dinner with options for meat, fish, and vegetarian dishes. Please inform us of any dietary restrictions when you RSVP.</p>
            <Button asChild>
              <Link href="/rsvp">RSVP and Inform Dietary Restrictions</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Accommodation Section */}
        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Accommodation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Hotel className="mr-2 h-5 w-5 text-gold" />
                <div>
                  <h3 className="font-semibold">Rosewood Hotel</h3>
                  <p>123 Main St, Anytown | <a href="tel:+11234567890" className="text-gold hover:underline">+1 (123) 456-7890</a></p>
                  <a href="https://www.rosewoodhotel.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Visit Website</a>
                </div>
              </li>
              <li className="flex items-start">
                <Hotel className="mr-2 h-5 w-5 text-gold" />
                <div>
                  <h3 className="font-semibold">Blissful Bed & Breakfast</h3>
                  <p>456 Oak Rd, Anytown | <a href="tel:+10987654321" className="text-gold hover:underline">+1 (098) 765-4321</a></p>
                  <a href="https://www.blissfulbnb.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Visit Website</a>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Toastmaster Contact Info Section */}
        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Toastmaster Contact Info</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gold" />
                <span>John Smith (Best Man): <a href="tel:+11234567890" className="text-gold hover:underline">+1 (123) 456-7890</a></span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gold" />
                <span>Sarah Johnson (Maid of Honor): <a href="mailto:sarah@example.com" className="text-gold hover:underline">sarah@example.com</a></span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Location Details Section */}
        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Location Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start mb-4">
              <MapPin className="mr-2 h-5 w-5 text-gold" />
              <div>
                <h3 className="font-semibold">Rosewood Gardens</h3>
                <p>123 Blossom Street, Anytown, ST 12345</p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629814729721!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button asChild>
            <a href="https://goo.gl/maps/your-venue-link" target="_blank" rel="noopener noreferrer">See the Venue Map</a>
          </Button>
          <Button asChild variant="outline">
            <Link href="#toastmaster-contact">Contact the Toastmasters</Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-sage-green text-white py-8">
        <div className="container mx-auto text-center">
          <nav>
            <ul className="flex justify-center space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/rsvp" className="hover:underline">RSVP</Link></li>
              <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

