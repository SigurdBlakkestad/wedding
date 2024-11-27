import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-cream text-gray-800">
      {/* Header */}
      <header className="bg-blush-pink py-8 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Our Wishlist</h1>
        <p className="text-xl max-w-2xl mx-auto px-4">
          Your love and presence mean everything to us. If you would like to contribute to our dreams, here is how.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        {/* Description */}
        <section className="mb-12 text-center">
          <p className="text-lg mb-6">
            We have curated a list of experiences, items, and honeymoon contributions that will help us start our new life together. 
            Your generosity is deeply appreciated, but please know that your presence at our wedding is the greatest gift of all.
          </p>
          <Button asChild size="lg" className="text-lg">
            <a href="https://www.zola.com" target="_blank" rel="noopener noreferrer">
              View Our Wishlist on Zola
            </a>
          </Button>
        </section>

        {/* Featured Items */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Honeymoon Fund</CardTitle>
              <CardDescription>Help us create unforgettable memories</CardDescription>
            </CardHeader>
            <CardContent>
              <Image 
                src="/placeholder.svg?height=200&width=400" 
                alt="Tropical beach" 
                width={400} 
                height={200} 
                className="rounded-md"
              />
            </CardContent>
            <CardFooter>
              <p>Contribute to our dream honeymoon in Bali</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kitchen Essentials</CardTitle>
              <CardDescription>For our culinary adventures</CardDescription>
            </CardHeader>
            <CardContent>
              <Image 
                src="/placeholder.svg?height=200&width=400" 
                alt="Kitchen appliances" 
                width={400} 
                height={200} 
                className="rounded-md"
              />
            </CardContent>
            <CardFooter>
              <p>Help us equip our kitchen for delicious home-cooked meals</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Home Decor</CardTitle>
              <CardDescription>To make our house a home</CardDescription>
            </CardHeader>
            <CardContent>
              <Image 
                src="/placeholder.svg?height=200&width=400" 
                alt="Living room decor" 
                width={400} 
                height={200} 
                className="rounded-md"
              />
            </CardContent>
            <CardFooter>
              <p>Contribute to making our living space cozy and inviting</p>
            </CardFooter>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sage-green text-white py-8 mt-12">
        <div className="container mx-auto text-center">
          <nav>
            <ul className="flex justify-center space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/rsvp" className="hover:underline">RSVP</Link></li>
              <li><Link href="/information" className="hover:underline">Information</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

