import { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-[1920px] mx-auto  bg-[#F3F3F3]'>

      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
