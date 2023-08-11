type Props = {
  width?: string
  height?: string
  fill?: string
}

const BarsCol3 = ({ width = '5', height = '5', fill }: Props) => {
  return (
    <svg
      className={`icon icon-col-4 w-${width} h-${height}`}
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 9.5 12.5'
    >
      <defs></defs>
      <g id='Layer_2' data-name='Layer 2'>
        <g id='Layer_1-2' data-name='Layer 1'>
          <g id='shop_page' data-name='shop page'>
            <g id='Group-16'>
              <path
                id='Rectangle'
                d='M.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 01.75 0z'
              ></path>
              <path
                id='Rectangle-2'
                d='M4.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 014.75 0z'
                data-name='Rectangle'
              ></path>
              <path
                id='Rectangle-3'
                d='M8.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 018.75 0z'
                data-name='Rectangle'
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default BarsCol3
