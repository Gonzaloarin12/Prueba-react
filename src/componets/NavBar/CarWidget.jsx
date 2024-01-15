import { Link } from 'react-router-dom';
import carritoIcon from '../../img/carrito.png';
import { useContext } from 'react';
import { carritoContext } from '../../contexto/carritoContext'; // Asegúrate de importar el contexto correcto

const CarWidget = () => {
  const { itemsEnCarrito } = useContext(carritoContext);

  return (
    <Link to="/carrito" className="flex items-center">
      <img src={carritoIcon} alt="Icono de Carrito" className="w-8 h-8" />
      <span className="bg-blue-500 text-white rounded-full px-2 py-1 ml-1">{itemsEnCarrito()}</span>
    </Link>
  );
};

export default CarWidget;