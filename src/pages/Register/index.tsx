import BreadCrumb from '@/components/BreadCrumb'
import Input from '@/components/Input'
import InputPasscode from '@/components/InputPasscode'
import { Link } from 'react-router-dom'
import path from '@/constants/path.ts'
import Meta from '@/components/Meta'

const Register = () => {
  return (
    <>
      <Meta title='Register/Signup - Digitic' />
      <BreadCrumb title='Signup' />
      <div className='bg-bg-body py-16'>
        <div className='container'>
          <div className='bg-white mx-auto md:max-w-xl flex flex-col items-center rounded-md shadow-outer'>
            <div className='w-full p-8 flex flex-col items-center gap-3'>
              <div className='font-medium text-gray-500 text-xl'>Sign Up</div>
              <div className='w-full'>
                <div>
                  <Input
                    placeholder='Firstname'
                    classNameInput='w-full outline-none bg-gray-100 py-3 indent-3'
                  />
                </div>
                <div className='mt-3'>
                  <Input
                    placeholder='Lastname'
                    classNameInput='w-full outline-none bg-gray-100 py-3 indent-3'
                  />
                </div>
                <div className='mt-3'>
                  <Input
                    placeholder='Phone number'
                    classNameInput='w-full outline-none bg-gray-100 py-3 indent-3'
                  />
                </div>
                <div className='mt-3'>
                  <Input
                    placeholder='Email'
                    classNameInput='w-full outline-none bg-gray-100 py-3 indent-3'
                  />
                </div>
                <div className='mt-3'>
                  <InputPasscode
                    placeholder='Password'
                    classNameWrapper='bg-gray-100'
                    className='bg-gray-100 py-3 indent-2 text-gray-500'
                  />
                </div>
              </div>
              <div>
                <span className='text-sm text-gray-500'> Already have an account?</span>
                <Link
                  to={path.login}
                  className='text-sm pl-2 text-primary hover:text-red-brown hover:underline'
                >
                  Login
                </Link>
              </div>
              <div className='w-full flex flex-col md:flex-row items-center justify-center gap-3'>
                <button className='flex items-center py-2 justify-center w-full md:w-1/2 bg-light-brown rounded-full text-gray-600 font-medium text-base'>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
