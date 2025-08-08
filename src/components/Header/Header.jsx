import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from '../DarkModeToggle';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <motion.header 
      className='py-4 navbar sticky top-0 z-50'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <Container>
        <nav className='flex items-center justify-between'>
          <motion.div 
            className='flex items-center'
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className='lg:hidden flex items-center gap-3'>
            <DarkModeToggle />
            <motion.button 
              className='flex items-center px-3 py-2 rounded-lg text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <svg className='fill-current h-4 w-4' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'/>
              </svg>
            </motion.button>
          </div>

          {/* Desktop navigation */}
          <div className='hidden lg:flex items-center gap-6'>
            <div className='flex items-center gap-6'>
              {navItems.map((item) =>
                item.active ? (
                  <motion.div key={item.name} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200'
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ) : null
              )}
            </div>
            <div className='flex items-center gap-3'>
              <DarkModeToggle />
              {authStatus && <LogoutBtn />}
            </div>
          </div>
        </nav>

        {/* Mobile navigation menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden mt-4 overflow-hidden'
            >
              <div className='flex flex-col gap-3 py-4 border-t border-secondary-200 dark:border-secondary-700'>
                {navItems.map((item) =>
                  item.active ? (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        navigate(item.slug);
                        setIsMenuOpen(false);
                      }}
                      className='text-left text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 py-2'
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.button>
                  ) : null
                )}
                {authStatus && (
                  <div className='pt-2 border-t border-secondary-200 dark:border-secondary-700'>
                    <LogoutBtn />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}

export default Header;
