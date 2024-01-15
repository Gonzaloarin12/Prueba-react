import { useContext } from "react";
import { carritoContext } from "../../contexto/carritoContext";
import basurero from '../../assets/basurero.svg';

const VistaDeCarrito = () => {
  const { cart, TotalDelCarrito, BorrarCarrito, RemoverProducto  } = useContext(carritoContext);

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">TU COMPRA</h2>
      <hr className="w-20 border-t-2 border-gray-800 mb-4" />

      <ul className="w-full max-w-md">
        {cart.map((producto) => (
          <li
            key={producto.id}
            className="flex items-center mb-6 p-4 border border-gray-300 rounded-lg"
          >
            <img src={producto.img} alt="Imagen del producto" className="w-32" />
            <div className="ml-4">
              <h3 className="text-lg font-bold">{producto.nombre}</h3>
              <p className="text-gray-700">${producto.precio * producto.cantidad}</p>
              <p className="text-gray-700">Cantidad: {producto.cantidad}</p>
              <button onClick={() => RemoverProducto(producto.id) }>
                <img src={basurero} className="w-8" alt="Basurero" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-bold mb-4" >TOTAL: $ {TotalDelCarrito()}</h3>
      <button className="block bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 mt-4 rounded-md mx-auto" onClick={BorrarCarrito}>
      <img src={basurero} alt="Basurero" />
      VACIAR
      </button>
    </section>
  );
};

export default VistaDeCarrito;