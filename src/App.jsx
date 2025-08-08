import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [dispatch])
  
  return !loading ? (
    <ThemeProvider>
      <div className='min-h-screen flex flex-wrap content-between bg-white dark:bg-secondary-900 transition-colors duration-300'>
        <div className='w-full block'>
          <Header />
          <main className="min-h-[calc(100vh-140px)]">
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname}>
                <Outlet />
              </PageTransition>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  ) : (
    <div className="min-h-screen bg-white dark:bg-secondary-900 flex items-center justify-center">
      <div className="spinner"></div>
    </div>
  )
}

export default App