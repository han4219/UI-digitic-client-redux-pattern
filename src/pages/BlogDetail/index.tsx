import Meta from '@/components/Meta'
import BreadCrumb from '@/components/BreadCrumb'
import { blogsCategory } from '@/data/demo.ts'
import { Link, useNavigate } from 'react-router-dom'

import news1 from '@/assets/images/news/news1.webp'
import ArrowLeft from '@/svgs/ArrowLeft.tsx'
import path from '@/constants/path.ts'
import AddComment from '@/pages/BlogDetail/AddComment.tsx'

const BlogDetail = () => {
  const navigate = useNavigate()

  return (
    <>
      <Meta title='A Beautiful Sunday Morning Renaissance - Digitic' />
      <BreadCrumb title='Blog Detail' />
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
              <div className='w-full'>
                <div className='w-full flex flex-col gap-5'>
                  <div className='text-3xl text-center mb-10 font-medium text-primary'>
                    A Beautiful Sunday Morning Renaissance
                  </div>
                  <div className='py-3'>
                    <img src={news1} alt='' className='w-full object-fill' />
                  </div>
                  <div className='text-sm text-gray-500 text-justify'>
                    To enjoy alternately the sight of their distress. He really shouted with
                    pleasure; and, shaking Monsieur Du Bois strenuously by the hand, wished him joy
                    of having touched English ground; and then he held a candle to Madame Mokil,
                    that he might have a more complete view of her disaster, declaring repeatedly,
                    that he had never been better pleased in his life.
                  </div>
                  <div className='flex items-center justify-start gap-5'>
                    <span className='text-xs text-gray-500'>11 Jun, 2022</span>
                    <div className='w-[1px] h-4 bg-gray-300'></div>
                    <span className='text-xs text-gray-500'>kajal korat</span>
                  </div>
                  <hr />
                  <div className='w-full flex items-center justify-between'>
                    <button
                      onClick={() => navigate(path.blogs)}
                      className='flex items-center gap-3 text-gray-600 peer'
                    >
                      <span className='peer-hover:-translate-x-1/3 transition-all'>
                        <ArrowLeft />
                      </span>
                      <span>Back to blog</span>
                    </button>
                  </div>
                  <hr />
                  <div className='w-full'>
                    <AddComment />
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

export default BlogDetail
