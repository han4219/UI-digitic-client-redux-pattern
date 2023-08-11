import { useRef, useState } from 'react'
import Product from '@/components/Product'
import ChevronLeft from '@/svgs/ChevronLeft.tsx'
import ChevronRight from '@/svgs/ChevronRight.tsx'

import smartWatchCat from '@/assets/images/cat/cat-icon-watch.webp'
import speakerCat from '@/assets/images/cat/cat-icon-speaker.webp'
import laptopCat from '@/assets/images/cat/cat-icon-laptop.webp'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

enum PopularCategory {
  smart_watch = 'smart_watch',
  speaker = 'speaker',
  laptop = 'laptop'
}

const PopularProducts = () => {
  const [currentCategory, setCurrentCategory] = useState<PopularCategory>(
    PopularCategory.smart_watch
  )
  const swiperRef = useRef<any>(null)

  const setCategory = (category: PopularCategory) => {
    setCurrentCategory(category)
  }

  return (
    <div className='py-10'>
      <div className='w-full flex justify-between items-center'>
        <p className='capitalize font-semibold text-primary text-xl xl:text-2xl'>
          our popular products
        </p>
        <div className='hidden md:block'>
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
      </div>

      <div>
        {/* TODO mobile, tablet */}
        <div className='flex flex-col 400:flex-row sm:gap-5 items-center justify-start md:gap-5 py-4'>
          <div
            className='w-full 400:w-auto flex items-center rounded-lg cursor-pointer pr-1 py-1 hover:scale-105 transition-all'
            onClick={() => setCategory(PopularCategory.smart_watch)}
          >
            <img src={smartWatchCat} alt='' />
            <div
              className={`text-gray-600 capitalize text-sm md:text-base ${
                currentCategory === PopularCategory.smart_watch ? 'font-medium text-red-brown' : ''
              }`}
            >
              smart watch
            </div>
          </div>
          <div
            className='w-full 400:w-auto flex items-center rounded-lg cursor-pointer pr-1 py-1 hover:scale-105 transition-all'
            onClick={() => setCategory(PopularCategory.speaker)}
          >
            <img src={speakerCat} alt='' />
            <div
              className={`text-gray-600 capitalize text-sm md:text-base ${
                currentCategory === PopularCategory.speaker ? 'font-medium text-red-brown' : ''
              }`}
            >
              speaker
            </div>
          </div>
          <div
            className='w-full 400:w-auto flex items-center rounded-lg cursor-pointer pr-1 py-1 hover:scale-105 transition-all'
            onClick={() => setCategory(PopularCategory.laptop)}
          >
            <img src={laptopCat} alt='' />
            <div
              className={`text-gray-600 capitalize text-sm md:text-base ${
                currentCategory === PopularCategory.laptop ? 'font-medium text-red-brown' : ''
              }`}
            >
              laptops
            </div>
          </div>
        </div>
        {/* TODO desktop */}
        <div>
          <div className='md:hidden'>
            <div className='flex items-center justify-end'>
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
          <div className='p-2 flex-grow'>
            <div className='w-full'>
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                className='mySwiper'
                breakpoints={{
                  500: {
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
        </div>
      </div>
    </div>
  )
}

export default PopularProducts
