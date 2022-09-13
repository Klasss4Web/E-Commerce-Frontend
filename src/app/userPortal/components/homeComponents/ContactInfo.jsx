import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Rating } from './Rating';

export const ContactInfo = () => {

   const productList = useSelector((state) => state.productList);
   const { products } = productList;

  return (
    <div className="contactInfo container">
      <div className="d-flex justify-content-center mb-4">
        <h4>Best Selling Products</h4>
      </div>
      <div className="row">
        {products?.slice(0, 3)?.map((product) => (
          <div
            className="shop col-lg-4 col-md-6 col-sm-6 mb-3"
            key={product?._id}
          >
            <div className="border-product">
              <Link to={`/products/${product?._id}`}>
                <div className="shopBack">
                  <img src={product?.image} alt={product?.name} />
                </div>
              </Link>
              <div className="shoptext">
                <p>
                  <Link to={`/products/${product?._id}`}>{product?.name}</Link>
                </p>
                <Rating
                  value={product?.rating}
                  text={`${product?.numReviews} reviews`}
                />
                <h3>${product?.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="row justify-content-center">
        <div className="col-12 col-md-4 contact-box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Call Us 24x7</h5>
            <p>07035607059</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Headquarter</h5>
            <p>Lekki, Lagos</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Whatsapp</h5>
            <p>07035607059</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
