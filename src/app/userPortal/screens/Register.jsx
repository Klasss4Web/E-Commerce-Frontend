import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Header from "../components/Header";
import Message from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";
import { register } from "../../../redux/actions/userActions";

const Register = ({ history, location }) => {
  window.scrollTo(0, 0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);

  const { error, loading, userInfo } = userRegister;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

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
      <div className=" col-md-6 container d-flex flex-column justify-content-center align-items-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <h3 className="my-4">Register</h3>
        <form
          className="login col-md-12 col-lg-12 col-11 mb-4 mb-md-0"
          onSubmit={handleRegister}
        >
          <input
            type={"text"}
            placeholder="User name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type={"email"}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={"password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={{ marginBottom: "10px", marginTop: "20px" }}
            type="submit"
          >
            Register
          </button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Have an account?<strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
