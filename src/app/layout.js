import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load the local TTF font file for the whole project
const blackMango = localFont({ 
  src: '/fonts/black-mango-extra-light.ttf', // Path relative to the app directory
  variable: '--font-black-mango',
  display: 'swap',
})

export const metadata = {
  title: "Ine & Even | Bryllup 2025",
  description: "Ine og Even gifter seg 23. august 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no" className={`${geistSans.variable} ${geistMono.variable} ${blackMango.variable} antialiased min-h-screen`}>
      <body className="font-black-mango">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex justify-center items-center">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-white/40 hover:bg-white/60 text-gray-800`}>
                  Hjem
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/information" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-white/40 hover:bg-white/60 text-gray-800`}>
                  Informasjon
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/program" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-white/40 hover:bg-white/60 text-gray-800`}>
                  Program for dagen
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/rsvp" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-white/40 hover:bg-white/60 text-gray-800`}>
                  S.U
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {children}
      </body>
    </html>
  );
}
