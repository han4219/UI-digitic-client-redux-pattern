import React, { useState } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: React.ReactNode
  className?: string
  classNameInput?: string
}

const Input: React.FC<Props> = ({
  className = '',
  placeholder,
  type = 'text',
  classNameInput = ''
}) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={`${className} relative w-full`}>
      <input
        value={value}
        type={type}
        className={`${classNameInput} peer py-2 indent-2 text-gray-600`}
        onChange={handleChange}
      />
      <label
        className={`
        text-sm
        font-normal
        absolute
        left-3
        top-1/2
        -translate-y-1/2
        text-gray-500
        ${value ? '-translate-y-[80%] top-1/3 scale-75' : ''}
        peer-focus:-translate-y-[80%]
        peer-focus:top-1/3
        peer-focus:scale-75
        peer-placeholder-shown:translate-y-0
        peer-placeholder-shown:scale-100
        transition-all
        `}
      >
        {placeholder}
      </label>
    </div>
  )
}

export default Input
