import { Link } from 'react-router-dom'
import CheckBox from '@/components/CheckBox'
import InputNumber from '@/components/InputNumber'
import { colors, productTags, sizes } from '@/data/demo.ts'

const AsideFilter = () => {
  return (
    <div className='w-full flex flex-col gap-5'>
      {/* Start filter by category */}
      <div className='p-3 rounded-lg shadow-outer bg-white'>
        <div className='font-medium capitalize text-lg mb-5'>shop by categories</div>
        <div>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link
                to='?mobile-and-tablet'
                className='capitalize text-sm text-gray-500 hover:text-red-brown'
              >
                mobile and tablet
              </Link>
            </li>
            <li>
              <Link
                to='?mobile-and-tablet'
                className='capitalize text-sm text-gray-500 hover:text-red-brown'
              >
                laptop
              </Link>
            </li>
            <li>
              <Link
                to='?mobile-and-tablet'
                className='capitalize text-sm text-gray-500 hover:text-red-brown'
              >
                camera
              </Link>
            </li>
            <li>
              <Link
                to='?mobile-and-tablet'
                className='capitalize text-sm text-gray-500 hover:text-red-brown'
              >
                speaker
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End filter by category */}

      {/* Start main filter */}
      <div className='p-3 rounded-lg shadow-outer bg-white'>
        <div className='font-medium capitalize text-lg mb-5'>filter by</div>
        <div className='flex flex-col gap-4'>
          <p className='font-medium text-sm capitalize'>availability</p>
          <div className='flex items-center gap-2 cursor-pointer'>
            <CheckBox id='in-stock' className='cursor-pointer accent-gray-500' />
            <label
              htmlFor='in-stock'
              className='capitalize text-gray-500 text-sm cursor-pointer select-none'
            >
              in stock (21)
            </label>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <CheckBox id='out-of-stock' className='cursor-pointer accent-gray-500' />
            <label
              htmlFor='out-of-stock'
              className='capitalize text-gray-500 text-sm cursor-pointer select-none'
            >
              out of stock (2)
            </label>
          </div>
        </div>
        <div className='mt-5'>
          <p className='font-medium text-sm capitalize'>price</p>
          <div className='mt-2 py-2 flex items-center justify-between gap-3 text-gray-500'>
            <div className='w-1/2 text-sm flex items-center gap-1'>
              $
              <InputNumber
                type='number'
                placeholder=''
                classNameInput='outline-none bg-gray-200 w-full'
              />
            </div>
            {' - '}
            <div className='w-1/2 text-sm flex items-center gap-1'>
              $
              <InputNumber
                type='number'
                placeholder=''
                classNameInput='outline-none bg-gray-200 w-full'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <p className='font-medium text-sm capitalize'>color</p>
          <div className='flex items-center flex-wrap gap-3 mt-5'>
            {colors.map((color) => (
              <Link
                style={{ backgroundColor: color }}
                to={`?color=${color}`}
                className='w-8 h-8 rounded-full'
                key={color}
              ></Link>
            ))}
          </div>
        </div>

        <div className='mt-5'>
          <p className='font-medium text-sm capitalize mb-5'>size</p>
          <div className='flex flex-col gap-3'>
            {sizes.map((size, index) => (
              <div className='flex items-center gap-2 cursor-pointer' key={index}>
                <CheckBox
                  id={'size-' + size}
                  className='cursor-pointer border-gray-600 text-gray-500 bg-transparent'
                />
                <label
                  htmlFor={'size-' + size}
                  className='capitalize text-gray-500 text-sm cursor-pointer select-none'
                >
                  {size} {` (${Math.ceil(Math.random() * 50)})`}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End main filter */}

      {/* Start product tag */}
      <div className='py-5 px-3 rounded-lg shadow-outer bg-white'>
        <div className='font-medium capitalize text-lg mb-5'>product tag</div>
        <div className='mt-7 flex flex-wrap gap-3'>
          {productTags.map((tagName, index) => (
            <div key={index}>
              <Link
                to={`?${tagName}`}
                className='text-gray-500 p-2 bg-gray-100 rounded-md capitalize text-sm'
              >
                {tagName}
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* End product tag */}
    </div>
  )
}

export default AsideFilter
