import React, { useState } from 'react'

type Props = {
  id: string
  checked?: boolean
  className?: string
}

const CheckBox: React.FC<Props> = ({ id, checked = false, className }) => {
  const [isChecked, setIsChecked] = useState(checked)
  return (
    <input
      id={id}
      type='checkbox'
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      className={className}
    />
  )
}

export default CheckBox
