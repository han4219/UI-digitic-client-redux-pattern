import Heart from '@/svgs/Heart.tsx'
import Meta from '@/components/Meta'
import { Zoom } from 'reactjs-image-zoom'
import Product from '@/components/Product'
import RatingStar from '@/components/RatingStar'
import BreadCrumb from '@/components/BreadCrumb'
import ProductCompare from '@/svgs/ProductCompare.tsx'
import Reviews from '@/pages/ProductDetail/Reviews.tsx'
import { colors, productTags, sizes } from '@/data/demo.ts'
import QuantityController from '@/components/QuantityController'
// import { useParams, useSearchParams } from 'react-router-dom'

import img1 from '@/assets/images/smartwatch/1.webp'
import img2 from '@/assets/images/smartwatch/2.webp'
import img3 from '@/assets/images/smartwatch/3.webp'
import img4 from '@/assets/images/smartwatch/4.webp'
import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'
import Shipping from '@/svgs/Shipping.tsx'
import ChevronDown from '@/svgs/ChevronDown.tsx'
import Check from '@/svgs/Check.tsx'
import Ruler from '@/svgs/Ruler.tsx'
import Material from '@/svgs/Material.tsx'
import Dimension from '@/components/Dimension'
const images = [img1, img2, img3, img4]

const items: CollapseProps['items'] = [
  {
    key: 'shipping_return',
    extra: (
      <div>
        <ChevronDown className='w-4 h-4' />
      </div>
    ),
    showArrow: false,

    label: (
      <div className='flex justify-start gap-3 items-center'>
        <Shipping />
        <span>Shipping & Returns</span>
      </div>
    ),
    children: (
      <div>
        <div>Free shipping and returns available on all orders!</div>
        <div>
          We ship all US domestic orders within <b>5-10 business days</b>!
        </div>
      </div>
    )
  },
  {
    key: 'materials',
    extra: (
      <div>
        <ChevronDown className='w-4 h-4' />
      </div>
    ),
    className: 'border-t',
    showArrow: false,
    label: (
      <div className='flex justify-start gap-3 items-center'>
        <Material />
        <span>Materials</span>
      </div>
    ),
    children: (
      <div>
        Running Shoes cushions your stride with soft foam to keep you running in comfort.
        Lightweight knit material wraps your foot in breathable support, while a minimalist design
        fits in just about anywhere your day takes you.
      </div>
    )
  },
  {
    key: 'dimensions',
    className: 'border-t',
    extra: (
      <div>
        <ChevronDown className='w-4 h-4' />
      </div>
    ),
    showArrow: false,
    label: (
      <div className='flex justify-start gap-3 items-center'>
        <Ruler />
        <span>Dimensions</span>
      </div>
    ),
    children: <Dimension />
  },
  {
    key: 'care_instruction',
    className: 'border-t',
    extra: (
      <div>
        <ChevronDown className='w-4 h-4' />
      </div>
    ),
    showArrow: false,
    label: (
      <div className='flex justify-start gap-3 items-center'>
        <Heart />
        <span>Care Instructions</span>
      </div>
    ),
    children: <div>Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.</div>
  },
  {
    key: 'collapsible_tab',
    className: 'border-t',
    extra: (
      <div>
        <ChevronDown className='w-4 h-4' />
      </div>
    ),
    showArrow: false,
    label: (
      <div className='flex justify-start gap-3 items-center'>
        <Check />
        <span>Collapsible Tab</span>
      </div>
    ),
    children: (
      <div className='flex flex-col gap-5'>
        <div>
          <b className='text-xl text-primary'>The Standard Lorem Ipsum Passage</b>
          <p className='mt-2 text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere
            cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla.
            Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse
            aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.
          </p>
        </div>
        <div>
          <b className='text-xl text-primary'>At Vero Eos Et Accusamus Et Iusto Odio Dignissimos</b>
          <p className='mt-2 text'>
            Mauris elementum scelerisque elit non egestas. Cras lacus nibh, pretium quis bibendum
            nec, dapibus a metus. Morbi eros lectus, aliquam eu aliquam id, fringilla nec eros.
            Praesent suscipit commodo diam, non viverra turpis dapibus malesuada. Duis cursus metus
            eu sem eleifend, id rhoncus odio porttitor.
          </p>
        </div>
        <div>
          <b className='text-xl text-primary'>
            Certain Circumstances And Owing To The Claims Of Duty Or The Obligations
          </b>
          <p className='mt-2 text'>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
            pain was born and I will give you a complete account of the system, and expound the
            actual teachings of the great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes.
          </p>
        </div>
        <div>
          <b className='text-xl text-primary'>Integer Ultrices Laoreet Nunc In Gravida</b>
          <p className='mt-2 text'>
            Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Mauris suscipit dolor scelerisque, bibendum tellus ac,
            pharetra sapien. Praesent lacinia scelerisque odio et consequat. In a facilisis lacus.
            Maecenas vel lobortis tellus.
          </p>
        </div>
      </div>
    )
  }
]

