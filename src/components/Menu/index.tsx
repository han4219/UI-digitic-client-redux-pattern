import Search from '@/components/Search'
import { Link } from 'react-router-dom'
import path from '@/constants/path.ts'
import MenuIcon from '@/svgs/MenuIcon.tsx'
import ArrowDownIcon from '@/svgs/ArrowDownIcon.tsx'

const Menu = () => {
  return (
    <div className='w-full bg-primary '>
      <div className='container py-4'>
        <div className='flex items-center justify-center lg:justify-start gap-10'>
          <div className='hidden lg:block'>
            <ul className='uppercase text-sm flex items-center gap-7'>
              <li>
                <div className='categories-group group flex justify-between items-center gap-3 cursor-pointer'>
                  <MenuIcon />
                  <div className='group-hover:text-light-brown transition-all'>shop categories</div>
                  <div className='ml-12'>
                    <ArrowDownIcon width='15px' height='15px' />
                  </div>
                </div>
              </li>
              <li className='w-[1px] bg-gray-400 h-5'></li>
              <li>
                <Link className='hover:text-light-brown transition-all' to={path.home}>
                  home
                </Link>
              </li>
              <li>
                <Link className='hover:text-light-brown transition-all' to={path.ourStore}>
                  our store
                </Link>
              </li>
              <li>
                <Link className='hover:text-light-brown transition-all' to={path.blogs}>
                  blogs
                </Link>
              </li>
              <li>
                <Link className='hover:text-light-brown transition-all' to={path.contact}>
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='lg:hidden w-full md:basis-1/2'>
            <Search />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
