import menu from './images/menu-img.svg';
import search from './images/search-img.svg';
import logo from './images/logo-img.svg';
import login from './images/login-img.svg';
import cart from './images/cart-img.svg';
import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';


const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef(null);

  // clic y scroll 
  const handleItemClick = (index) => {
    setActiveIndex(index);
    handleScroll(index);
  };

  // scroll al elemento
  const handleScroll = (index) => {
    const menuItems = menuRef.current.children;
    menuItems[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };

  const menuItems = [
    { name: 'Mis datos', path: '/' },
    { name: 'Mis tareas', path: '/list' },
    { name: 'Mis devoluciones', path: '/refund' },
    { name: 'Mis comunicaciones', path: '/comunication' },
    { name: 'Mis mejores amigos', path: '/friend' },
  ];


  return (
    <header>
      <nav aria-label="Menú principal">
        <div className="header__images-container">
          <img src={menu} className="navbar__header-logo menu" alt="menu icono" />
          <img src={search} className="navbar__header-logo search" alt="buscador icono" />
          <img src={logo} className="navbar__header-logo logo" alt="logo icono" />
          <img src={login} className="navbar__header-logo login" alt="login icono" />
          <img src={cart} className="navbar__header-logo cart" alt="carrito compra icono" />
        </div>
        <div className='menu__container-list'>
          <ul className="menu" ref={menuRef}>
            {menuItems.map((item, index) => (
              <Link key={item.path} to={item.path}>
                <li
                  className={`item__menu ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );

};


export default Header;