const ArrowRight = ({
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
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
      />
    </svg>
  )
}

export default ArrowRight
