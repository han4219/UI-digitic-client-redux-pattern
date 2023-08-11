import Meta from '@/components/Meta'
import BreadCrumb from '@/components/BreadCrumb'
import { useEffect } from 'react'

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Meta title='Refund policy - Digitic' />
      <BreadCrumb title='Refund' />
      <div className='bg-bg-body py-10'>
        <div className='container'>
          <div className='bg-white rounded-md px-4 shadow-outer py-7 flex flex-col gap-7 justify-between'>
            <div>
              <p className='text-xl font-medium text-primary'>The Standard Lorem Ipsum Passage</p>
              <div className='text-sm text-gray-500 pt-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis
                posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus
                nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis.
                Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.
              </div>
            </div>
            <div>
              <p className='text-xl font-medium text-primary'>
                At Vero Eos Et Accusamus Et Iusto Odio Dignissimos
              </p>
              <div className='text-sm text-gray-500 pt-3'>
                Mauris elementum scelerisque elit non egestas. Cras lacus nibh, pretium quis
                bibendum nec, dapibus a metus. Morbi eros lectus, aliquam eu aliquam id, fringilla
                nec eros. Praesent suscipit commodo diam, non viverra turpis dapibus malesuada. Duis
                cursus metus eu sem eleifend, id rhoncus odio porttitor.
              </div>
            </div>
            <div>
              <p className='text-xl font-medium text-primary'>
                Certain Circumstances And Owing To The Claims Of Duty Or The Obligations
              </p>
              <div className='text-sm text-gray-500 pt-3'>
                But I must explain to you how all this mistaken idea of denouncing pleasure and
                praising pain was born and I will give you a complete account of the system, and
                expound the actual teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes.
              </div>
            </div>
            <div>
              <p className='text-xl font-medium text-primary'>
                Integer Ultrices Laoreet Nunc In Gravida
              </p>
              <div className='text-sm text-gray-500 pt-3'>
                Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Mauris suscipit dolor scelerisque, bibendum tellus
                ac, pharetra sapien. Praesent lacinia scelerisque odio et consequat. In a facilisis
                lacus. Maecenas vel lobortis tellus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RefundPolicy
