import RatingStar from '@/components/RatingStar'
import { Collapse } from 'antd'
import { useState } from 'react'

const Reviews = () => {
  const [activeCollapseKey, setActiveCollapseKey] = useState('')

  const writeReview = (
    <div className='text-gray-500 text-sm'>
      <div className='capitalize text-lg'>write a review</div>
      <div className='flex flex-col mt-4'>
        <label htmlFor=''>Name</label>
        <input
          type='text'
          placeholder='Enter your name'
          className='outline-none border pl-2 py-3'
        />
      </div>
      <div className='flex flex-col mt-4'>
        <label htmlFor=''>Email</label>
        <input
          type='email'
          placeholder='example@gmail.com'
          className='outline-none border pl-2 py-3'
        />
      </div>
      <div className='flex flex-col mt-4'>
        <label htmlFor=''>Rating</label>
        <div>
          <RatingStar rating={6} />
        </div>
      </div>
      <div className='flex flex-col mt-8'>
        <label htmlFor=''>Review Content (1500)</label>
        <textarea
          name=''
          id=''
          rows={5}
          placeholder='Write your comments here...'
          className='w-full outline-none border p-3'
        ></textarea>
      </div>
      <div className='my-4 flex justify-end'>
        <button className='w-full flex items-center justify-center px-5 py-2 text-base md:w-auto bg-primary rounded-full text-white hover:bg-light-brown transition-all'>
          Submit Review
        </button>
      </div>
    </div>
  )

  return (
    <div className='mt-4 px-3 md:px-5 py-10 rounded-md shadow-outer bg-white'>
      <div className='text-xl'>Customer Reviews</div>
      <div className='flex flex-col gap-4 400:gap-0 400:flex-row items-start 400:items-center justify-between'>
        <div className='flex items-center justify-between gap-6'>
          <div>
            <RatingStar rating={5} />
          </div>
          <span className='text-xs text-gray-500 translate-y-2'>Base on 5 reviews</span>
        </div>

        <button
          className='text-sm text-gray-500 underline'
          onClick={() =>
            setActiveCollapseKey(activeCollapseKey === 'write_new_review' ? '' : 'write_new_review')
          }
        >
          {activeCollapseKey === 'write_new_review' ? 'Cancel' : 'Write a review'}
        </button>
      </div>
      <Collapse
        activeKey={activeCollapseKey}
        bordered={false}
        ghost={true}
        items={[
          {
            key: 'write_new_review',
            showArrow: false,
            children: writeReview
          }
        ]}
      />
      <hr />
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className={`${index !== 0 ? 'border-t' : ''} flex flex-col items-start py-5 gap-3`}
          >
            <div className='my-4'>
              <RatingStar rating={5} />
            </div>
            <div className='text-base font-medium'>Alex Sandra</div>
            <div className='text-sm italic'>
              on <span className='text-sm font-bold'>Jan 19, 2023</span>
            </div>
            <div className='mt-2 text-sm text-gray-500'>
              This is one of the best ecommerce application.
            </div>
            {/*If review has answer from admin*/}
            <div className='w-[90%] self-end ml-16 p-4 rounded-md bg-gray-100'>
              <p className='text-lg text-gray-600'>Admin - Digitic</p>
              <p className='text-sm text-gray-500'>
                Thank you for your purchase from. Please let us know if we can do anything else for
                you!
              </p>
            </div>
            <div className='w-full flex justify-end'>
              <button className='hover:text-red-brown transition-all underline text-gray-500 text-sm'>
                Report as Inappropriate
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Reviews
