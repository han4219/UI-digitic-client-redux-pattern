import Visa from '@/svgs/Visa.tsx'
import Amex from '@/svgs/Amex.tsx'
import Paypal from '@/svgs/Paypal.tsx'
import Input from '@/components/Input'
import { BsSend } from 'react-icons/bs'
import Discover from '@/svgs/Discover.tsx'
import DinerClub from '@/svgs/DinerClub.tsx'
import MasterCard from '@/svgs/MasterCard.tsx'
import googlePlay from '@/assets/images/google-play.webp'
import appStore from '@/assets/images/app-store.webp'
import { Link } from 'react-router-dom'
import path from '@/constants/path.ts'

const Footer = () => {
  return (
    <footer className='bg-primary text-white'>
      <section className='container'>
        <div className='py-20 w-4/5 mx-auto flex flex-col lg:flex-row justify-between items-center gap-6'>
          <div className='flex items-center gap-3'>
            <div className='text-3xl'>
              <BsSend />
            </div>
            <p className='font-semibold text-md sm:text-xl'>Sign Up For Newsletter</p>
          </div>
          <div className='flex-grow'>
            <div className='flex items-center justify-between bg-white rounded-md p-1'>
              <div className='flex-grow'>
                <Input
                  placeholder='Your Email'
                  classNameInput='outline-none w-full text-gray-800 intent-4'
                />
              </div>
              <button className='px-4 py-2 bg-primary text-sm md:text-md uppercase text-white rounded-md'>
                subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='w-full h-[1px] bg-gray-500'></div>
      <section className='container'>
        <div className='py-10 flex flex-col md:flex-row justify-between items-start gap-5'>
          <div>
            <p className='font-semibold text-xl capitalize pb-6'>contact us</p>
            <ul className='flex flex-col gap-4 text-sm'>
              <li>Demo Store</li>
              <li>No. 1259 Freedom, New York</li>
              <li>+91-987654321</li>
              <li>
                <a href='mailto:digitic-shop@gmail.com'>digitic-shop@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <p className='font-semibold text-xl capitalize pb-6'>information</p>
            <ul className='flex flex-col gap-4 text-sm'>
              <Link to={path.privacy} className='hover:text-light-brown transition-all'>
                Privacy Policy
              </Link>
              <Link to={path.refund} className='hover:text-light-brown transition-all'>
                Refund Policy
              </Link>
              <Link to={path.shipping} className='hover:text-light-brown transition-all'>
                Shipping Policy
              </Link>
              <Link to={path.terms} className='hover:text-light-brown transition-all'>
                Term Of Service
              </Link>
              <Link to={path.blogs} className='hover:text-light-brown transition-all'>
                Blogs
              </Link>
            </ul>
          </div>
          <div>
            <p className='font-semibold text-xl capitalize pb-6'>Account</p>
            <ul className='flex flex-col gap-4 text-sm'>
              <Link to={path.home} className='hover:text-light-brown transition-all'>
                Search
              </Link>
              <Link to={path.aboutUs} className='hover:text-light-brown transition-all'>
                About Us
              </Link>
              <Link to={path.faq} className='hover:text-light-brown transition-all'>
                Faq
              </Link>
              <Link to={path.contact} className='hover:text-light-brown transition-all'>
                Contact
              </Link>
              <Link to={path.sizeChart} className='hover:text-light-brown transition-all'>
                Size Chart
              </Link>
            </ul>
          </div>
          <div>
            <p className='font-semibold text-xl capitalize pb-6'>quick links</p>
            <ul className='flex flex-col gap-4 text-sm'>
              <Link to={path.home} className='hover:text-light-brown transition-all'>
                Accessories
              </Link>
              <Link to={path.home} className='hover:text-light-brown transition-all'>
                Laptop
              </Link>
              <Link to={path.home} className='hover:text-light-brown transition-all'>
                Headphones
              </Link>
              <Link to={path.home} className='hover:text-light-brown transition-all'>
                Smart watches
              </Link>
              <Link to={path.home} className='hover:text-light-brown transition-all'>
                Tablets
              </Link>
            </ul>
          </div>
          <div className='max-w-[200px] lg:max-w-full'>
            <p className='font-semibold text-xl capitalize pb-6'>our app</p>
            <ul className='flex flex-col gap-4 text-sm'>
              <li className='max-w-[300px]'>
                Download our App and get extra 15% Discount on your first Order..
              </li>
              <li>
                <div className='flex flex-col lg:flex-row flex-wrap gap-2'>
                  <img src={googlePlay} alt='google-play' className='w-[170px] h-[50px]' />
                  <img src={appStore} alt='app-store' className='w-[170px] h-[50px]' />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className='w-full h-[1px] bg-gray-500'></div>
      <section className='container'>
        <div className='py-6 flex flex-col md:flex-row gap-5 justify-between items-center'>
          <div className='text-sm'>© 2023, Digitic Powered by HAN</div>
          <div>
            <ul className='flex justify-end items-center gap-3'>
              <li>
                <Visa />
              </li>
              <li>
                <MasterCard />
              </li>
              <li>
                <Amex />
              </li>
              <li>
                <Paypal />
              </li>
              <li>
                <DinerClub />
              </li>
              <li>
                <Discover />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
