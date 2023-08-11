import { useEffect } from 'react'
import Meta from '@/components/Meta'
import BreadCrumb from '@/components/BreadCrumb'

const SizeChart = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Meta title='Size chart - Digitic' />
      <BreadCrumb title='Size Chart' />
      <div className='bg-bg-body py-10'>
        <div className='container'>
          <div className='bg-white rounded-md px-4 shadow-outer py-7 flex flex-col gap-7 justify-between'>
            Size Chart
          </div>
        </div>
      </div>
    </>
  )
}

export default SizeChart
