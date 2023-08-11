import React, { useState } from 'react'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  icon?: React.ReactNode
  className?: string
  classNameInput?: string
}

const Textarea: React.FC<Props> = ({ className = '', placeholder, classNameInput = '' }) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={`${className} relative w-full`}>
      <textarea
        cols={10}
        rows={3}
        id='comment_contact'
        name='comment'
        value={value}
        className={`${classNameInput} peer pb-2 pt-4 indent-2 text-gray-600`}
        onChange={handleChange}
      />
      <label
        className={`
        text-sm
        font-normal
        absolute
        left-3
        top-3
        text-gray-500
        ${value ? '-translate-y-[80%] top-4 scale-75' : ''}
        peer-focus:-translate-y-[80%]
        peer-focus:top-4
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

export default Textarea
