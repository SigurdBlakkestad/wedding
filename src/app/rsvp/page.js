'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { NavigationMenu } from "@/components/ui/navigation-menu"

export default function Rsvp() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // This effect will run only on the client side
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen text-gray-800 overflow-x-hidden">
      <NavigationMenu />
      <header className="py-8 bg-gradient-to-r from-champagne/30 to-rose-quartz/30">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-800 mb-2">RSVP for å feire med oss!</h1>
          <div className="w-24 h-0.5 bg-gold mx-auto"/>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section className="mb-12">
          {isLoaded ? (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Wedding RSVP Form"
                src="https://docs.google.com/forms/d/e/1FAIpQLScphYQj9jBIM_yJ3TA39mvAKv7LNh82vaINaQsLz-vC3gJKLA/viewform?usp=dialog"
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

        <section className="text-center mb-12">
          <h2 className="text-2xl mb-4">Trenger du mer informasjon?</h2>
          <p className="mb-6">
            Hvis du har spørsmål eller trenger mer informasjon, ikke nøl med å kontakte oss.
          </p>
          <Button asChild variant="outline" className="border-taupe text-taupe hover:bg-taupe hover:text-white">
            <Link href="/information">Se arrangementdetaljer</Link>
          </Button>
        </section>
      </main>
    </div>
  )
}
