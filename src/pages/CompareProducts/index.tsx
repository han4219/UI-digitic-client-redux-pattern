import Meta from '@/components/Meta'
import BreadCrumb from '@/components/BreadCrumb'

import phone1 from '@/assets/images/featured/phone1.avif'
import { Link } from 'react-router-dom'
import { colors } from '@/data/demo.ts'
import XMark from '@/svgs/XMark.tsx'

const CompareProducts = () => {
  return (
    <>
      <Meta title='Compare products - Digitic' />
      <BreadCrumb title='Compare Products' />
      <div className='bg-bg-body py-10'>
        <div className='container'>
          <div className='grid grid-cols-3'>
            <div className='col-span-1'>
              <div className='bg-white mx-auto rounded-md overflow-hidden shadow-outer relative max-w-[300px]'>
                <button className='absolute top-2 right-2 z-10 hover:bg-light-brown transition-all p-1 rounded-full'>
                  <XMark />
                </button>
                <div className='w-full pt-[100%] relative'>
                  <img src={phone1} alt='' className='absolute w-full top-0 left-0' />
                </div>
                <hr />
                <div className='px-6 flex flex-col gap-3 overflow-hidden'>
                  <Link to='/' className='line-clamp-2 font-medium text-sm md:text-base my-3'>
                    Kids headphones bulk 10 pack multi colored for students
                  </Link>
                  <span>$100.00</span>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Brand:</b>
                    <span className='text-sm'>Havels</span>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Type:</b>
                    <span className='text-sm'>Headphone</span>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Availability:</b>
                    <span className='text-sm'>In Stock</span>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Color:</b>
                    <div className='flex items-center justify-end gap-2'>
                      {colors.slice(0, 4).map((color) => (
                        <div
                          style={{ backgroundColor: color }}
                          className={`w-6 h-6 rounded-full`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Size:</b>
                    <span className='text-sm'>S M</span>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='bg-white mx-auto rounded-md overflow-hidden shadow-outer relative max-w-[300px]'>
                <button className='absolute top-2 right-2 z-10 hover:bg-light-brown transition-all p-1 rounded-full'>
                  <XMark />
                </button>
                <div className='w-full pt-[100%] relative'>
                  <img src={phone1} alt='' className='absolute w-full top-0 left-0' />
                </div>
                <hr />
                <div className='px-6 flex flex-col gap-3 overflow-hidden'>
                  <Link to='/' className='line-clamp-2 font-medium text-sm md:text-base my-3'>
                    Kids headphones bulk 10 pack multi colored for students
                  </Link>
                  <span>$100.00</span>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Brand:</b>
                    <span className='text-sm'>Havels</span>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Type:</b>
                    <span className='text-sm'>Headphone</span>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Availability:</b>
                    <span className='text-sm'>In Stock</span>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Color:</b>
                    <div className='flex items-center justify-end gap-2'>
                      {colors.slice(0, 4).map((color) => (
                        <div
                          style={{ backgroundColor: color }}
                          className={`w-6 h-6 rounded-full`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Size:</b>
                    <span className='text-sm'>S M</span>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='bg-white mx-auto rounded-md overflow-hidden shadow-outer relative max-w-[300px]'>
                <button className='absolute top-2 right-2 z-10 hover:bg-light-brown transition-all p-1 rounded-full'>
                  <XMark />
                </button>
                <div className='w-full pt-[100%] relative'>
                  <img src={phone1} alt='' className='absolute w-full top-0 left-0' />
                </div>
                <hr />
                <div className='px-6 flex flex-col gap-3 overflow-hidden'>
                  <Link to='/' className='line-clamp-2 font-medium text-sm md:text-base my-3'>
                    Kids headphones bulk 10 pack multi colored for students
                  </Link>
                  <span>$100.00</span>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Brand:</b>
                    <span className='text-sm'>Havels</span>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Type:</b>
                    <span className='text-sm'>Headphone</span>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Availability:</b>
                    <span className='text-sm'>In Stock</span>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Color:</b>
                    <div className='flex items-center justify-end gap-2'>
                      {colors.slice(0, 4).map((color) => (
                        <div
                          style={{ backgroundColor: color }}
                          className={`w-6 h-6 rounded-full`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <b className='text-sm'>Size:</b>
                    <span className='text-sm'>S M</span>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompareProducts
