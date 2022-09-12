import React from 'react'
import { MainEditProduct } from '../components/products/MainEditProduct'

export const ProductEditPage = ({ match }) => {

  const productId = match.params?.id
  
  return (
    <div>
      <main className='main-wrap'>
        <MainEditProduct productId={productId} />
      </main>
    </div>
  );
}
