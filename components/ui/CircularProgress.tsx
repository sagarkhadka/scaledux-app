import React from 'react'

interface CircularProgressProps {
  percentage: number
  radius?: number
  strokeWidth?: number
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  radius = 8,
  strokeWidth = 3
}) => {
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className='relative flex size-20 items-center justify-center'>
      <svg className='rotate-[-90deg]' viewBox='0 0 24 24' fill='none'>
        <circle
          className='text-gray-300'
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='transparent'
          cx='12'
          cy='12'
          r={radius}
        />
        <circle
          className='text-purple-600'
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='transparent'
          cx='12'
          cy='12'
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
        />
      </svg>
      <span className='text-tertiary-hover absolute text-sm font-semibold'>{percentage}%</span>
    </div>
  )
}

export default CircularProgress
