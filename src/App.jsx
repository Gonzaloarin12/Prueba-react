import './App.css';
import ContenedorDeProductos from './componets/ContedorDeProdcutos/ContenedorDeProductos';
import DetalleDeProducto from './componets/detallesDeProductos/detalleDeProductos';
import Navbar from './componets/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { carritoContext } from './contexto/carritoContext';
import VistaDeCarrito from './componets/Carrito/Carrito';

function App() {
  const [cart, setCart] = useState([]);
  

  const agregarCarrito = (producto) => {
    setCart([...cart, producto]);
  };

  const isInCart = (id) => {
    return cart.some((producto) => producto.id === id);
  };

  const itemsEnCarrito = () => {
    return cart.reduce((acc, producto) => acc + producto.cantidad, 0);
  };

  const TotalDelCarrito = () => {
    return cart.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0)};
  
  const BorrarCarrito = () => {
    setCart([])
  }

  
  const RemoverProducto = (id) => {
    setCart( cart.filter(producto => producto.id !== id))
  }



  return (
    <carritoContext.Provider value={{ agregarCarrito, isInCart, itemsEnCarrito, cart, TotalDelCarrito, BorrarCarrito, RemoverProducto }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ContenedorDeProductos />} />
          <Route path='/productos/:categoriaId' element={<ContenedorDeProductos />} />
          <Route path='/producto/:itemID' element={<DetalleDeProducto />} />
          <Route path='/carrito' element={<VistaDeCarrito />} />
        </Routes>
      </BrowserRouter>
    </carritoContext.Provider>
  );
}

export default App;