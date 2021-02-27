import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../components/Products';
import Template from '../components/Template';

function ProductsPage() {
  let { type } = useParams();
  return (
    <Template children={<Products type={type} />} />
  )

}

export default ProductsPage;