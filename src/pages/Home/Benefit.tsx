import service01 from '@/assets/images/service-01.png'
import service02 from '@/assets/images/service-02.png'
import service03 from '@/assets/images/service-03.png'
import service04 from '@/assets/images/service-04.png'
import service05 from '@/assets/images/service-05.png'

const Benefit = () => {
  return (
    <div className='flex py-5 flex-col sm:flex-row flex-wrap justify-around gap-10 xl:gap-0 text-primary'>
      <div className='flex items-center gap-3 md:gap-5 cursor-pointer group'>
        <img
          src={service01}
          alt='service-shipping'
          className='group-hover:scale-110 transition-all'
        />
        <div className='flex flex-col justify-center items-start select-none'>
          <p className='text-primary font-semibold group-hover:text-red-brown transition-all'>
            Free Shipping
          </p>
          <p className='text-sm text-gray-600'>From all orders over $100</p>
        </div>
      </div>
      <div className='flex items-center gap-3 md:gap-5 cursor-pointer group'>
        <img
          src={service02}
          alt='service-shipping'
          className='group-hover:scale-110 transition-all'
        />
        <div className='flex flex-col justify-center items-start select-none'>
          <p className='text-primary font-semibold group-hover:text-red-brown transition-all'>
            Daily Surprise Offers
          </p>
          <p className='text-sm text-gray-600'>Save upto 25% off</p>
        </div>
      </div>
      <div className='flex items-center gap-3 md:gap-5 cursor-pointer group'>
        <img
          src={service03}
          alt='service-shipping'
          className='group-hover:scale-110 transition-all'
        />
        <div className='flex flex-col justify-center items-start select-none'>
          <p className='text-primary font-semibold group-hover:text-red-brown transition-all'>
            Support 24/7
          </p>
          <p className='text-sm text-gray-600'>Shop with an expert</p>
        </div>
      </div>
      <div className='flex items-center gap-3 md:gap-5 cursor-pointer group'>
        <img
          src={service04}
          alt='service-shipping'
          className='group-hover:scale-110 transition-all'
        />
        <div className='flex flex-col justify-center items-start select-none'>
          <p className='text-primary font-semibold group-hover:text-red-brown transition-all'>
            Affordable Prices
          </p>
          <p className='text-sm text-gray-600'>Get Factory direct price</p>
        </div>
      </div>
      <div className='flex items-center gap-3 md:gap-5 cursor-pointer group'>
        <img
          src={service05}
          alt='service-shipping'
          className='group-hover:scale-110 transition-all'
        />
        <div className='flex flex-col justify-center items-start select-none'>
          <p className='text-primary font-semibold group-hover:text-red-brown transition-all'>
            Secure Payments
          </p>
          <p className='text-sm text-gray-600'>100% Protected Payments</p>
        </div>
      </div>
    </div>
  )
}

export default Benefit
