import Meta from '@/components/Meta'
import BreadCrumb from '@/components/BreadCrumb'
import Input from '@/components/Input'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const navigate = useNavigate()

  return (
    <>
      <Meta title='Account - Digitic' />
      <BreadCrumb title='Forgot Password' />
      <div className='bg-bg-body py-16'>
        <div className='container'>
          <div className='bg-white mx-auto md:max-w-xl flex flex-col items-center rounded-md shadow-outer'>
            <div className='w-full p-8 flex flex-col items-center gap-5'>
              <div className='font-medium text-gray-500 text-xl capitalize'>
                reset your password
              </div>
              <small className='text-gray-500'>
                We will send you an email to reset your password
              </small>
              <div className='w-full'>
                <div className='w-full'>
                  <Input
                    placeholder='Email'
                    classNameInput='w-full outline-none bg-gray-100 py-3 indent-3'
                  />
                </div>
              </div>
              <div className='w-full flex flex-col md:flex-row items-center justify-center gap-3'>
                <button className='flex items-center py-2 justify-center w-full md:w-[120px] bg-primary rounded-full text-white font-normal text-base'>
                  Submit
                </button>
                <button
                  onClick={() => navigate('/account/login')}
                  className='flex items-center py-2 justify-center w-full md:w-[120px] border rounded-full text-primary font-normal text-base'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
