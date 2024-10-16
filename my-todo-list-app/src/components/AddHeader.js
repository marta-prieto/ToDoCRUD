import menu from '../images/menu-img.svg';
import search from '../images/search-img.svg';
import logo from '../images/logo-img.svg';
import login from '../images/login-img.svg';
import cart from '../images/cart-img.svg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';


const Header = () => {
    const menuRef = useRef(null);
    const handleScroll = (index) => {
    const menuItems = menuRef.current.children;
    menuItems[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };


  return (
   
      <header>
        <nav aria-label="Menú principal">
          <div className="header__images-container">
            <img src={menu} className="navbar__header-logo menu" alt="menu icono"/>
            <img src={search} className="navbar__header-logo search" alt="buscador icono"/>
            <img src={logo} className="navbar__header-logo logo" alt="logo icono"/>
            <img src={login} className="navbar__header-logo login" alt="login icono"/>
            <img src={cart} className="navbar__header-logo cart" alt="carrito compra icono"/>

            {/* <a href="https://www.tiendanimal.es/" aria-label="Ir al inicio">
         <img src="https://www.tiendanimal.es/on/demandware.static/Sites-TiendanimalES-Site/-/default/dw330b2f7b/images/logo/tiendanimal-mobile.svg" className="navbar-header_logo" alt="logo" />
      
        </a> */}
          </div>
          <div className='menu__container-list'>
            <ul className="menu" ref={menuRef}>
              {/*refactorizar con enlaces <a>*/}
              <Link to="/form"><li className='item__menu' onClick={() => handleScroll(0)}>Mis datos</li></Link>
              <Link to="/list"><li className='item__menu' onClick={() => handleScroll(1)}>Mis tareas</li></Link>
              <Link to="/refund"><li className='item__menu' onClick={() => handleScroll(2)}>Mis devoluciones</li></Link>
              <Link to="/comunication"><li className='item__menu' onClick={() => handleScroll(3)}>Mis comunicaciones</li></Link>
              <Link to="/friend"><li className='item__menu' onClick={() => handleScroll(4)}>Mis mejores amigos</li></Link>
            </ul>
          </div>
        </nav>
      </header>
    );
    
};


export default Header;