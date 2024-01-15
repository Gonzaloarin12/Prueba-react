
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetalleDeProducto from '../detallesDeProductos/detalleDeProductos';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Firebase/config';


const ContenedorDeProductos = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const { categoriaId } = useParams();

  useEffect(() => {
    const productoRef = collection(db, 'Productos')
    const docRef = categoriaId
                      ? query(productoRef, where('categoria', '==', categoriaId))
                      : productoRef 
    getDocs( docRef )
    .then((querySnapshot) => {
      const docs = querySnapshot.docs.map(doc =>{
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      console.log(docs)
      setProductos( docs)
    })
  }, [categoriaId]);

  const handleAbrirDetalle = (producto) => {
    setProductoSeleccionado(producto);
  };

  const handleCerrarDetalle = () => {
    setProductoSeleccionado(null);
  };

  const handleAgregarAlCarrito = (cantidad) => {
    console.log(`Agregado al carrito: ${cantidad} unidades de ${productoSeleccionado.nombre}`);
    handleCerrarDetalle();
  };

  return (
    <section className="container mx-auto mt-8 mb-8">
      <h2 className="text-3xl font-bold mb-4">PRODUCTOS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.map((item) => (
          <article key={item.id} className="bg-gray-100 rounded-md shadow-md border border-black">
            <img className="w-full h-40 object-contain" src={item.img} alt={item.nombre} />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{item.nombre}</h3>
              <hr className="my-2" />
              <p className="text-gray-600 text-sm mb-2">{item.descripcion}</p>
              <p className="text-lg font-bold">Precio: ${item.precio}</p>
              <button
                className="block bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 mt-4 rounded-md mx-auto"
                onClick={() => handleAbrirDetalle(item)}
              >
                AGREGAR
              </button>
            </div>
          </article>
        ))}
      </div>

      {productoSeleccionado && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 max-w-md rounded-md shadow-md">
            <DetalleDeProducto
              producto={productoSeleccionado}
              onAgregar={handleAgregarAlCarrito}
              onClose={handleCerrarDetalle}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default ContenedorDeProductos;