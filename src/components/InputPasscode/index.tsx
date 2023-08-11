import React, { useState } from 'react'
import EyeSlash from '@/svgs/EyeSlash.tsx'
import Eye from '@/svgs/Eye.tsx'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  classNameWrapper?: string
}

const InputPasscode: React.FC<Props> = ({
  classNameWrapper = '',
  className = '',
  placeholder,
  type: inputType = 'password'
}) => {
  const [type, setType] = useState(inputType)
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={`${classNameWrapper} flex justify-between items-center relative`}>
      <input
        type={type}
        className={`${className} flex-grow outline-none peer`}
        onChange={handleChange}
      />
      <div
        className='cursor-pointer pr-2'
        onClick={() => setType(type === 'password' ? 'text' : 'password')}
      >
        {type === 'password' ? <EyeSlash /> : <Eye />}
      </div>
      {placeholder && (
        <label
          className={`capitalize absolute top-1/2 left-3 text-sm font-normal text-gray-500 -translate-y-1/2 transition-all 
        peer-focus:-translate-y-[80%]
        peer-focus:top-1/3
        peer-focus:scale-75
        peer-placeholder-shown:translate-y-0
        peer-placeholder-shown:scale-100
        ${value ? '-translate-y-[80%] top-1/3 scale-75' : ''}
        `}
        >
          {placeholder}
        </label>
      )}
    </div>
  )
}

export default InputPasscode
