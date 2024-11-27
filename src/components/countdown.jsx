'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, HeartIcon, MapPinIcon } from 'lucide-react'

export function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  function calculateTimeLeft(targetDate) {
    const difference = +targetDate - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null
    }

    return (
      <div key={interval} className="text-center">
        <span className="text-4xl font-bold">{timeLeft[interval]}</span>
        <p className="text-sm">{interval.charAt(0).toUpperCase() + interval.slice(1)}</p>
      </div>
    )
  })

  return (
    <div className="flex justify-center space-x-8">
      {timerComponents.length ? timerComponents : <span>The big day is here!</span>}
    </div>
  )
}
