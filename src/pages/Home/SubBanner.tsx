import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import subbanner1 from '@/assets/images/subbanner/subbanner-01.webp'
import subbanner2 from '@/assets/images/subbanner/subbanner-02.webp'
import subbanner3 from '@/assets/images/subbanner/subbanner-03.webp'
import subbanner4 from '@/assets/images/subbanner/subbanner-04.webp'

const SubBanner = () => {
  return (
    <div className='py-10'>
      <Swiper
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        className='mySwiper'
        slidesPerView={1}
        breakpoints={{
          500: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1028: {
            slidesPerView: 4
          }
        }}
      >
        <SwiperSlide>
          <div className='p-2 w-full cursor-pointer group'>
            <div className='shadow-outer w-full rounded-md overflow-hidden relative'>
              <img
                src={subbanner1}
                alt='sub-banner'
                className='group-hover:scale-110 transition-all'
              />
              <div className='absolute top-8 inset-x-0 px-2 md:px-10 text-white flex flex-col gap-5 items-start'>
                <p className='uppercase text-xs'>big screen</p>
                <p className='capitalize text-base sm:text-lg xl:text-xl font-medium'>
                  smart watch series 7
                </p>
                <span className='text-xs md:text-sm font-light'>
                  From $399 or $16.62/mo. for 24 mo*
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-2 w-full cursor-pointer group'>
            <div className='shadow-outer w-full rounded-md overflow-hidden relative'>
              <img
                src={subbanner2}
                alt='sub-banner'
                className='group-hover:scale-110 transition-all'
              />
              <div className='absolute top-8 inset-x-0 px-2 md:px-10 flex flex-col gap-5 items-start'>
                <p className='uppercase text-gray-600 text-xs'>studio display</p>
                <p className='capitalize text-base sm:text-lg xl:text-xl font-medium'>
                  600 nits of brightness
                </p>
                <span className='text-xs md:text-sm font-light text-gray-600'>
                  16-inch 6K Retina display
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-2 w-full cursor-pointer group'>
            <div className='shadow-outer w-full rounded-md overflow-hidden relative'>
              <img
                src={subbanner3}
                alt='sub-banner'
                className='group-hover:scale-110 transition-all'
              />
              <div className='absolute top-8 inset-x-0 px-2 md:px-10 flex flex-col gap-5 items-start'>
                <p className='uppercase text-gray-600 text-xs'>smartphones</p>
                <p className='capitalize text-base sm:text-lg xl:text-xl font-medium'>
                  Iphone 14 ProMax
                </p>
                <span className='text-xs md:text-sm font-light text-gray-600'>
                  Now in Green. From $999.0 or $41.62/mo. for 24mo. Footnote*
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-2 w-full cursor-pointer group'>
            <div className='shadow-outer w-full rounded-md overflow-hidden relative'>
              <img
                src={subbanner4}
                alt='sub-banner'
                className='group-hover:scale-110 transition-all'
              />
              <div className='absolute top-8 inset-x-0 px-2 md:px-10 flex flex-col gap-5 items-start'>
                <p className='uppercase text-gray-600 text-xs'>home speakers</p>
                <p className='capitalize text-base sm:text-lg xl:text-xl font-medium'>
                  room-filling sound
                </p>
                <span className='text-xs md:text-sm font-light text-gray-600'>
                  From $699.00 or $116.58/mo. for 12 mo*
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SubBanner
