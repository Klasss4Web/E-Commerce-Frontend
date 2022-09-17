import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Header from "../components/Header";
import Message from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";
import { login } from "../../../redux/actions/userActions";
// import Toast from "../components/loadingError/Toast";

export const Login = ({ history, location }) => {
  // window.scrollTo(0, 0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);

  const { error, loading, userInfo } = userLogin;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
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
          style={{borderRadius: "10px"}}
          src="https://img.freepik.com/premium-vector/e-commerce-icon-robotic-hand-internet-shopping-online-purchase-add-cart_127544-586.jpg?w=2000"
          alt=""
        />
      </div>

      {/* <Header /> */}
      <div className=" col-md-6 container d-flex flex-column justify-content-center align-items-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <h3 className="my-4">Login</h3>
        <form
          className="login col-md-12 col-lg-12 col-11"
          onSubmit={handleLogin}
        >
          <input
            type={"email"}
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{ marginBottom: "20px" }}
            type={"password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Dont have an account yet? Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
