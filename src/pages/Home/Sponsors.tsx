import Marquee from 'react-fast-marquee'

import sponsor1 from '@/assets/images/brand-01.png'
import sponsor2 from '@/assets/images/brand-02.png'
import sponsor3 from '@/assets/images/brand-03.png'
import sponsor4 from '@/assets/images/brand-04.png'
import sponsor5 from '@/assets/images/brand-05.png'
import sponsor6 from '@/assets/images/brand-06.png'
import sponsor7 from '@/assets/images/brand-07.png'
import sponsor8 from '@/assets/images/brand-08.png'

const sponsorImages = [
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
  sponsor5,
  sponsor6,
  sponsor7,
  sponsor8
]

const Sponsors = () => {
  return (
    <div className='md:mx-4 md:px-10 bg-white'>
      <Marquee gradient={true}>
        {sponsorImages.map((img, index) => (
          <div key={index} className='mx-5'>
            <img src={img} alt='' />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Sponsors
