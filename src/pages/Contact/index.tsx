import Meta from '@/components/Meta'
import BreadCrumb from '@/components/BreadCrumb'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Home from '@/svgs/Home.tsx'
import Phone from '@/svgs/Phone.tsx'
import Mail from '@/svgs/Mail.tsx'
import Info from '@/svgs/Info.tsx'
import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Meta title='Contact Us - Digitic' />
      <BreadCrumb title='Contact' />
      <div className='bg-bg-body'>
        <div className='container py-10'>
          <div className='flex flex-col gap-5'>
            <div className='w-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.809318533413!2d-122.48251542365814!3d37.72415341507358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7db005c0e281%3A0xa57a7c9f946a45d3!2sSan%20Francisco%20State%20University!5e0!3m2!1sen!2s!4v1690791705241!5m2!1sen!2s'
                width='100%'
                className='h-[400px] md:h-[600px]'
                style={{ border: 0 }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>

            <div className='flex flex-col py-8 gap-5 md:gap-10 justify-between items-center md:items-start md:flex-row px-5 rounded-md shadow-outer bg-white'>
              <div className='w-full md:w-1/2'>
                <p className='font-medium text-2xl text-primary capitalize mb-4'>contact</p>
                <div className='flex flex-col gap-4'>
                  <div>
                    <Input placeholder='Name' classNameInput='w-full outline-none bg-gray-100' />
                  </div>
                  <div>
                    <Input placeholder='Email *' classNameInput='w-full outline-none bg-gray-100' />
                  </div>
                  <div>
                    <Input
                      placeholder='Phone number'
                      classNameInput='w-full outline-none bg-gray-100'
                    />
                  </div>
                  <div className='w-full'>
                    <Textarea
                      placeholder='Comment'
                      classNameInput='w-full outline-none bg-gray-100 resize-none'
                    />
                  </div>
                  <button className='w-full flex items-center justify-center py-2 bg-primary text-white rounded-md md:max-w-[150px] md:mx-auto'>
                    Send
                  </button>
                </div>
              </div>
              <div className='w-full md:w-1/2 mt-10 md:mt-0'>
                <p className='font-medium text-2xl text-primary capitalize mb-4'>
                  Get In Touch With Us
                </p>
                <div className='flex flex-col gap-7'>
                  <div className='flex items-center justify-start gap-3'>
                    <Home />
                    <span className='text-sm text-gray-600'>
                      1600 Holloway Ave, San Francisco, CA 94132
                    </span>
                  </div>
                  <div className='flex items-center justify-start gap-3'>
                    <Phone />
                    <span className='text-sm text-gray-600'>+14153381111</span>
                  </div>
                  <div className='flex items-center justify-start gap-3'>
                    <Mail />
                    <span className='text-sm text-gray-600'>demo@gmail.com</span>
                  </div>
                  <div className='flex items-center justify-start gap-3'>
                    <Info />
                    <span className='text-sm text-gray-600'>Monday – Friday 10 AM – 8 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
