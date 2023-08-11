const ChevronLeft = ({
  fill = 'none',
  stroke = 'currentColor',
  className = 'w-6 h-6'
}: {
  fill?: string
  stroke?: string
  className?: string
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke={stroke}
      className={className}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
    </svg>
  )
}

export default ChevronLeft
