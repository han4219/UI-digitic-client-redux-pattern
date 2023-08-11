import React, { useState } from 'react'
import Plus from '@/svgs/Plus.tsx'
import Minus from '@/svgs/Minus.tsx'

interface Props {
  className?: string
  value: number
}

const QuantityController: React.FC<Props> = ({ className = '', value }) => {
  const [quantity, setQuantity] = useState(value)

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuantity(Number(value))
  }

  return (
    <div className={`border ${className}`}>
      <div className='w-full flex justify-between'>
        <button className='p-1 border-r'>
          <Minus />
        </button>
        <input
          type='text'
          value={quantity}
          onChange={handleChangeQuantity}
          className='outline-none text-center w-full'
        />
        <button className='p-1 border-l'>
          <Plus />
        </button>
      </div>
    </div>
  )
}

export default QuantityController
