import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from 'lucide-react'
import { NavigationMenu } from "@/components/ui/navigation-menu"

export default function InformationPage() {
  return (
    <div className="min-h-screen text-gray-800 overflow-x-hidden">
      <NavigationMenu />
      <header className="py-8 bg-gradient-to-r from-champagne/30 to-rose-quartz/30">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-800 mb-2">Alt Du Trenger å Vite</h1>
          <div className="w-24 h-0.5 bg-gold mx-auto"/>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl">Transport/overnatting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
            For dere som kommer langveisfra, er det enklest å fly til Kjevik i Kristiansand eller Torp i Sandefjord. Det går busser langs E-18 som stopper utenfor Arendal. For de som trenger, kan vi være behjelpelige med transport herfra.
            </p>
            <p className="mb-4">
            Dersom du har behov for overnatting, er det kort vei til Arendal sentrum med flere hoteller. Vi har også noen sengeplasser ledig på Tromøya. Ved spørsmål, kontakt oss på tlf.; 41622363 (Ine) eller 95469529 (Even)  
            </p>

          </CardContent>
        </Card>

        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl">Transport og parkering på selve dagen</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
            Det er dessverre dårlig bussforbindelse, så vi anbefaler å benytte bil. Det er gode parkeringsmuligheter ved kirken og det tar ca. 10 min. i bil til Harvelandsneset, der festen finner sted. Parkering på Harvelandsneset informeres om etter vielsen på selve dagen. Grunnet noe begrenset biloppstillingsplass, ber vi om at man forsøker å samkjøre så langt det lar seg gjøre. 
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl">Kleskode</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
            Sommerlig og pent/dress. 
            </p>
            <p className="mb-4">
              Kle dere ellers etter vær og vind og ta gjerne med en varm strikkegenser til kvelden.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl">Ønskeliste</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
            Vi har fått litt spørsmål rundt hva vi ønsker oss til bryllupet. Even har lenge ønsket seg penservise og annet dekketøy mens Ine har litt ekstra lyst på noe nytt til verktøysamlingen. Ønsker du å gi en gave, har vi satt sammen en liste med dette og noen andre saker og ting i lenken under. 
            </p>
            <a href="https://onskelister.no/liste?id=I5etdToMkaWVqx2fyeNv" className="text-gold hover:underline">Ønskeliste</a>
            <br />
            <a href="https://www.tilbords.no/min-side/onskelister/168285/" className="text-gold hover:underline">Ønskeliste tilbords</a>

          </CardContent>
        </Card>

       
        <Card className="mb-8 scroll-mt-32" id="toastmaster-contact">
          <CardHeader>
            <CardTitle className="text-2xl">Kontaktinformasjon Toastmaster</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gold" />
                <span>Sigurd Blakkestad: <a href="tel:+4741494482" className="text-gold hover:underline">+47 414 94 482</a> | <a href="mailto:sigurdbla@gmail.com" className="text-gold hover:underline">sigurdbla@gmail.com</a></span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gold" />
                <span>Julie Blakkestad: <a href="tel:+4741200360" className="text-gold hover:underline">+47 412 00 360</a> | <a href="mailto:juliem99@live.no" className="text-gold hover:underline">juliem99@live.no</a></span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="text-2xl">Veibeskrivelse</CardTitle>
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

        <div className="flex justify-center space-x-4 mb-8">
          <Button asChild>
            <a href="https://www.google.com/maps?q=Brømnesveien+50,+4849+Arendal" target="_blank" rel="noopener noreferrer">Se Veibeskrivelse</a>
          </Button>
          <Button asChild variant="outline">
            <Link href="#toastmaster-contact">Kontakt Toastmaster</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

