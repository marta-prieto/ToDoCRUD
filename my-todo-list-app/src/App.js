import logo from './images/logo-img.svg';
import menu from './images/menu-img.svg';
import search from './images/search-img.svg';
import cart from './images/cart-img.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
    <nav aria-label="Menú principal">
      <div className="header__images-container">
      <img src= { menu } className="navbar__header-logo menu" alt="menu icono"/>
      <img src= { search } className="navbar__header-logo search" alt="buscador icono"/>
      <img src= { logo } className="navbar__header-logo logo" alt="logo icono"/>
      <img src= { cart } className="navbar__header-logo cart" alt="carrito compra icono"/>

        {/* <a href="https://www.tiendanimal.es/" aria-label="Ir al inicio">
         <img src="https://www.tiendanimal.es/on/demandware.static/Sites-TiendanimalES-Site/-/default/dw330b2f7b/images/logo/tiendanimal-mobile.svg" className="navbar-header_logo" alt="logo" />
      
        </a> */}
      </div>
      <div className='menu__container-list'>
      <ul className="menu">
        <li className='item__menu'>Mis datos</li>
        <li className='item__menu'>Mis tareas</li>
        <li className='item__menu'>Mis devoluciones</li>
        <li className='item__menu'>Mis comunicaciones</li>
        <li className='item__menu'>Mis mejores amigos</li>
      </ul>
    </div>
    </nav>
  
  </header>

  <main>

  </main>

  <footer>
 
  </footer>



  
    
    </div>
  );
}

export default App;
