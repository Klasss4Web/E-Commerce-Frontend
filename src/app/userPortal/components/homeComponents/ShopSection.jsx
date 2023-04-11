import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { Pagination } from "./Pagination";
// import products from "../../Products"
// import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../../redux/actions/productActions";
import Loading from "../loadingError/Loading";
import Message from "../loadingError/Error";
import { addItemToCart } from "../../../../redux/actions/cartActions";

export const ShopSection = ({ keyword, pageNumber }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const companyProfile = useSelector((state) => state.companyProfile);
  const { companyDetails } = companyProfile;

  const addToCart = (productId, quantity = 1) => {
    dispatch(addItemToCart(productId, quantity));
  };

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  console.log("companyDetails", companyDetails);
  return (
    <div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products?.map((product) => (
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
                          <div
                            className="shoptext"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="">
                              <p>
                                <Link to={`/products/${product?._id}`}>
                                  {product?.name}
                                </Link>
                              </p>
                              <Rating
                                value={product?.rating}
                                text={`${product?.numReviews} reviews`}
                              />
                              <h3>${product?.price}</h3>
                            </div>
                            <p
                              style={{
                                cursor: "pointer",
                                fontSize: "12px",
                                width: "20%",
                                border: "1px solid green",
                                padding: "5px",
                                height: "50px",
                                borderRadius: "10px",
                              }}
                              onClick={() => addToCart(product?._id, 1)}
                            >
                              Add To Cart
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                <Pagination
                  page={page}
                  pages={pages}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
