"use client"

import * as React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const NavigationMenu = React.forwardRef(({ className, initialFloating = false, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFloating, setIsFloating] = useState(initialFloating)

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsFloating(scrollPosition > 100) // Change to floating after scrolling 100px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Control body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on both html and body
      document.documentElement.style.overflow = 'hidden'
      document.documentElement.style.height = '100%'
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100%'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      // Restore scrolling
      document.documentElement.style.overflow = ''
      document.documentElement.style.height = ''
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    // Cleanup when component unmounts
    return () => {
      document.documentElement.style.overflow = ''
      document.documentElement.style.height = ''
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  return (
    <nav ref={ref} className="sticky top-0 z-[100] w-full">
      {/* Regular menu - hidden when floating */}
      <div className={`bg-[#A8C3E3] backdrop-blur-lg h-16 flex items-center justify-between px-4 w-full transition-opacity duration-200 ${isFloating ? 'opacity-0' : 'opacity-100'}`}>
        <Link href="/" className="text-gray-800 font-medium">
          Ine & Even
        </Link>
        <button 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Floating menu - only visible when floating */}
      {isFloating && (
        <div className="fixed top-4 right-4 z-[100]">
          <button 
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#A8C3E3] backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg hover:bg-[#A8C3E3] transition-colors text-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      {/* Full screen menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#A8C3E3] z-50">
          {/* Close button in the same position as hamburger */}
          <div className="h-16 flex items-center justify-end px-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)] space-y-8 text-2xl">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hjem
            </Link>
            <Link 
              href="/program" 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Program for dagen
            </Link>
            <Link 
              href="/information" 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Informasjon
            </Link>
            <Link 
              href="/rsvp" 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              RSVP
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
})

NavigationMenu.displayName = "NavigationMenu"

export { NavigationMenu }
