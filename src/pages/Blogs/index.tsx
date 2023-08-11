import { useEffect } from 'react'
import Meta from '@/components/Meta'
import { Link } from 'react-router-dom'
import BlogNews from '@/components/BlogNews'
import { blogsCategory } from '@/data/demo.ts'
import BreadCrumb from '@/components/BreadCrumb'

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Meta title='Blog News - Digitic' />
      <BreadCrumb title='Blogs' />
      <div className='bg-bg-body py-8'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-3'>
            <div className='hidden lg:block col-span-3'>
              <div className='p-3 rounded-lg shadow-outer bg-white'>
                <div className='font-medium capitalize text-lg mb-5'>Filter by category</div>
                <div>
                  <ul className='flex flex-col gap-3'>
                    {blogsCategory.map((value, index) => (
                      <li key={index}>
                        <Link
                          to='?mobile-and-tablet'
                          className='capitalize text-sm text-gray-500 hover:text-red-brown'
                        >
                          {value}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-span-12 lg:col-span-9'>
              <div className='grid grid-cols-2 gap-3'>
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className='col-span-2 md:col-span-1 overflow-hidden'>
                      <BlogNews classNameWrapper='bg-white' />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
