import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ItemDetailCOntainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import Cart from './componentes/Cart';
import { CartProvider } from './componentes/CartContext';

function App() {

  return (
    <>
      <div className='App'  >
        <CartProvider>
          <BrowserRouter >
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} ></Route>
              <Route path='/category/:id' element={<ItemListContainer />} ></Route>
              <Route path='/item/:id' element={<ItemDetailCOntainer />}>  </Route>
              <Route path='/cart' element={<Cart />}>  </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  );
}

export default App;


