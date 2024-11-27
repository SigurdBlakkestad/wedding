import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, HeartIcon, MapPinIcon } from 'lucide-react'
import { CountdownTimer } from '@/components/countdown'


export default function WeddingHomePage() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-blush-pink bg-opacity-20 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-800">Ine & Even</h1>
          <p className="text-xl mt-2">June 15, 2024</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Emma and James"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-800">
            <h2 className="text-5xl font-serif mb-4">Welcome to Our Wedding</h2>
            <p className="text-2xl">We can not wait to celebrate with you!</p>
          </div>
        </div>
      </section>



      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        {/* Date & Venue Section */}
        <section id="date-venue" className="mb-16">
          <h3 className="text-3xl font-serif text-center mb-8">Date & Venue</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-4">
              <CalendarIcon className="w-8 h-8 text-gold" />
              <div>
                <h4 className="font-semibold">Date</h4>
                <p>June 15, 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPinIcon className="w-8 h-8 text-gold" />
              <div>
                <h4 className="font-semibold">Venue</h4>
                <p>Rosewood Gardens</p>
                <p>123 Blossom Street, Anytown</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" className="mb-16">
          <h3 className="text-3xl font-serif text-center mb-8">Our Story</h3>
          <div className="bg-blush-pink bg-opacity-20 p-8 rounded-lg">
            <p className="text-center max-w-2xl mx-auto">
              Emma and James met in college during a study abroad program in Paris.
              Their shared love for art, travel, and croissants brought them together,
              and they have been inseparable ever since. After 5 years of adventures
              together, James proposed at the top of the Eiffel Tower, bringing their
              story full circle.
            </p>
          </div>
        </section>

        {/* RSVP Section */}
        <section id="rsvp" className="text-center">
          <h3 className="text-3xl font-serif mb-8">RSVP</h3>
          <Link
            href="/rsvp"
            className="inline-block bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Respond Now
          </Link>
        </section>
      </main>

      {/* Footer with Countdown */}
      <footer className="bg-blush-pink bg-opacity-40 text-gray-800 py-8">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-serif mb-4">Countdown to Our Big Day</h4>
          <CountdownTimer targetDate={new Date('2025-08-24T00:00:00')} />
        </div>
      </footer>
    </div>
  )
}

