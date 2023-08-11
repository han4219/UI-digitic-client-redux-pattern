import Benefit from '@/pages/Home/Benefit.tsx'
import Collection from '@/pages/Home/Collection.tsx'
import BannerSection from '@/pages/Home/BannerSection.tsx'
import FeaturedCollection from '@/pages/Home/FeaturedCollection'

import 'swiper/css'
import 'swiper/css/navigation'
import SubBanner from '@/pages/Home/SubBanner.tsx'
import SpecialProducts from '@/pages/Home/SpecialProducts'
import PopularProducts from '@/pages/Home/PopularProducts'
import Sponsors from '@/pages/Home/Sponsors.tsx'
import LatestNews from '@/pages/Home/LatestNews'
import Meta from '@/components/Meta'

const Home = () => {
  return (
    <section>
      <Meta title='Digitic store' />
      <BannerSection />
      <div className='w-full py-10 bg-gray-100'>
        <div className='container'>
          <Benefit />
          <Collection />
          <FeaturedCollection />
          <SubBanner />
          <SpecialProducts />
          <PopularProducts />
          <Sponsors />
          <LatestNews />
        </div>
      </div>
      {/* Content ended */}
    </section>
  )
}

export default Home
