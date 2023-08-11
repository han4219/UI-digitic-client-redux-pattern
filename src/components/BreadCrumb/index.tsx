import React from 'react'

type Props = {
  title: string
}

const BreadCrumb: React.FC<Props> = ({ title }) => {
  return (
    <div className='w-full py-5 flex items-end justify-center gap-1'>
      <span className='text-gray-600'>Home / </span>
      <span className='text-3xl text-primary font-medium'>{title}</span>
    </div>
  )
}

export default BreadCrumb
