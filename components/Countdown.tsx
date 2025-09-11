import React, { useEffect, useState } from 'react'

function Countdown({ time = 120 }: { time?: number }) {
  const [countdown, setCountdown] = useState(time)

  useEffect(() => {
    if (countdown <= 0) return

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [countdown])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return <span>Resend in {formatTime(countdown)}</span>
}

export default Countdown