const ProductDetail = () => {
  // const queryParams = useParams()
  // const [searchParams] = useSearchParams()
  // console.log(queryParams)
  // console.log(searchParams.toString())

  return (
    <>
      <Meta title='Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera' />
      <BreadCrumb title='Product Detail' />
      <div className='bg-bg-body py-7'>
        <div className='container'>
          {/* Product info */}
          <div className='p-5 rounded-md bg-white shadow-outer grid grid-cols-1 900:grid-cols-2 gap-4'>
            <div className='grid-cols-1'>
              <div className='w-full'>
                <Zoom
                  width={100}
                  maxwidth={1000}
                  imagesrc={images[0]}
                  position='center'
                  size={200}
                  bgsize='cover'
                  cursor='zoom-in'
                  style={{ border: '1px solid #E5E7EB', paddingTop: '100%' }}
                />
              </div>
              <div className='w-full grid grid-cols-1 900:grid-cols-2 gap-4 mt-4'>
                {images.map((src, index) => (
                  <div key={index} className='w-full pt-[100%] relative border cursor-pointer'>
                    <img src={src} alt='' className='w-full object-cover absolute top-0 left-0' />
                  </div>
                ))}
              </div>
            </div>
            <div className='grid-cols-1'>
              <div className='sticky top-0'>
                <div className='font-medium text-xl text-primary border-b pb-3'>
                  Milanese Loop Watch Band For 42mm/44mm Apple Watch
                </div>
                <div className='mt-2 font-medium text-primary'>$10.00</div>
                <div className='flex justify-start items-center'>
                  <RatingStar rating={5} />
                  <span className='ml-5 text-gray-500 text-sm mt-4'>(1 reviews)</span>
                </div>
                <div className='my-2'>
                  <a href='#write_review' className='text-sm text-gray-500'>
                    Write a review
                  </a>
                </div>
                <hr />
                <div className='py-4'>
                  <div className='text-sm'>
                    <b className='text-primary text-base mr-2 font-medium'>Brand:</b>
                    <span className='text-gray-500'>Sony</span>
                  </div>
                  <div className='flex items-center mt-3'>
                    <b className='text-primary mr-2 text-base font-medium'>Tags:</b>
                    <div className='flex flex-wrap'>
                      {productTags.map((tag, index) => (
                        <span key={index} className='text-gray-500 text-sm ml-2'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='mt-3'>
                    <b className='text-primary mr-2 text-base font-medium'>Size</b>
                    <br />
                    <div className='flex flex-wrap items-center gap-3 mt-2'>
                      {sizes.map((size, index) => (
                        <div
                          key={index}
                          className='font-semibold text-base text-gray-500 w-10 h-8 cursor-pointer flex items-center justify-center border'
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='mt-5'>
                    <b className='text-primary mr-2 text-base font-medium'>Color</b>
                    <br />
                    <div className='flex flex-wrap items-center gap-3 mt-2'>
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          style={{ backgroundColor: color }}
                          className='w-8 h-8 cursor-pointer rounded-full'
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className='mt-5'>
                    <b className='text-primary mr-2 text-base font-medium'>Quantity</b>
                    <br />
                    <div className='flex flex-col items-center sm:flex-row sm:items-center gap-3 mt-2'>
                      <QuantityController value={1} className='w-[100px]' />
                      <button className='w-full sm:w-auto px-7 py-2 bg-primary hover:bg-light-brown transition-all rounded-full text-white text-sm hover:text-primary'>
                        Add to cart
                      </button>
                      <button className='w-full sm:w-auto px-7 py-2 bg-primary hover:bg-light-brown transition-all rounded-full text-white text-sm hover:text-primary'>
                        Buy now
                      </button>
                    </div>
                  </div>

                  <div className='my-8 flex items-center justify-start gap-5'>
                    <button className='flex items-center justify-start gap-2'>
                      <Heart />
                      <span className='text-primary text-sm'>Add to wishlist</span>
                    </button>
                    <button className='flex items-center justify-start gap-2'>
                      <ProductCompare />
                      <span className='text-primary text-sm'>Add to compare</span>
                    </button>
                  </div>

                  <div className=''>
                    <Collapse items={items} bordered={false} ghost={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className='my-10'>
            <div className='text-2xl text-primary font-medium'>Description</div>
            <div className='px-5 py-8 mt-5 rounded-md shadow-outer bg-white text-sm text-gray-500 leading-7 text-justify'>
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
              mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
              repellat."
            </div>
          </div>

          {/* Reviews */}
          <div className='my-10' id='write_review'>
            <div className='text-2xl text-primary font-medium'>Reviews</div>
            <Reviews />
          </div>

          {/* You may also like */}
          <div className='my-10'>
            <div className='text-2xl text-primary font-medium'>You may also like</div>
            <div className='mt-4 grid gap-2 grid-cols-1 400:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className='col-span-1'>
                    <Product classNameWrapper='p-0' />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
