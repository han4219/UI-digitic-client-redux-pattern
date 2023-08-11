import { useRef } from 'react'
import ChevronLeft from '@/svgs/ChevronLeft.tsx'
import ChevronRight from '@/svgs/ChevronRight.tsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Grid, Navigation } from 'swiper/modules'
import SpecialProduct from '@/pages/Home/SpecialProducts/SpecialProduct.tsx'

const SpecialProducts = () => {
  const swiperRef = useRef<any>(null)

  return (
    <div className='py-10'>
      <div className='w-full flex justify-between items-center'>
        <p className='capitalize font-semibold text-primary text-xl xl:text-2xl'>
          special products
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
            300: {
              slidesPerView: 1,
              grid: {
                rows: 1,
                fill: 'row'
              },
              pagination: {
                clickable: true
              }
            },
            768: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: 'row'
              }
            },
            1280: {
              slidesPerView: 3,
              grid: {
                rows: 2,
                fill: 'row'
              }
            }
          }}
          modules={[Autoplay, Navigation, Grid]}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <SpecialProduct />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SpecialProducts
