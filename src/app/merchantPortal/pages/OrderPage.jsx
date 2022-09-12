import React from 'react'
import { MainOrder } from '../components/orders/MainOrder';

export const OrderPage = ({ match }) => {

  return (
    <div>
      <main className="main-wrap">
        <MainOrder />
      </main>
    </div>
  );
}
