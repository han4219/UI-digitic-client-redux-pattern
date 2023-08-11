import Meta from '@/components/Meta'
import BreadCrumb from '@/components/BreadCrumb'
import XMark from '@/svgs/XMark.tsx'

import speaker from '@/assets/images/speaker.jpg'
import { Link } from 'react-router-dom'

const WishList = () => {
  return (
    <>
      <Meta title='Wishlist - Digitic' />
      <BreadCrumb title='Wishlist' />
      <div className='bg-bg-body py-10'>
        <div className='container'>
          <div className='flex flex-wrap gap-2 md:gap-5'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  className='max-w-[300px] relative rounded-md overflow-hidden shadow-outer'
                  key={index}
                >
                  <button className='absolute top-2 right-2 z-10 hover:bg-light-brown transition-all p-1 rounded-full'>
                    <XMark />
                  </button>
                  <div className='w-full pt-[100%] relative'>
                    <img src={speaker} alt='' className='absolute top-0 left-0 w-full' />
                  </div>
                  <div className='px-5 py-4'>
                    <Link to={'/'} className='hover:underline font-medium block'>
                      Kids Headphones Bulk 10 Pack Multi Colored For Students
                    </Link>
                    <br />
                    <b>{index === 2 && <del className='text-red-brown'>$132</del>} $100</b>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default WishList
