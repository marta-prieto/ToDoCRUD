
import menu from './images/menu-img.svg';
import search from './images/search-img.svg';
import logo from './images/logo-img.svg';
import login from './images/login-img.svg';
import cart from './images/cart-img.svg';
import './App.scss';
import { useRef } from 'react';

function App() {

  const menuRef = useRef(null);
  const hadleScroll = (index) => {
    const menuItems = menuRef.current.children;
    menuItems[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };


  return (
    <div className="App">
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
              <li className='item__menu' onClick={() => hadleScroll(0)}>Mis datos</li>
              <li className='item__menu' onClick={() => hadleScroll(1)}>Mis tareas</li>
              <li className='item__menu' onClick={() => hadleScroll(2)}>Mis devoluciones</li>
              <li className='item__menu' onClick={() => hadleScroll(3)}>Mis comunicaciones</li>
              <li className='item__menu' onClick={() => hadleScroll(4)}>Mis mejores amigos</li>
            </ul>
          </div>
        </nav>

      </header>

      <main>
            <section>
              <p>Mis datos</p>
              <form action="#" method="POST">
              <label for="name">Nombre</label>
              <input type="text" id="name" name="name" required/>

              <label for="email">Email</label>
              <input type="email" id="email" name="email" required/>

              <label for="tel">Teléfono</label>
              <input type="tel" id="tel" name="tel" required pattern="[0-9]{9}" title="Debe ingresar 9 dígitos"/>

              <button type="submit">Guardar</button>
              </form>
            </section>  
      </main>

      <footer>

      </footer>





    </div>
  );
}

export default App;
