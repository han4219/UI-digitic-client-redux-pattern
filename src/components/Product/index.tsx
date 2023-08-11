import Heart from '@/svgs/Heart.tsx'
import ArrowRightLeft from '@/svgs/ArrowRightLeft.tsx'
import { Link } from 'react-router-dom'
import Eye from '@/svgs/Eye.tsx'
import ShoppingBag from '@/svgs/ShoppingBag.tsx'
import phone1 from '@/assets/images/featured/phone1.avif'
import phone2 from '@/assets/images/featured/phone2.avif'
import RatingStar from '@/components/RatingStar'
import React from 'react'
import path from '@/constants/path.ts'

type Props = {
  classNameWrapper?: string
}

const Product: React.FC<Props> = ({ classNameWrapper = 'p-2' }) => {
  return (
    <div className={`${classNameWrapper} group cursor-pointer`}>
      <div className='shadow-outer rounded-md overflow-hidden'>
        <div className='w-full bg-white pt-[100%] relative'>
          <button className='p-1 cursor-auto rounded-full hover:bg-light-brown transition-all absolute top-2 right-2 z-10'>
            <Heart />
            {/*<HeartBlack />*/}
          </button>
          <div className='absolute top-8 right-2 py-3 lg:-right-full group-hover:right-2 transition-all z-10 duration-300'>
            <div className='flex flex-col items-center gap-2'>
              <button className='p-1 cursor-auto rounded-full hover:bg-light-brown transition-all'>
                <ArrowRightLeft />
                {/*<Check />*/}
              </button>
              <Link to='/' className='p-1 rounded-full hover:bg-light-brown transition-all'>
                <Eye />
              </Link>
              <Link to='/' className='p-1 rounded-full hover:bg-light-brown transition-all'>
                <ShoppingBag />
              </Link>
            </div>
          </div>
          <img src={phone1} alt='' className='absolute top-0 left-0 group-hover:hidden' />
          <img src={phone2} alt='' className='hidden absolute top-0 left-0 group-hover:block' />
          <div className='px-6 pb-6 flex flex-col gap-3 overflow-hidden'>
            <p className='text-red-brown text-xs md:text-sm capitalize'>havells</p>
            <Link
              to={`${path.products}/kids-headphone-bulk-10-pack-multi-colored-for-students?id=64a29d9b7bb3742779a01f14`}
              className='line-clamp-2 font-medium text-sm md:text-base my-3'
            >
              Kids headphones bulk 10 pack multi colored for students
            </Link>
            <div className='pb-6 w-1/2'>
              <RatingStar rating={4.4} />
            </div>
            <span>$100.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
