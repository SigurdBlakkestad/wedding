import Image from 'next/image'
import Link from 'next/link'
import { NavigationMenu } from "@/components/ui/navigation-menu"



export default function WeddingHomePage() {
  return (
    <div className="min-h-screen text-gray-800 overflow-x-hidden w-full relative">
      <NavigationMenu floating={true} />
      <header className="relative z-10 py-8 bg-gradient-to-r from-champagne/30 to-rose-quartz/30 w-full">
        <div className="text-center">
          <h1 className="text-5xl font-light text-gray-800 mb-2">Ine & Even</h1>
          <div className="w-24 h-0.5 bg-gold mx-auto"/>
          <p className="text-xl mt-2 font-light tracking-widest">23. AUGUST 2025</p>
        </div>
      </header>

      {/* Hero Section with negative margin to create overlap */}
      <section className="relative h-[45vh] md:h-[60vh] w-full mt-[-70px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* image */}
          <div className="w-full h-full relative">
            <Image
              src="/images/Austre_moland_farge_crop.png"
              alt="Her ska de giftast!!"
              fill
              sizes="100vw"
              style={{objectFit: 'cover', objectPosition: 'center top'}}
              className="opacity-70" 
              priority
            />
          </div>
        </div>
      </section>


      {/* Main Content */}
      <main className="w-full max-w-[90rem] mx-auto px-4 overflow-hidden">
        <section id="our-story" className="mb-16 relative mt-5">
          <div className="relative z-10">
            <h3 className="text-3xl text-center mb-8">Velkommen til brullypsfest!</h3>
            <div className="p-8">
              <p className="text-center max-w-2xl mx-auto">
              Vi gifter oss 23. august 2025 og ønsker å feire dagen sammen med familie og gode venner. 
              </p>
              <p className="text-center max-w-2xl mx-auto mt-4">
              Vielsen finner sted i Austre Moland kirke kl. 13:00. Etter vielsen blir det feiring utover kvelden i telt på Harvelandsneset med matservering og påfølgende dans. 
              </p>
              <p className="text-center max-w-2xl mx-auto mt-4">
              Kveldens toastmastere er Sigurd Blakkestad og Julie Møller. Ønsker du å bidra med tale eller annen underholdning kan Julie nås på tlf; +47 41 20 03 60 og Sigurd på; +47 41 49 44 82. 
              </p>
              <p className="text-center max-w-2xl mx-auto mt-4">
              S.u innen 30. April her på nettsiden, håper å se så mange som mulig av dere i August. 
              </p>
              <p className="text-center max-w-2xl mx-auto mt-4">
              Vi gleder oss! 
              </p>
            </div>
          </div>
        </section>

        <section id="rsvp" className="text-center relative">
          <div className="absolute left-0 top-0 transform -translate-y-1/2 w-1/3 max-w-[300px] h-auto z-0 opacity-70">
            <Image
              src="/images/Blomst3.png" 
              alt="Decorative illustration"
              width={360}
              height={300}
              className="object-contain"
            />
          </div>
          
          <div className="relative z-10">
            <Link
              href="/rsvp"
              className="inline-block border-2 border-gray-800 text-gray-800 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-800 hover:text-white transition duration-300"
            >
              S.U
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

