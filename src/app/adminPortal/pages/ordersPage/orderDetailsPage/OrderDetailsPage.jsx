import React from 'react'
import { OrderDetailsMain } from '../components/OrderDetailsMain';

export const OrderDetailsPage = ({ match }) => {

  const orderId = match.params.id;

  return (
    <div>
      <main className="main-wrap">
        <OrderDetailsMain orderId={orderId} />
      </main>
    </div>
  );
}
