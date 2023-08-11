import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper/modules'

import laptop from '@/assets/images/laptop.jpg'
import camera from '@/assets/images/camera.jpg'
import television from '@/assets/images/tv.jpg'
import smartwatch from '@/assets/images/smartwatch.avif'
import playstation from '@/assets/images/ps4.webp'
import mobile from '@/assets/images/mobile.webp'
import headphone from '@/assets/images/acc.jpg'
import accessories from '@/assets/images/accessories.jpg'
import speaker from '@/assets/images/speaker.jpg'
import homeappliances from '@/assets/images/homeapp.jpg'

const Collection = () => {
  return (
    <div className='my-10 py-6 px-4 flex items-center justify-center rounded-md bg-white shadow-lg'>
      <Swiper
        slidesPerView={1}
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
          500: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: 'row'
            }
          },
          1024: {
            slidesPerView: 3,
            grid: {
              rows: 2,
              fill: 'row'
            }
          },
          1280: {
            slidesPerView: 5,
            grid: {
              rows: 2,
              fill: 'row'
            }
          }
        }}
        modules={[Grid, Pagination]}
        className='py-2'
      >
        <SwiperSlide>
          <div className='flex justify-center px-2 py-2 cursor-pointer group'>
            <div className='flex justify-between items-center w-full hover:shadow-[0_0_10px_gray] p-2 rounded-md group-hover:shadow-md transition-all'>
              <div className='flex flex-col items-start'>
                <p className='font-semibold text-primary group-hover:underline'>
                  Computers & Laptop
                </p>
                <p className='text-sm text-gray-600'>8 Items</p>
              </div>
              <div>
                <img
                  src={laptop}
                  alt='computers-&-laptop'
                  className='w-[110px] h-[110px] object-contain group-hover:scale-105 transition-all'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center px-2 py-2 cursor-pointer group'>
            <div className='flex justify-between items-center  w-full hover:shadow-[0_0_10px_gray] p-2 rounded-md group-hover:shadow-md transition-all'>
              <div className='flex flex-col items-start'>
                <p className='font-semibold text-primary group-hover:underline'>Cameras & Videos</p>
                <p className='text-sm text-gray-600'>10 Items</p>
              </div>
              <div>
                <img
                  src={camera}
                  alt='computers-&-laptop'
                  className='w-[110px] h-[110px] object-contain group-hover:scale-105 transition-all'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center px-2 py-2 cursor-pointer group'>
            <div className='flex justify-between items-center  w-full hover:shadow-[0_0_10px_gray] p-2 rounded-md group-hover:shadow-md transition-all'>
              <div className='flex flex-col items-start'>
                <p className='font-semibold text-primary group-hover:underline'>Smart Television</p>
                <p className='text-sm text-gray-600'>12 Items</p>
              </div>
              <div>
                <img
                  src={television}
                  alt='computers-&-laptop'
                  className='w-[110px] h-[110px] object-contain group-hover:scale-105 transition-all'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center px-2 py-2 cursor-pointer group'>
            <div className='flex justify-between items-center  w-full hover:shadow-[0_0_10px_gray] p-2 rounded-md group-hover:shadow-md transition-all'>
              <div className='flex flex-col items-start'>
                <p className='font-semibold text-primary group-hover:underline'>Smartwatches</p>
                <p className='text-sm text-gray-600'>13 Items</p>
              </div>
              <div>
                <img
                  src={smartwatch}
                  alt='computers-&-laptop'
                  className='w-[110px] h-[110px] object-contain group-hover:scale-105 transition-all'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center px-2 py-2 cursor-pointer group'>
            <div className='flex justify-between items-center  w-full hover:shadow-[0_0_10px_gray] p-2 rounded-md group-hover:shadow-md transition-all'>
              <div className='flex flex-col items-start'>
                <p className='font-semibold text-primary group-hover:underline'>Music & Gaming</p>
                <p className='text-sm text-gray-600'>4 Items</p>
              </div>
              <div>
                <img
                  src={playstation}
                  alt='computers-&-laptop'
                  className='w-[110px] h-[110px] object-contain group-hover:scale-105 transition-all'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center px-2 py-2 cursor-pointer group'>
            <div className='flex justify-between items-center  w-full hover:shadow-[0_0_10px_gray] p-2 rounded-md group-hover:shadow-md transition-all'>
              <div className='flex flex-col items-start'>
                <p className='font-semibold text-primary group-hover:underline'>
                  Mobiles & Tablets
                </p>
                <p className='text-sm text-gray-600'>5 Items</p>
              </div>
              <div>
                <img
                  src={mobile}
                  alt='computers-&-laptop'
                  className='w-[110px] h-[110px] object-contain group-hover:scale-105 transition-all'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center px-2 py-2 cursor-pointer group'>
            <div className='flex justify-between items-center w-full hover:shadow-[0_0_10px_gray] p-2 rounded-md group-hover:shadow-md transition-all'>
              <div className='flex flex-col items-start'>
                <p className='font-semibold text-primary group-hover:underline'>Headphones</p>
                <p className='text-sm text-gray-600'>6 Items</p>
              </div>
              <div>
                <img
                  src={headphone}
                  alt='computers-&-laptop'
                  className='w-[110px] h-[110px] object-contain group-hover:scale-105 transition-all'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center px-2 py-2 cursor-pointer group'>
            <div className='flex justify-between items-center w-full hover:shadow-[0_0_10px_gray] p-2 rounded-md group-hover:shadow-md transition-all'>
              <div className='flex flex-col items-start'>
                <p className='font-semibold text-primary group-hover:underline'>Accessories</p>
                <p className='text-sm text-gray-600'>10 Items</p>
              </div>
              <div>
                <img
                  src={accessories}
                  alt='computers-&-laptop'
                  className='w-[110px] h-[110px] object-contain group-hover:scale-105 transition-all'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center px-2 py-2 cursor-pointer group'>
            <div className='flex justify-between items-center w-full hover:shadow-[0_0_10px_gray] p-2 rounded-md group-hover:shadow-md transition-all'>
              <div className='flex flex-col items-start'>
                <p className='font-semibold text-primary group-hover:underline'>
                  Portable Speakers
                </p>
                <p className='text-sm text-gray-600'>8 Items</p>
              </div>
              <div>
                <img
                  src={speaker}
                  alt='computers-&-laptop'
                  className='w-[110px] h-[110px] object-contain group-hover:scale-105 transition-all'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center px-2 py-2 cursor-pointer group'>
            <div className='flex justify-between items-center gap-5 w-full hover:shadow-[0_0_10px_gray] p-2 rounded-md group-hover:shadow-md transition-all'>
              <div className='flex flex-col items-start'>
                <p className='font-semibold text-primary group-hover:underline'>Home Appliances</p>
                <p className='text-sm text-gray-600'>6 Items</p>
              </div>
              <div>
                <img
                  src={homeappliances}
                  alt='computers-&-laptop'
                  className='w-[110px] h-[110px] object-contain group-hover:scale-105 transition-all'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Collection
