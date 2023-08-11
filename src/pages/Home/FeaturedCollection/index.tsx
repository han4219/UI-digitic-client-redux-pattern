import { useRef } from 'react'
import Product from '@/components/Product'
import ChevronLeft from '@/svgs/ChevronLeft.tsx'
import ChevronRight from '@/svgs/ChevronRight.tsx'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

const FeaturedCollection = () => {
  const swiperRef = useRef<any>(null)
  return (
    <div className='py-10'>
      <div className='w-full flex justify-between items-center'>
        <p className='capitalize font-semibold text-primary text-xl xl:text-2xl'>
          featured collection
        </p>
        <div className='flex items-center'>
          <button
            className='hover:bg-light-brown transition-all p-2 rounded-md'
            /* eslint-disable */
            onClick={() => swiperRef.current.slidePrev()}
          >
            <ChevronLeft className='w-5 h-5 md:w-6 md:h-6' />
          </button>
          <button
            className='hover:bg-light-brown transition-all p-2 rounded-md'
            onClick={() => swiperRef.current.slideNext()}
          >
            <ChevronRight className='w-5 h-5 md:w-6 md:h-6' />
          </button>
        </div>
      </div>

      <div className='py-5'>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          className='mySwiper'
          breakpoints={{
            450: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 5
            }
          }}
          modules={[Autoplay, Navigation]}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <Product />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default FeaturedCollection
