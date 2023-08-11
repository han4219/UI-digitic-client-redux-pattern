type Props = {
  width?: string
  height?: string
  fill?: string
}

const BarsRow3 = ({ width = '5', height = '5', fill }: Props) => {
  return (
    <svg
      className={`icon icon-col-4 w-${width} h-${height}`}
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 12.5 9.5'
    >
      <defs></defs>
      <g id='Layer_2' data-name='Layer 2'>
        <g id='Layer_1-2' data-name='Layer 1'>
          <g id='shop_page' data-name='shop page'>
            <g id='Group-16'>
              <path
                id='Rectangle'
                d='M12.5.75a.76.76 0 01-.75.75h-11A.76.76 0 010 .75.76.76 0 01.75 0h11a.76.76 0 01.75.75z'
              ></path>
              <path
                id='Rectangle-2'
                d='M12.5 4.75a.76.76 0 01-.75.75h-11A.76.76 0 010 4.75.76.76 0 01.75 4h11a.76.76 0 01.75.75z'
                data-name='Rectangle'
              ></path>
              <path
                id='Rectangle-3'
                d='M12.5 8.75a.76.76 0 01-.75.75h-11A.76.76 0 010 8.75.76.76 0 01.75 8h11a.76.76 0 01.75.75z'
                data-name='Rectangle'
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default BarsRow3
