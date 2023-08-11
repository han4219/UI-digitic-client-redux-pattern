const ArrowLeft = ({
  fill = 'none',
  className = 'w-6 h-6',
  stroke = 'currentColor'
}: {
  className?: string
  fill?: string
  stroke?: string
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
      <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
    </svg>
  )
}

export default ArrowLeft
