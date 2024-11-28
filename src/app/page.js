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
      <div className="absolute inset-0 flex">
          {/* Left image */}
          <div className="w-1/4 h-full relative hidden md:block">
            <Image
              src="/images/ine-og-even.jpeg"
              alt="Romantic scene 1"
              fill
              style={{objectFit: 'cover'}}
              className="opacity-70"
            />
          </div>
          {/* Center image */}
          <div className="flex-grow h-full relative">
            <Image
              src="/images/ine-og-even.jpeg"
              alt="Emma and James embracing in a romantic setting"
              fill
              style={{objectFit: 'cover'}}
              className="opacity-70"
              priority
            />
          </div>
          {/* Right image */}
          <div className="w-1/4 h-full relative hidden md:block">
            <Image
              src="/images/ine-og-even.jpeg"
              alt="Romantic scene 2"
              fill
              style={{objectFit: 'cover'}}
              className="opacity-70"
            />
          </div>
        </div>

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
          <h3 className="text-3xl font-serif text-center mb-8">Tid & Sted</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-4">
              <CalendarIcon className="w-8 h-8 text-gold" />
              <div>
                <h4 className="font-semibold">Tid</h4>
                <p>August 24, 2025</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPinIcon className="w-8 h-8 text-gold" />
              <div>
                <h4 className="font-semibold">Sted</h4>
                <p>Moland</p>
                <p>123 Molandsvannet, Agder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" className="mb-16">
  <h3 className="text-3xl font-serif text-center mb-8">Vår Historie</h3>
  <div className="bg-blush-pink bg-opacity-20 p-8 rounded-lg">
    <p className="text-center max-w-2xl mx-auto">
      Det hele startet i Arendal på ungdomsskolen. Even var den populære, kule gutten som alle la merke til, mens Ine var den jordnære og smilende jenta som aldri trodde hun kunne få ham. Men Even hadde fått øye på Ine, og med besluttsomhet la han en treårsplan for å vinne hjertet hennes.
    </p>
    <p className="text-center max-w-2xl mx-auto mt-4">
      Planen lyktes, og derfra begynte deres reise sammen. Even fulgte sin lidenskap for sykling, mens Ine utforsket flere studieretninger. På veien bygde de et liv sammen, først i Tønsberg, så i Bergen, før de til slutt vendte tilbake til røttene sine i Arendal.
    </p>
    <p className="text-center max-w-2xl mx-auto mt-4">
      Nå har de kjøpt hus og slått seg til ro, med Even mye på sjøen og Ine i praksis. De er klare for sitt neste store eventyr: å gifte seg. De gleder seg til å feire kjærligheten sammen med dere alle!
    </p>
  </div>
</section>


        {/* RSVP Section */}
        <section id="rsvp" className="text-center">
          <h3 className="text-3xl font-serif mb-8">RSVP</h3>
          <Link
            href="/rsvp"
            className="inline-block bg-blue-400 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Svar her
          </Link>
        </section>
      </main>

      {/* Footer with Countdown */}
      <footer className="bg-blush-pink bg-opacity-40 text-gray-800 py-8">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-serif mb-4">Nedtelling til den store dagen</h4>
          <CountdownTimer targetDate={new Date('2025-08-24T00:00:00')} />
        </div>
      </footer>
    </div>
  )
}

