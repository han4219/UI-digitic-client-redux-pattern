import { createBrowserRouter } from 'react-router-dom'
import Faq from '@/pages/Faq'
import Home from '@/pages/Home'
import Blogs from '@/pages/Blogs'
import Login from '@/pages/Login'
import Contact from '@/pages/Contact'
import AboutUs from '@/pages/AboutUs'
import OurStore from '@/pages/OurStore'
import NotFound from '@/pages/NotFound'
import Register from '@/pages/Register'
import WishList from '@/pages/WishList'
import SizeChart from '@/pages/SizeChart'
import Layout from '@/layouts/Layout.tsx'
import MyAccount from '@/pages/MyAccount'
import BlogDetail from '@/pages/BlogDetail'
import RefundPolicy from '@/pages/RefundPolicy'
import TermOfService from '@/pages/TermOfService'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import ShippingPolicy from '@/pages/ShippingPolicy'
import ForgotPassword from '@/pages/ForgotPassword'
import CompareProducts from '@/pages/CompareProducts'
import ProductDetail from '@/pages/ProductDetail'
import Cart from '@/pages/Cart'

// const PrivatePage = ({ children }: { children: React.ReactNode }) => {
//   const isAuthenticated = true
//
//   return isAuthenticated ? { children } : <Navigate to='/login' />
// }

const protectedRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  },
  {
    path: '/account',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MyAccount />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />
      }
    ]
  },
  {
    path: '/collections',
    element: <Layout />,
    children: [
      {
        path: 'our-store',
        element: <OurStore />
      }
    ]
  },
  {
    path: '/blogs',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Blogs />
      },
      {
        path: 'detail',
        element: <BlogDetail />
      }
    ]
  },
  {
    path: '/contact',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Contact />
      }
    ]
  },
  {
    path: '/products',
    element: <Layout />,
    children: [
      {
        path: 'compare',
        element: <CompareProducts />
      },
      {
        path: ':slug',
        element: <ProductDetail />
      }
    ]
  },
  {
    path: '/wishlist',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <WishList />
      }
    ]
  },
  {
    path: '/policy',
    element: <Layout />,
    children: [
      { path: 'privacy', element: <PrivacyPolicy /> },
      { path: 'refund', element: <RefundPolicy /> },
      { path: 'shipping', element: <ShippingPolicy /> },
      { path: 'terms', element: <TermOfService /> }
    ]
  },
  {
    path: '/about-us',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AboutUs />
      }
    ]
  },
  {
    path: '/faq',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Faq />
      }
    ]
  },
  {
    path: '/size-chart',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <SizeChart />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default protectedRoutes
