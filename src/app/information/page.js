import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Utensils, Hotel, Phone, Mail } from 'lucide-react'

export default function InformationPage() {
  return (
    <div className="min-h-screen text-taupe">
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
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Alt Du Trenger å Vite</h1>
        <p className="text-xl">Her er detaljene for å gjøre opplevelsen din smidig og minneverdig!</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        {/* Dress Code Section */}
        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Antrekk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Antrekkskoden for bryllupet vårt er &ldquo;ranch fancy&rdquo;. Tenk vestlig-inspirert festantrekk - menn kan ha på seg fine jeans med en pen skjorte, boots og cowboyhatt, mens kvinner kan ha på seg kjoler eller skjørt kombinert med boots og vestlig-inspirerte accessoirer.</p>
            <div className="flex justify-center space-x-4">
              <Image 
                src="https://i.pinimg.com/550x/61/93/43/6193431a85498b976fffac5a23c7ea07.jpg"
                alt="Men's Ranch Fancy Attire Example" 
                width={200} 
                height={150} 
                className="rounded-md"
              />
              <Image 
                src="https://tenersboots.com/media/catalog/product/cache/9f6c06bcfa5f0fbf48667da3a0a0cadc/9/0/9030594646402996885-2.jpg" 
                alt="Women's Ranch Fancy Attire Example" 
                width={150} 
                height={200} 
                className="rounded-md" 
              />
            </div>
          </CardContent>
        </Card>

        {/* Food Section */}
        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Mat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Vi serverer en treretters middag med valg mellom kjøtt, fisk og vegetar. Vennligst informer oss om eventuelle matallergier eller diettrestriksjoner når du svarer på invitasjonen.</p>
            <Button asChild>
              <Link href="/rsvp">RSVP og informer om matpreferanser</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Accommodation Section */}
        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Overnatting</CardTitle>
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
            <CardTitle className="text-2xl font-serif">Kontaktinformasjon Toastmaster</CardTitle>
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
            <CardTitle className="text-2xl font-serif">Veibeskrivelse</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start mb-4">
              <MapPin className="mr-2 h-5 w-5 text-gold" />
              <div>
                <h3 className="font-semibold">Harvelandsneset</h3>
                <p>Brømnesveien 50, 4849 Arendal</p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                title="Harvelandsneset"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2096.8368!2d8.823170!3d58.543406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4647c4b8b8b8b8b9%3A0x1b8b8b8b8b8b8b8b!2sHarvelandsneset!5e0!3m2!1sen!2sno!4v1620000000000!5m2!1sen!2sno"
                width="600"
                height="450"
                style={{border:0}}
                allowFullScreen={false}
                loading="lazy"
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button asChild>
            <a href="https://www.google.com/maps?q=Brømnesveien+50,+4849+Arendal" target="_blank" rel="noopener noreferrer">Se Veibeskrivelse</a>
          </Button>
          <Button asChild variant="outline">
            <Link href="#toastmaster-contact">Kontakt Toastmaster</Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-sage-green text-white py-8">
        <div className="container mx-auto text-center">
          <nav>
            <ul className="flex justify-center space-x-4">
              <li><Link href="/" className="hover:underline">Hjem</Link></li>
              <li><Link href="/rsvp" className="hover:underline">RSVP</Link></li>
              <li><Link href="/gallery" className="hover:underline">Galleri</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

