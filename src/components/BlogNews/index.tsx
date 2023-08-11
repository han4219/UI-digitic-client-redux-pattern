import news1 from '@/assets/images/news/news1.webp'
import ArrowRight from '@/svgs/ArrowRight.tsx'
import React from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from '@/constants/path.ts'

type Props = {
  classNameWrapper?: string
}

const BlogNews: React.FC<Props> = ({ classNameWrapper = 'p-2' }) => {
  const navigate = useNavigate()

  return (
    <div className={classNameWrapper}>
      <div className='shadow-outer rounded-lg overflow-hidden group bg-white'>
        <div className='w-full'>
          <img src={news1} alt='' className='group-hover:scale-x-105 transition-all w-full' />
        </div>
        <div className='p-2 md:p-5 flex flex-col items-start gap-3'>
          <div className='text-gray-600 text-sm'>11 JUNE, 2023</div>
          <div className='line-clamp-1'>Urna pretium elit mauris cursus curabitu</div>
          <div className='line-clamp-2 text-sm text-gray-600'>
            You’re only as good as your last collection, which is an enormous pressure. I think
            there is something about luxury – it’s not something people need, but it’s what they
            want. It really pulls at their heart. I have a fantastic relationship with money.
          </div>
          <div className='flex items-center'>
            <button
              onClick={() =>
                navigate({
                  pathname: path.blogDetail,
                  search: createSearchParams({ id: 'some-blog-id' }).toString()
                })
              }
              className='px-4 py-2 rounded-full bg-primary uppercase text-white hover:bg-light-brown hover:text-primary transition-all'
            >
              read more
            </button>
            <span className='pl-2 animate-go-right transition-all'>
              <ArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogNews
