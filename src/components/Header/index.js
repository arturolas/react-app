import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isAuthenticated, signOut } from '../../auth'

import { ReactComponent as NikeLogotype } from '../../images/nike.svg'
import { ReactComponent as MenuIcon } from '../../images/menu.svg'


function Header() {
  const [className, setClassName] = useState('hidden');
  const history = useHistory();

  const switchNavigation = () => {
    if (className === 'hidden') {
      setClassName('block');
    } else {
      setClassName('hidden');
    }
  }

  return <header>
    <div className="container mx-auto">
      <div className="hidden md:flex bg-gray-100 justify-end">
        <nav className="pr-6">
          <ul className="flex h-8 items-center  list-none gap-5">
            {isAuthenticated() && <li className="text-xs"><Link to="/admin">Admin</Link></li>}
            <li className="text-xs"><Link to="/signin">Ayuda</Link></li>
            <li className="text-xs"><Link to="/signin">Unete</Link></li>
            {
              isAuthenticated() ? <li onClick={function () {
                signOut(() => {
                  history.push('/');
                })
              }} className="text-xs cursor-pointer">Cerrar sesión</li> : <li className="text-xs"><Link to="/signin">Iniciar sesion</Link></li>
            }
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-between px-6 md:px-0 lg:px-6">
        <div>
          <Link to="/">
            <NikeLogotype />
          </Link>
        </div>

        <button className="block md:hidden" onClick={switchNavigation}>
          <MenuIcon />
        </button>

        <div className={className + ' md:block'}>
          <nav className="bg-white px-8 py-8 fixed top-0 right-0 bottom-0 z-10 md:relative md:px-0">
            <ul className="flex flex-col list-none gap-5 text-xl font-medium md:flex-row md:text-sm">
              <li><Link to="/products/new">Nuevos Lanzamientos</Link></li>
              <li><Link to="/products/men">Hombre</Link></li>
              <li><a href="/">Mujer</a></li>
              <li><a href="/">Niño/a</a></li>
              <li><a href="/">Rebajas</a></li>
              <li><a href="/">SNKRS</a></li>
            </ul>
            {
              className === 'block' && <Link to="/signin" className="border inline-block rounded-2xl mt-8 px-4 py-1">Iniciar sesión</Link>
            }
          </nav>
        </div>

        {
          className === 'block' && <div onClick={switchNavigation} className="fixed top-0 right-0 left-0 bottom-0" style={{
            backgroundColor: 'hsla(0,0%,7%,.36)',
            backdropFilter: ' blur(4px)'
          }}></div>
        }

      </div>
    </div>
  </header>
}

export default Header;