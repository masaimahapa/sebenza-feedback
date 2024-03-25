import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FeedbackListPage from './pages/feedback-list-page.tsx'
import AddFeedbackPage from './pages/add-feedback-page.tsx'
import FeedbackDetailPage from './pages/feedback-detail-page.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NavigationBar from './components/navigation-bar.tsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FeedbackListPage />
  },
  {
    path: '/add-feedback',
    element: <AddFeedbackPage />
  },
  {
    path: '/feedback/:id',
    element: <FeedbackDetailPage />
  }
])
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<QueryClientProvider client={queryClient}>
<NavigationBar />
<ToastContainer />

    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
