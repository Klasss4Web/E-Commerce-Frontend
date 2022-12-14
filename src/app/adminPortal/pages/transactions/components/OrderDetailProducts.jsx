// import React from 'react'
// import { ImFileEmpty } from 'react-icons/im';
// import { Link } from 'react-router-dom';

// export const OrderDetailProducts = ({ order=[], loading }) => {


//    return (
//     <>
//       {order?.length > 0 ? (
//      <div>
//        <table className="table-border table-lg">
//          <thead>
//            <tr>
//              <th style={{ width: "40%" }}>Product</th>
//              <th style={{ width: "20%" }}>Unit Price</th>
//              <th style={{ width: "20%" }}>Quantity</th>
//              <th style={{ width: "20%" }}>Total</th>
//            </tr>
//          </thead>
//        </table>
//        <tbody>
//          {order?.orderItems?.map((item, index) => (
//            <tr key={index}>
//              <td style={{ width: "40%" }}>
//                <Link className="itemside" to="#">
//                  <div className="left">
//                    <img
//                      src={item?.image}
//                      alt={item?.name}
//                      style={{ height: "40px", width: "40px" }}
//                      className="img-xs"
//                    />
//                  </div>
//                  <p className="info">{item?.name}</p>
//                </Link>
//              </td>
//              <td style={{ width: "20%" }}>${item?.price}</td>
//              <td style={{ width: "20%" }}>{item?.qty}</td>
//              <td style={{ width: "20%" }}>{item?.qty * item?.price}</td>
//            </tr>
//          ))}

//          <tr>
//            <td colSpan={"4"}>
//              <article className="float-end">
//                <dl className="dlist">
//                  <dt>Subtotal:</dt>
//                  <dd>${order?.itemPrice}</dd>
//                </dl>
//                <dl className="dlist">
//                  <dt>Shipping Cost:</dt>
//                  <dd>${order?.shippingPrice}</dd>
//                </dl>
//                <dl className="dlist">
//                  <dt>Grand Total:</dt>
//                  <dd>${order?.totalPrice}</dd>
//                </dl>
//                <dl className="dlist">
//                  <dt className="text-muted">Status:</dt>
//                  <dd>
//                    {order?.isPaid ? (
//                      <span className="">Payment done</span>
//                    ) : (
//                      <span className="">Not Paid</span>
//                    )}
//                  </dd>
//                </dl>
//              </article>
//            </td>
//          </tr>
//        </tbody>
//      </div>
//     ) : (
//         <div className="d-flex justify-content-center align-items-center flex-column">
//           <ImFileEmpty size="30%" />
//           <h4 className="mt-3">No Order Available At This Time</h4>
//         </div>
//       )}
//     </>
//    )}
