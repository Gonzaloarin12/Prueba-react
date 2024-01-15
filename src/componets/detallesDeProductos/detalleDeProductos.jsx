import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { carritoContext } from "../../contexto/carritoContext";

const DetalleDeProducto = ({ producto, onAgregar, onClose }) => {
  const { agregarCarrito, isInCart } = useContext(carritoContext);
  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };


  const handleAgregarCarrito = () => {
    const productoCarrito = {
      ...producto,
      cantidad
    };

    agregarCarrito(productoCarrito);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
      <img className="w-full h-40 object-cover mb-2" src={producto.img} alt={producto.nombre} />
      <p className="text-gray-600 text-sm mb-2">{producto.descripcion}</p>
      <p className="text-lg font-bold mb-2">Precio: ${producto.precio}</p>

      {isInCart(producto.id) ? (
        <>
          <Link to="/carrito">
            <button className="block bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded-md mx-auto">
              Terminar Mi Compra
            </button>
          </Link>

          <button
            className="block text-gray-500 hover:text-gray-700 text-lg font-bold mt-4"
            onClick={onClose}
          >
            Cerrar
          </button>
        </>
      ) : (
        <>
          <div className="flex items-center mb-4">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded-md mr-2"
              onClick={handleRestar}
            >
              -
            </button>

            <span>{cantidad}</span>

            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded-md ml-2"
              onClick={handleAgregar}
            >
              +
            </button>
          </div>

          <button
            className="block bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 mt-4 rounded-md mx-auto"
            onClick={handleAgregarCarrito}
          >
            Agregar al Carrito
          </button>

          <button
            className="block text-gray-500 hover:text-gray-700 text-lg font-bold mt-4"
            onClick={onClose}
          >
            Cerrar
          </button>
        </>
      )}
    </div>
  );
};

export default DetalleDeProducto;