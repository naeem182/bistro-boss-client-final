import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import mycreatedrouter from './Router/Router'
import { HelmetProvider } from 'react-helmet-async';
import Authprovider from './Provider/Authprovider'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={mycreatedrouter}></RouterProvider>
          </div>
        </HelmetProvider>
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>,
)
