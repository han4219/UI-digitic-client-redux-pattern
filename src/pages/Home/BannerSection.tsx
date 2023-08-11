import mainBanner1 from '@/assets/images/main-banner-1.jpg'
import miniBanner1 from '@/assets/images/catbanner-01.jpg'
import miniBanner2 from '@/assets/images/catbanner-02.jpg'
import miniBanner3 from '@/assets/images/catbanner-03.jpg'
import miniBanner4 from '@/assets/images/catbanner-04.jpg'

const BannerSection = () => {
  return (
    <div className='w-full bg-white flex justify-center'>
      <div className='container'>
        <div className='w-full py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='col-span-full 900:col-span-1'>
            <div className='w-full rounded-lg overflow-hidden relative'>
              <div className='w-full h-full'>
                <img src={mainBanner1} alt='main-banner-1' className='w-full h-auto' />
              </div>
              <div className='max-w-[70%] absolute inset-y-0 left-0'>
                <div className='pt-5 pl-5 md:pt-8 md:pl-8'>
                  <p className='uppercase text-red-brown text-[10px] md:text-xs xl:text-sm'>
                    super changed for pros.
                  </p>
                  <p className='py-2 md:py-4 text-secondary text-2xl md:text-3xl xl:text-4xl font-semibold xl:mb-4'>
                    iPad S13+ Pro.
                  </p>
                  <span className='text-gray-700 text-[10px] md:text-xs xl:text-sm'>
                    From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
                  </span>
                  <br />
                  <button className='px-5 py-2 mt-2 uppercase text-white text-xs md:text-sm xl:mt-4 rounded-full bg-primary hover:bg-light-brown hover:text-primary transition-all'>
                    buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-full 900:col-span-1'>
            <div className='grid grid-rows-2 grid-flow-col gap-3'>
              <div className='row-span-1 col-span-1'>
                <div className='w-full rounded-lg overflow-hidden relative cursor-pointer group'>
                  <div className='w-full h-full'>
                    <img
                      src={miniBanner1}
                      alt='cat-banner-1'
                      className='w-full h-auto group-hover:scale-105 transition-all duration-300'
                    />
                  </div>
                  <div className='max-w-[60%] absolute inset-y-0 left-0 flex items-center'>
                    <div className='pl-4 lg:pl-8'>
                      <p className='uppercase text-red-brown text-[8px] 400:text-xs xl:text-base'>
                        best sale
                      </p>
                      <p className='sm:py-1 text-secondary text-xs 400:text-base xl:text-xl font-semibold'>
                        Laptops Max
                      </p>
                      <p className='text-gray-700 text-[7px] 400:text-xs xl:text-sm leading-3'>
                        From $1699.00 or $64.62/mo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-span-1 col-span-1'>
                <div className='w-full rounded-lg overflow-hidden relative cursor-pointer group'>
                  <div className='w-full h-full'>
                    <img
                      src={miniBanner2}
                      alt='cat-banner-2'
                      className='w-full h-auto group-hover:scale-105 transition-all duration-300'
                    />
                  </div>
                  <div className='max-w-[60%] absolute inset-y-0 left-0 flex items-center'>
                    <div className='pl-4 lg:pl-8'>
                      <p className='uppercase text-red-brown text-[8px] 400:text-xs xl:text-base'>
                        15% off
                      </p>
                      <p className='sm:py-1 text-secondary text-xs 400:text-base xl:text-xl font-semibold'>
                        Smartwatch 7
                      </p>
                      <p className='text-gray-700 text-[7px] 400:text-xs xl:text-sm leading-3'>
                        Shop the latest band styles and colors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-span-1 col-span-1'>
                <div className='w-full rounded-lg overflow-hidden relative cursor-pointer group'>
                  <div className='w-full h-full'>
                    <img
                      src={miniBanner3}
                      alt='cat-banner-3'
                      className='w-full h-auto group-hover:scale-105 transition-all duration-300'
                    />
                  </div>
                  <div className='max-w-[60%] absolute inset-y-0 left-0 flex items-center'>
                    <div className='pl-4 lg:pl-8'>
                      <p className='uppercase text-red-brown text-[8px] 400:text-xs xl:text-base'>
                        new arrival
                      </p>
                      <p className='sm:py-1 text-secondary text-xs 400:text-base xl:text-xl font-semibold'>
                        Buy Ipad Air
                      </p>
                      <p className='text-gray-700 text-[7px] 400:text-xs xl:text-sm leading-3'>
                        From $599 or $40.91/mo. for 12 mo.*
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-span-1 col-span-1'>
                <div className='w-full rounded-lg overflow-hidden relative cursor-pointer group'>
                  <div className='w-full h-full'>
                    <img
                      src={miniBanner4}
                      alt='cat-banner-4'
                      className='w-full h-auto group-hover:scale-105 transition-all duration-300'
                    />
                  </div>
                  <div className='max-w-[60%] absolute inset-y-0 left-0 flex items-center'>
                    <div className='pl-4 lg:pl-8'>
                      <p className='uppercase text-red-brown text-[8px] 400:text-xs xl:text-base'>
                        free engraving
                      </p>
                      <p className='sm:py-1 text-secondary text-xs 400:text-base xl:text-xl font-semibold'>
                        AirPods Max
                      </p>
                      <p className='text-gray-700 text-[7px] 400:text-xs xl:text-sm leading-3'>
                        High-fidelity playback & ultra-low distortion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSection
