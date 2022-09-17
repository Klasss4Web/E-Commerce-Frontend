import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Header from '../components/Header'
import { saveShippingAddress } from '../../../redux/actions/cartActions'

const ShippingScreen = ({ history }) => {

  const cart = useSelector(state=>state.cart)
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address);
  const [city, setcity] = useState(shippingAddress?.city);
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode);
  const [country, setCountry] = useState(shippingAddress?.country);

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    const payload = {
      city,
      address,
      country,
      postalCode,
    }
    dispatch(saveShippingAddress(payload))
    history.push("/payment")
  }

  return (
    <div className="row" style={{ height: "78vh" }}>
      <div className="col-12 col-md-6 d-flex jusify-content-center align-items-center">
        <img
          width={"100%"}
          height="100%"
          style={{ borderRadius: "10px" }}
          src="https://img.freepik.com/premium-vector/e-commerce-icon-robotic-hand-internet-shopping-online-purchase-add-cart_127544-586.jpg?w=2000"
          alt=""
        />
      </div>
      <div className=" col-md-6 container d-flex flex-column justify-content-center align-items-center py-4 py-md-0">
        <form
          className="login col-md-12 col-lg-12 col-11"
          onSubmit={submitHandler}
        >
          <h6>DELIVERY ADDRESS</h6>
          <input
            type={"text"}
            placeholder="Enter address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type={"text"}
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setcity(e.target.value)}
          />
          <input
            type={"text"}
            placeholder="Enter postal code"
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            type={"text"}
            placeholder="Enter country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit" className="mt-4">
            {/* <Link to="/payment" className="text-white"> */}
            Continue
            {/* </Link> */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShippingScreen