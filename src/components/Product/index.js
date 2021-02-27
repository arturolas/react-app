import React from 'react';

function Product(props) {
  const { product } = props;

  return <div className="mb-5">
    <figure className="mb-3">
      <img src={product.image.url} alt="" />
    </figure>
    {
      product.exclusive ? <h3 className="font-medium text-orange">Exclusivo miembros nike</h3> : ''
    }
    <h3 className="font-medium">{product.name}</h3>
    {
      product.gender === 'male' ? <p className="font-light text-gray-400">Calzado de carrera para hombre</p> : <p className="font-light text-gray-400">Calzado de carrera para mujer</p>
    }
    <p className="text-gray-400">{product.colors.length} color</p>
    <p className="mt-5">${product.price}</p>
  </div>
}

export default Product;