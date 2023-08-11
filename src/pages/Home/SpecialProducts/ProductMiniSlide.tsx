import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import img1 from '@/assets/images/special-products/image-slide1.jpg'
import img2 from '@/assets/images/special-products/image-slide2.jpg'
import img3 from '@/assets/images/special-products/image-slide3.jpg'
import img4 from '@/assets/images/special-products/image-slide4.jpg'
import { useRef } from 'react'
import ChevronLeft from '@/svgs/ChevronLeft.tsx'
import ChevronRight from '@/svgs/ChevronRight.tsx'

const ProductMiniSlide = () => {
  const swiperRef = useRef<any>(null)

  return (
    <div className='p-2 gap-2 flex justify-between items-center'>
      <button
        /* eslint-disable */
        onClick={() => swiperRef.current.slidePrev()}
      >
        <ChevronLeft className='w-5 h-5 md:w-6 md:h-6' />
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2
          }
        }}
      >
        <SwiperSlide>
          <div className='border p-1 rounded-md'>
            <img src={img1} alt='' className='w-[80px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='border p-1 rounded-md'>
            <img src={img2} alt='' className='w-[80px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='border p-1 rounded-md'>
            <img src={img3} alt='' className='w-[80px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='border p-1 rounded-md'>
            <img src={img4} alt='' className='w-[80px]' />
          </div>
        </SwiperSlide>
      </Swiper>
      <button onClick={() => swiperRef.current.slideNext()}>
        <ChevronRight className='w-5 h-5 md:w-6 md:h-6' />
      </button>
    </div>
  )
}

export default ProductMiniSlide
