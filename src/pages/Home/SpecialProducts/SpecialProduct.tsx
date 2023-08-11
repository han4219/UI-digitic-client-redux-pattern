import product_image1 from '@/assets/images/special-products/image1.avif'
import ProductMiniSlide from '@/pages/Home/SpecialProducts/ProductMiniSlide.tsx'
import Heart from '@/svgs/Heart.tsx'
import ArrowRightLeft from '@/svgs/ArrowRightLeft.tsx'
import { Link } from 'react-router-dom'
import Eye from '@/svgs/Eye.tsx'
import path from '@/constants/path.ts'
import RatingStar from '@/components/RatingStar'

const SpecialProduct = () => {
  return (
    <div className='p-2 group'>
      <div className='shadow-outer rounded-md p-2 md:p-4 relative bg-white'>
        <div className='absolute top-2 left-2 z-10'>
          <span className='px-2 py-1 bg-light-brown text-primary font-medium text-xs rounded-full'>
            -20%
          </span>
        </div>
        <div className='grid grid-flow-col grid-cols-2 gap-2'>
          <div className='col-span-1'>
            <div className='w-full pt-[100%] relative overflow-hidden'>
              <div className='absolute top-0 right-2 z-10 rounded-full p-1 hover:bg-light-brown transition-all'>
                <Heart />
              </div>
              <div className='absolute top-8 right-2 py-3 lg:-right-full group-hover:right-2 transition-all z-10 duration-500'>
                <div className='flex flex-col items-center'>
                  <button className='p-1 cursor-auto rounded-full hover:bg-light-brown transition-all'>
                    <ArrowRightLeft />
                    {/*<Check />*/}
                  </button>
                  <Link to='/' className='p-1 rounded-full hover:bg-light-brown transition-all'>
                    <Eye />
                  </Link>
                </div>
              </div>
              <img src={product_image1} alt='product-avatar' className='absolute top-0 left-0' />
              <div>
                <ProductMiniSlide />
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='py-2 flex flex-col items-start'>
              <div className='capitalize text-red-brown text-xs font-normal'>havells</div>
              <div className='py-3'>
                <Link to={path.home} className='line-clamp-2 font-medium'>
                  Samsung Galaxy Note10+ Mobile Phone; Sim Free Smartphone
                </Link>
              </div>
              <div className='block pb-5 md:pb-7'>
                <RatingStar rating={4.6} />
              </div>
              <div>
                <del>$75.00</del>
                <span className='text-dark-red'>$60.00</span>
              </div>
              <div className='py-3'>
                <span className='font-medium text-sm md:text-base text-primary'>{0}</span>
                <span className='px-1 text-gray-600'>Days</span>
                <span className='py-1 px-2 text-sm rounded-full bg-dark-red text-white'>{2}</span>
                <span className='font-medium text-gray-600'>:</span>
                <span className='py-1 px-2 text-sm rounded-full bg-dark-red text-white'>{12}</span>
                <span className='font-medium text-gray-600'>:</span>
                <span className='py-1 px-2 text-sm rounded-full bg-dark-red text-white'>{33}</span>
              </div>
              <div>
                <button className='uppercase px-5 py-2 rounded-full bg-primary text-white hover:bg-light-brown hover:text-primary transition-all'>
                  option
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProduct
