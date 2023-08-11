import protectedRoutes from '@/Routes.tsx'
import { RouterProvider } from 'react-router-dom'

function App() {
  return <RouterProvider router={protectedRoutes} />
}

export default App
