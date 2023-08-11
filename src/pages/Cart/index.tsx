import Meta from '@/components/Meta'
import BreadCrumb from '@/components/BreadCrumb'

import camera from '@/assets/images/camera.jpg'
import QuantityController from '@/components/QuantityController'
import { Link } from 'react-router-dom'
import Trash from '@/svgs/Trash.tsx'
import Textarea from '@/components/Textarea'

const Cart = () => {
  return (
    <>
      <Meta title='Your Shopping Cart - Digitic' />
      <BreadCrumb title='Your Shopping Cart' />
      <div className='bg-bg-body'>
        <div className='container py-5'>
          <div className='bg-white shadow-outer py-5 px-2 rounded-md overflow-auto'>
            <div className='w-full min-w-[1000px]'>
              <div className='grid grid-cols-2 text-gray-600 text-sm font-medium'>
                <div className='col-span-1'>PRODUCT</div>
                <div className='col-span-1'>
                  <div className='grid grid-cols-4'>
                    <div className='col-span-1'>PRICE</div>
                    <div className='col-span-1'>QUANTITY</div>
                    <div className='col-span-1 text-right'>TOTAL</div>
                    <div className='col-span-1'></div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <div className='w-full mt-4'>
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className='grid grid-cols-2 my-8 border-b pb-5'>
                      <div className='col-span-1'>
                        <div className='flex items-center'>
                          <div className='w-20 h-20 border mr-10 flex-shrink-0'>
                            <img src={camera} alt='' className='w-full h-full' />
                          </div>
                          <div className='text-sm text-gray-500 flex flex-col gap-3'>
                            <Link to='/' className='w-3/4 line-clamp-2'>
                              New Upgraded 2K 1080P Streaming Webcam with Ring LightNew Upgraded 2K
                              1080P Streaming Webcam with Ring Light
                            </Link>
                            <div>
                              <span className='font-bold'>Size:</span> S
                            </div>
                            <div className='flex items-end gap-3 font-bold'>
                              Color:
                              <div
                                style={{ backgroundColor: '#6E9BE5' }}
                                className='w-6 h-6 rounded-full'
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-span-1'>
                        <div className='grid grid-cols-4'>
                          <div className='col-span-1 text-sm font-bold text-primary'>$20.00</div>
                          <div className='col-span-1'>
                            <QuantityController value={2} className='w-[100px]' />
                          </div>
                          <div className='col-span-1 text-right text-sm font-bold text-primary'>
                            $40.00
                          </div>
                          <div className='col-span-1 text-center'>
                            <button className='p-2 rounded-full bg-primary hover:bg-light-brown hover:text-primary transition-all'>
                              <Trash stroke='white' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className='w-full flex justify-between items-start'>
                <div>
                  <button className='px-10 py-2 rounded-full bg-primary text-white hover:bg-light-brown hover:text-primary transition-all'>
                    Continue Shopping
                  </button>
                  <div className='mt-10'>
                    <div className='text-sm text-gray-600'>Order special instructions</div>
                    <div>
                      <Textarea classNameInput='w-full outline-none bg-gray-100' />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-4 items-end'>
                  <div className='text-lg text-gray-500'>
                    <span className='font-normal'>Subtotal</span>
                    <span className='font-bold pl-4'>$220.00</span>
                  </div>
                  <div className='text-gray-500 text-base'>
                    Taxes and shipping calculated at checkout
                  </div>
                  <div>
                    <button className='px-10 py-2 rounded-full bg-primary text-white hover:bg-light-brown hover:text-primary transition-all'>
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
