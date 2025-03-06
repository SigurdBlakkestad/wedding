import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, HeartIcon, MapPinIcon } from 'lucide-react'
import { CountdownTimer } from '@/components/countdown'


export default function WeddingHomePage() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* Enhanced Header */}
      <header className="py-8 bg-gradient-to-r from-champagne/30 to-rose-quartz/30">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-serif font-light text-gray-800 mb-2">Ine & Even</h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-4"/>
          <p className="text-xl mt-2 font-light tracking-widest">23. AUGUST 2025</p>
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
            <h2 className="text-5xl font-serif mb-4">Velkommen til Vårt Bryllup</h2>
            <p className="text-2xl">Vi gleder oss til å feire med dere!</p>
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
                <p>23. August 2025</p>
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

        {/* Our Story Section with Background Image */}
        <section id="our-story" className="mb-16 relative">
          <div className="absolute bottom-0 right-0 w-1/2 h-auto z-0 opacity-70">
            <Image
              src="/images/Harveland_farge.png"
              alt="Harveland illustration"
              width={500}
              height={400}
              className="object-contain ml-auto"
            />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-serif text-center mb-8">Vår Historie</h3>
            <div className="p-8">
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
          </div>
        </section>

        {/* RSVP Section with Decorative Image */}
        <section id="rsvp" className="text-center relative">
          {/* Decorative image positioned to overlap between sections */}
          <div className="absolute left-0 top-0 transform -translate-y-1/2 w-1/3 h-auto z-0 opacity-70">
            <Image
              src="/images/Blomst3.png" 
              alt="Decorative illustration"
              width={360}
              height={300}
              className="object-contain"
            />
          </div>
          
          {/* RSVP content with higher z-index to appear above the image */}
          <div className="relative z-10">
            <h3 className="text-3xl font-serif mb-8">RSVP</h3>
            <Link
              href="/rsvp"
              className="inline-block border-2 border-gray-800 text-gray-800 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-800 hover:text-white transition duration-300"
            >
              Svar her
            </Link>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-champagne/40 to-rose-quartz/40 py-12 text-gray-700">
        <div className="container mx-auto text-center px-4">
          <div className="mb-8">
            <h4 className="text-2xl font-serif mb-4">Nedtelling til den store dagen</h4>
            <CountdownTimer targetDate={new Date('2025-08-23T00:00:00')} />
          </div>
          
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6"/>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="font-serif text-lg mb-3">Kontakt</h5>
              <p className="text-sm">
                <a href="mailto:even@båt.com" className="hover:text-gold transition-colors">
                  even@båt.com
                </a>
              </p>
              <p className="text-sm">+47 123 45 678</p>
            </div>
            
            <div>
              <h5 className="font-serif text-lg mb-3">Sted</h5>
              <p className="text-sm">Harvelandsneset</p>
              <p className="text-sm">Brømnesveien 50, 4849 Arendal</p>
            </div>
            
            <div>
              <h5 className="font-serif text-lg mb-3">Lenker</h5>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/information" className="hover:text-gold transition-colors">Informasjon</Link></li>
                  <li><Link href="/rsvp" className="hover:text-gold transition-colors">RSVP</Link></li>
                  <li><Link href="/wishlist" className="hover:text-gold transition-colors">Ønskeliste</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          
          <p className="text-xs text-gray-600 mt-8">
            Ine & Even © 2025 | Med kjærlighet til alle våre gjester
          </p>
        </div>
      </footer>
    </div>
  )
}

