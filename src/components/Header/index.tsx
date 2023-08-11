import Search from '@/components/Search'
import userIcon from '@/assets/images/user.svg'
import cartIcon from '@/assets/images/cart.svg'
import compareIcon from '@/assets/images/compare.svg'
import favoriteIcon from '@/assets/images/wishlist.svg'
import Menu from '@/components/Menu'
import Popover from '@/components/Popover'
import { Link, useNavigate } from 'react-router-dom'
import path from '@/constants/path.ts'

const Header = () => {
  const isLoggedIn = false
  const navigate = useNavigate()

  return (
    <header className='w-full bg-secondary text-white'>
      <div className='container md:text-xs text-sm py-2 flex justify-center md:justify-between items-center '>
        <p className='hidden md:block'>Free Shipping Over $100 & Free Returns</p>
        <div className='flex justify-between'>
          <p>Hotline:(888) 4344 6000-(888) 1338 8193</p>
        </div>
      </div>

      <div className='h-[1px] bg-gray-500'></div>

      <div className='container'>
        <div className='py-6 flex justify-between lg:gap-20'>
          <div
            className='text-3xl font-normal text-white selection:block cursor-pointer'
            onClick={() => navigate(path.home)}
          >
            <span className='font-bold text-green-400 text-4xl'>D</span>igitic.
          </div>

          {/* Search */}
          <div className='hidden lg:block flex-grow'>
            <Search />
          </div>

          <div className='flex justify-between items-center gap-3 md:gap-6 text-sm'>
            {/* item */}
            <Link
              to={path.compareProduct}
              className='flex justify-between items-center gap-3 cursor-pointer group'
            >
              <img
                src={compareIcon}
                alt='compare'
                className='w-6 md:w-auto group-hover:rotate-180 transition-all'
              />
              <div className='hidden xl:block'>
                <div className='flex flex-col items-center justify-center'>
                  <p>Compare</p>
                  <p>Products</p>
                </div>
              </div>
            </Link>
            {/* item */}
            <Link
              to={path.wishlist}
              className='group flex justify-between items-center gap-3 cursor-pointer'
            >
              <img
                src={favoriteIcon}
                alt='favorite'
                className='w-6 md:w-auto group-hover:scale-110 transition-all'
              />
              <div className='hidden xl:block'>
                <div className='flex flex-col items-center justify-center'>
                  <p>Favorite</p>
                  <p>Wishlist</p>
                </div>
              </div>
            </Link>
            {/* item */}
            <Popover
              type='div'
              offSetMainAxis={6}
              offSetCrossAxis={0}
              initialOpen={false}
              children={
                <div className='group flex justify-between items-center gap-3 cursor-pointer'>
                  <img
                    src={userIcon}
                    alt='user'
                    className='w-6 md:w-auto group-hover:scale-110 transition-all'
                  />
                  <div className='hidden xl:block'>
                    <div className='flex flex-col items-center justify-center'>
                      <p>{isLoggedIn ? 'Logout' : 'Login'}</p>
                      <p>My Account</p>
                    </div>
                  </div>
                </div>
              }
              content={
                <div className='flex flex-col bg-white rounded-md text-primary overflow-hidden shadow-md'>
                  {isLoggedIn ? (
                    <>
                      <div
                        className='cursor-pointer py-3 pl-2 pr-4 hover:bg-light-brown transition-all'
                        onClick={() => alert('logout processing')}
                      >
                        Logout
                      </div>
                      <div
                        className='cursor-pointer py-3 pl-2 pr-4 hover:bg-light-brown transition-all'
                        onClick={() => navigate(path.account)}
                      >
                        My Account
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className='cursor-pointer py-3 pl-2 pr-4 hover:bg-light-brown transition-all'
                        onClick={() => navigate(path.login)}
                      >
                        Login
                      </div>
                      <div
                        className='cursor-pointer py-3 pl-2 pr-4 hover:bg-light-brown transition-all'
                        onClick={() => navigate(path.register)}
                      >
                        Sign Up
                      </div>
                    </>
                  )}
                </div>
              }
            />

            {/* item */}
            <div
              className='group flex justify-between items-center gap-3 cursor-pointer'
              onClick={() => navigate('/cart')}
            >
              <img
                src={cartIcon}
                alt='cart'
                className='w-6 md:w-auto group-hover:scale-110 transition-all'
              />
              <div className='flex flex-col items-center justify-center gap-1'>
                <p className='px-2 text-xs text-gray-800 bg-white rounded-full'>0</p>
                <p>$0.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Menu */}
      <div>
        <Menu />
      </div>
    </header>
  )
}

export default Header
