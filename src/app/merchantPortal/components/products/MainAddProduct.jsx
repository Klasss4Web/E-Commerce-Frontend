import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { adminCreateProduct } from "../../../../redux/actions/productActions";
import { ADMIN_ADD_PRODUCT_RESET } from "../../../../redux/constants/productConstants";
import Toast from "../../../userPortal/components/loadingError/Toast";
import Message from "../loadingError/Error";
import Loading from "../loadingError/Loading";

export const MainAddProduct = () => {
  const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [displayImage, setDisplayImage] = useState();

  const dispatch = useDispatch();

  const createProduct = useSelector((state) => state.adminCreateProduct);

  const { loading, error, product } = createProduct;

  const adminGetCategories = useSelector((state) => state.adminGetCategories);
  const { categories } = adminGetCategories;

  useEffect(() => {
    if (product) {
      toast.success("Product successfully added", ToastObjects);
      dispatch({ type: ADMIN_ADD_PRODUCT_RESET });
      setName("");
      setDescription("");
      setImage("");
      setCategory("");
      setPrice(0);
      setCountInStock(0);
      setDisplayImage();
    }
    // eslint-disable-next-line
  }, [product, dispatch]);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    dispatch(
      adminCreateProduct(
        name,
        price,
        description,
        image,
        countInStock,
        category
      )
    );
  };

  return (
    <div className="main-wrap">
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={handleCreateProduct}>
          <div className="content-header">
            <Link to="/products" className="btn btn-primary">
              Go to products
            </Link>
            <h2 className="content-title">Add Product</h2>
            {/* <div style={{ visibility: "hidden" }}>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div> */}
          </div>

          <div className="row mb-4">
            <div className="col-xs-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant={"alert-danger"}>{error}</Message>}
                  {loading && <Loading />}
                  <div className="row">
                    <div className="mb-4 col-lg-6">
                      <label htmlFor="product_count" className="form-label">
                        Product Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Product Title"
                        className="form-control"
                        id="product_title"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-4 col-lg-6">
                      <label htmlFor="product_count" className="form-label">
                        Product Category
                      </label>
                      <select
                        type="text"
                        placeholder="Select product category"
                        className="form-control"
                        id="category"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option>All Categories</option>
                        {categories?.map((category) => (
                          <option value={category?.name} key={category?._id}>
                            {category?.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-4 col-md-6">
                      <label htmlFor="product_price" className="form-label">
                        Price
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Product price"
                        className="form-control"
                        id="product_price"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="mb-4 col-md-6">
                      <label htmlFor="product_count" className="form-label">
                        Quantity Remaining
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Available Product"
                        className="form-control"
                        id="product_count"
                        required
                        value={countInStock}
                        onChange={(e) => setCountInStock(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="product_description" className="form-label">
                      Product description
                    </label>
                    <textarea
                      type="text"
                      placeholder="Enter Product Description"
                      className="form-control"
                      id="product_description"
                      rows={"7"}
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_image" className="form-label">
                      Product Images
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Product image url"
                      className="form-control"
                      id="product_image"
                      // value={image}
                      // onChange={(e) => setImage(e.target.value)}
                    />
                    <input
                      type="file"
                      className="form-control mt-3"
                      onChange={(e) => {
                        setDisplayImage(
                          URL.createObjectURL(e.target.files?.[0])
                        );
                        setImage(e.target.files?.[0]);
                      }}
                    />
                  </div>
                  {loading ? (
                    <>
                      <button>
                        {" "}
                        <i class="fa fa-spinner fa-spin"></i>Loading
                      </button>
                    </>
                  ) : (
                    <button style={{ cursor: "pointer" }}>Add to store</button>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xs col-lg-4 rounded">
              <img
                src={displayImage}
                width="100%"
                height={"300px"}
                style={{ borderRadius: "10px" }}
                alt=""
              />
              <i style={{ color: "red", textDecoration: "italic" }}>
                Product added would require admin approval before it can be
                displayed for all to see. Please ensure to enter enough details
              </i>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
