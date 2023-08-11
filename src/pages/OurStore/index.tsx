import { useState } from 'react'
import { Drawer, Select } from 'antd'
import { colors, sizes, sortsData } from '@/data/demo.ts'
import BreadCrumb from '@/components/BreadCrumb'

import AsideFilter from '@/components/AsideFilter'
import ChevronLeft from '@/svgs/ChevronLeft.tsx'
import ChevronRight from '@/svgs/ChevronRight.tsx'
import Product from '@/components/Product'
import { Link } from 'react-router-dom'
import ArrowRight from '@/svgs/ArrowRight.tsx'
import filterStatus from '@/constants/filter.ts'
import CheckBox from '@/components/CheckBox'
import InputNumber from '@/components/InputNumber'
import Meta from '@/components/Meta'

const filters = Object.values(filterStatus)

const OurStore = () => {
  const [filterType, setFilterType] = useState<filterStatus | null>(null)
  const [showPrentDrawer, setShowParentDrawer] = useState(false)
  const [showChildrenDrawer, setShowChildrenDrawer] = useState(false)

  const handleShowChildrenDrawer = (filter: filterStatus) => {
    setFilterType(filter)
    setShowChildrenDrawer(true)
  }

  const availabilityContent = (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2 cursor-pointer'>
        <CheckBox id='in-stock2' className='cursor-pointer' />
        <label
          htmlFor='in-stock2'
          className='capitalize text-gray-500 text-sm cursor-pointer select-none'
        >
          in stock (21)
        </label>
      </div>
      <div className='flex items-center gap-2 cursor-pointer'>
        <CheckBox id='out-of-stock2' className='cursor-pointer' />
        <label
          htmlFor='out-of-stock2'
          className='capitalize text-gray-500 text-sm cursor-pointer select-none'
        >
          out of stock (2)
        </label>
      </div>
    </div>
  )

  const priceContent = (
    <div>
      <p className='text-gray-600'>The highest price is $500</p>
      <div className='mt-2 py-2 flex items-center justify-between gap-3 text-gray-500'>
        <div className='w-1/2 text-sm flex items-center gap-1'>
          $
          <InputNumber
            type='number'
            placeholder='From'
            classNameInput='outline-none bg-gray-200 w-full'
          />
        </div>
        {' - '}
        <div className='w-1/2 text-sm flex items-center gap-1'>
          $
          <InputNumber
            type='number'
            placeholder='To'
            classNameInput='outline-none bg-gray-200 w-full'
          />
        </div>
      </div>
    </div>
  )
  const colorContent = (
    <div className='flex items-center px-10 flex-wrap gap-16 mt-5'>
      {colors.map((color) => (
        <Link
          style={{ backgroundColor: color }}
          to={`?color=${color}`}
          className='w-8 h-8 rounded-full'
          key={color}
        ></Link>
      ))}
    </div>
  )
  const sizeContent = (
    <div className='flex flex-col gap-3'>
      {sizes.map((size, index) => (
        <div className='flex items-center gap-2 cursor-pointer' key={index}>
          <CheckBox
            id={size}
            className='cursor-pointer border-gray-600 text-gray-500 bg-transparent'
          />
          <label
            htmlFor={size}
            className='capitalize text-gray-500 text-sm cursor-pointer select-none'
          >
            {size} {` (${Math.ceil(Math.random() * 50)})`}
          </label>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <Meta title='Our Store - Digitic' />
      <BreadCrumb title='Our Store' />
      <div className='bg-bg-body'>
        <div className='container py-7'>
          <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-2 hidden xl:block'>
              <AsideFilter />
            </div>
            <div className='col-span-12 xl:col-span-10'>
              <div className='rounded-md shadow-outer flex justify-between items-center px-5 bg-white py-4'>
                <div className='hidden xl:block text-base font-normal'>
                  Sort By:
                  <Select defaultValue='best-selling' className='w-56 ml-2' options={sortsData} />
                </div>
                <button
                  onClick={() => setShowParentDrawer(true)}
                  className='xl:hidden px-2 sm:px-5 py-2 bg-primary rounded-md capitalize text-white'
                >
                  filter and sort
                </button>
                <div className='flex items-center gap-2'>
                  <p className='px-2 text-gray-500 text-sm select-none'>21 products</p>
                  <button className='bg-gray-200 p-1 rounded-md'>
                    <ChevronLeft />
                  </button>
                  <button className='bg-gray-200 p-1 rounded-md'>
                    <ChevronRight />
                  </button>
                </div>
              </div>

              <div className='mt-3 w-full grid grid-cols-1 400:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
                {Array(21)
                  .fill(0)
                  .map((_, index) => (
                    <div className='col-span-full 400:col-span-1' key={index}>
                      <Product classNameWrapper='' />
                    </div>
                  ))}
              </div>

              {/* Pagination */}
              <div className='px-2 my-5 sm:px-4 flex flex-col md:flex-row items-center md:justify-between gap-3 py-3 bg-white rounded-md'>
                <div className='px select-none bg-gray-200 p-2 rounded-md text-gray-600'>
                  Showing 15 of 21
                </div>
                <div className='max-w-[640px] md:max-w-none'>
                  <div className='w-full md:w-auto flex items-center justify-center gap-2'>
                    <button className='p-2 border rounded-full text-white hover:bg-light-brown transition-all'>
                      <ChevronLeft stroke='gray' />
                    </button>
                    <Link
                      to='#'
                      className='w-11 h-11 flex items-center justify-center border rounded-full bg-primary text-white'
                    >
                      1
                    </Link>
                    <Link
                      to='#'
                      className='w-11 h-11 flex items-center justify-center border rounded-full text-gray-600'
                    >
                      2
                    </Link>
                    <button className='p-2 border rounded-full text-white hover:bg-light-brown transition-all'>
                      <ChevronRight stroke='gray' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        placement='left'
        open={showPrentDrawer}
        title='Filter And Sort (21 products)'
        onClose={() => setShowParentDrawer(false)}
        style={{ position: 'relative', height: '100vh' }}
        footer={
          <div className='flex items-center p-5 gap-3'>
            <button className='w-1/2 py-2 text-white font-medium bg-primary rounded-full'>
              Clear
            </button>
            <button className='w-1/2 py-2 text-primary font-medium bg-light-brown rounded-full'>
              Apply
            </button>
          </div>
        }
      >
        <div className='w-full'>
          {filters.map((value, index) => (
            <div className='mt-7 px-4 flex flex-col gap-5' key={value + '_' + index.toString()}>
              <div
                className='w-full flex items-center justify-between cursor-pointer'
                onClick={() =>
                  value === filterStatus.sort_by ? {} : handleShowChildrenDrawer(value)
                }
              >
                <span className='capitalize text-base text-gray-500 font-medium'>{value}</span>
                {value === filterStatus.sort_by ? (
                  <Select defaultValue='best-selling' className='w-48 ml-2' options={sortsData} />
                ) : (
                  <ArrowRight />
                )}
              </div>
            </div>
          ))}
          <Drawer
            placement='left'
            open={showChildrenDrawer}
            title={filterType}
            onClose={() => setShowChildrenDrawer(false)}
            footer={
              <div className='flex justify-end items-center'>
                <button
                  onClick={() => setShowChildrenDrawer(false)}
                  className='px-4 py-2 bg-blue-600 text-white font-medium rounded-md'
                >
                  OK
                </button>
              </div>
            }
          >
            {filterType === filterStatus.size && sizeContent}
            {filterType === filterStatus.color && colorContent}
            {filterType === filterStatus.price && priceContent}
            {filterType === filterStatus.availability && availabilityContent}
          </Drawer>
        </div>
      </Drawer>
    </>
  )
}

export default OurStore
