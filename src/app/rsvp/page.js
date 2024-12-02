'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Rsvp() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // This effect will run only on the client side
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen text-taupe">
      {/* Header */}
      <header className="bg-champagne bg-opacity-40 py-8 text-center">
        <h1 className="text-4xl font-serif font-bold text-taupe mb-4">RSVP to Celebrate With Us!</h1>
        <p className="text-xl max-w-2xl mx-auto px-4">
          Please fill out the form below to let us know if you will be joining our special day.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        {/* Google Form Embed Section */}
        <section className="mb-12">
          {isLoaded ? (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Wedding RSVP Form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSc3zK8xetqXC6ZWFJ3sL8Isc7qSv8jzxl3uKV6BKsmKsSXJ3A/viewform?usp=sf_link"
                width="100%"
                height="700"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg shadow-md"
              >
                Loading…
              </iframe>
            </div>
          ) : (
            <div className="h-[700px] flex items-center justify-center bg-warm-gray/10 rounded-lg shadow-md">
              <p className="text-lg text-taupe">Loading RSVP form...</p>
            </div>
          )}
        </section>

        {/* Additional Information */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-serif mb-4">Need More Information?</h2>
          <p className="mb-6">
            If you have any questions or need additional information, please don not hesitate to contact us.
          </p>
          <Button asChild variant="outline" className="border-taupe text-taupe hover:bg-taupe hover:text-white">
            <Link href="/information">View Event Details</Link>
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-champagne bg-opacity-40 py-8">
        <div className="container mx-auto text-center">
          <nav className="mb-4">
            <ul className="flex justify-center space-x-4">
              <li><Link href="/" className="hover:text-rose-quartz">Home</Link></li>
              <li><Link href="/information" className="hover:text-rose-quartz">Information</Link></li>
              <li><Link href="/wishlist" className="hover:text-rose-quartz">Wishlist</Link></li>
            </ul>
          </nav>
          <p>
            For any questions, please contact us at{' '}
            <a href="mailto:emma.and.james@example.com" className="underline hover:text-rose-quartz">
              emma.and.james@example.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
