type Props = {
  className?: string
}

const Minus = ({ className = 'w-5 h-5' }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M18 12H6' />
    </svg>
  )
}

export default Minus
