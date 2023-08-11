import BreadCrumb from '@/components/BreadCrumb'
import { Link, useNavigate } from 'react-router-dom'
import path from '@/constants/path.ts'
import Input from '@/components/Input'
import InputPasscode from '@/components/InputPasscode'
import Meta from '@/components/Meta'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Meta title='Login - Digitic' />
      <BreadCrumb title='Login' />
      <div className='bg-bg-body py-16'>
        <div className='container'>
          <div className='bg-white mx-auto md:max-w-xl flex flex-col items-center rounded-md shadow-outer'>
            <div className='w-full p-8 flex flex-col items-center gap-5'>
              <div className='font-medium text-gray-500 text-xl'>Login</div>
              <div className='w-full'>
                <div className='w-full'>
                  <Input
                    placeholder='Email'
                    classNameInput='w-full outline-none bg-gray-100 py-3 indent-3'
                  />
                </div>
                <div className='mt-5'>
                  <InputPasscode
                    aria-autocomplete='none'
                    placeholder='Password'
                    classNameWrapper='bg-gray-100'
                    className='bg-gray-100 py-3 indent-2 text-gray-500'
                  />
                </div>
              </div>
              <div className='self-start'>
                <Link
                  to={path.forgotPassword}
                  className='text-base text-primary hover:text-red-brown hover:underline'
                >
                  Forgot your password?
                </Link>
              </div>
              <div className='w-full flex flex-col md:flex-row items-center justify-center gap-3'>
                <button className='flex items-center py-2 justify-center w-full md:w-[120px] bg-primary rounded-full text-white font-normal text-base'>
                  Login
                </button>
                <button
                  onClick={() => navigate('/account/register')}
                  className='flex items-center py-2 justify-center w-full md:w-[120px] bg-light-brown rounded-full text-primary font-normal text-base'
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
