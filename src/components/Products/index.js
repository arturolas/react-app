import React, { useState, useEffect } from 'react';

import Product from '../Product';

import { data } from './data';


function Products(props) {
  const [products, setProducts] = useState([]);

  // First time the component is rendered
  useEffect(() => {
    setTimeout(() => {
      if (props.type === 'new') {
        const newProducts = data.products.filter((product) => product.exclusive === true)
        setProducts(newProducts);
      } else {
        setProducts(data.products);
      }

    }, 200);
  }, [props.type])


  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-0 lg:grid-cols-4 gap-4">
        {
          products.length === 0 ? <p>Loading producsts...</p> : ''
        }
        {
          products.map((product, index) => <Product key={index} product={product} />)
        }

      </div>
    </div>
  )
}

export default Products;