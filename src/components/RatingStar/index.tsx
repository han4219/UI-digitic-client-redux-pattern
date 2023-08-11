import React from 'react'
import StarYellow from '@/svgs/StarYellow.tsx'
import StarOutline from '@/svgs/StarOutline.tsx'

type Props = {
  rating: number
}

const RatingStar: React.FC<Props> = ({ rating }) => {
  const getWidth = (index: number) => {
    if (index < rating) return `100%`
    if (index - rating > 0 && index - rating < 1) return `${100 - (index - rating) * 100}%`
    return '0%'
  }

  return (
    <div className='flex items-center gap-5'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div key={index} className='relative'>
            <div className='absolute top-0 left-0 z-10'>
              <div style={{ width: getWidth(index + 1) }} className={`overflow-hidden`}>
                <StarYellow />
              </div>
            </div>
            <div className='absolute top-0 left-0'>
              <StarOutline />
            </div>
          </div>
        ))}
    </div>
  )
}

export default RatingStar
