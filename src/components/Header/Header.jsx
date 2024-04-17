import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

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
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex items-center justify-between flex-wrap'>
          <div className='flex items-center flex-shrink-0 mr-6'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <div className='block lg:hidden'>
            <button className='flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white'>
              <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'/>
              </svg>
            </button>
          </div>
          <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='text-sm lg:flex-grow'>
              <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className='block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4'
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
            {authStatus && (
              <div>
                <LogoutBtn />
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
