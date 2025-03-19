import Image from 'next/image'

export default function ProgramPage() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* Header */}
      <header className="py-8 bg-gradient-to-r from-champagne/30 to-rose-quartz/30">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-800 mb-2">Program for dagen</h1>
          <div className="w-24 h-0.5 bg-gold mx-auto"/>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative py-12 px-4">
        {/* Program content */}
        <div className="max-w-2xl mx-auto relative">
          {/* Decorative flowers */}
          <div className="absolute -left-3 -top-10 w-32 h-auto opacity-70">
            <Image
              src="/images/Blomst1.png"
              alt="Decorative flower 1"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          
          <div className="absolute -right-7 top-1/4 w-28 h-auto opacity-70">
            <Image
              src="/images/Blomst2.png"
              alt="Decorative flower 2"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          
          <div className="absolute -left-4 bottom-[117px] w-36 h-auto opacity-70">
            <Image
              src="/images/Blomst3.png"
              alt="Decorative flower 3"
              width={110}
              height={110}
              className="object-contain"
            />
          </div>

          <div className="p-8 relative z-10">
            <h2 className="text-3xl text-center mb-8">Dagens Program</h2>
            
            <ul className="space-y-6 text-lg">
              <li className="flex items-center space-x-4">
                <span className="font-light">13:00</span>
                <span className="w-2 h-2 bg-gold rounded-full" />
                <span>Vielse i Austre Moland Kirke</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="font-light">14:30</span>
                <span className="w-2 h-2 bg-gold rounded-full" />
                <span>Velkomstdrink og fingermat på Harvelandsneset </span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="font-light">17:00</span>
                <span className="w-2 h-2 bg-gold rounded-full" />
                <span>Middag og fest utover kvelden/natta </span>
              </li>
            </ul>

            <p className="text-center mt-12 text-sm italic">
              * Tidspunktene er veiledende
            </p>
          </div>

          {/* Boat image at the bottom */}
          <div className="mt-4 flex justify-center">
            <Image
              src="/images/Robåt_farge_crop.png"
              alt="Decorative boat illustration"
              width={300}
              height={100}
              className="object-contain opacity-70"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
