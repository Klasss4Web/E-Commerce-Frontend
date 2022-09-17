import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../../redux/actions/userActions";
import { greet } from "../../../utils/greet";

import logo from "../assets/logo.png";

export const Header = ({ toggle, sideBarActive, showSidebar }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [toggleSide] = useState(false);

  const adminNotificationList = useSelector(
    (state) => state?.adminNotificationList
  );
  const { notifications } = adminNotificationList;
  const pendingNotifications = notifications?.data?.filter(
    (notif) => notif?.status === "Pending"
  );

    const companyProfile = useSelector((state) => state.companyDetails);
    const { companyDetails } = companyProfile;

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleToggle = () => {
    toggle(!toggleSide);
  };
  return (
    <header className="main-header navbar">
      <div className="col-search">
        <form className="searchform">
          <div
            className="input-group"
            // onClick={() => history.push("/dashboard")}
          >
            <img
              src={logo}
              alt="logo"
              width={"30px"}
              height="30px"
              cursor="pointer"
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/dashboard")}
            />
            {showSidebar && (
              <i
                className="md-28 fas fa-bars d-md-none"
                cursor="pointer"
                onClick={() => handleToggle()}
              ></i>
            )}

            {/* <input
              list="search_terms"
              type={"text"}
              className="form-control"
              placeholder="search..."
            /> */}
            {/* <button className="btn bg btn-light" type="button">
              <i className="far fa-search"></i>
            </button> */}
          </div>

          <datalist id="search_terms">
            <option value={"Products"} />
            <option value={"New Orders"} />
            <option value={"Samsung"} />
            <option value={"Google"} />
          </datalist>
        </form>
      </div>
      <p className="d-none d-md-block" style={{ color: "#0E6B60" }}>
        {companyDetails?.companyEmail}
      </p>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h6 className="fw-bold" style={{ color: "#0E6B60" }}>
          {companyDetails?.companyName}
        </h6>
        <p className="d-md-none" style={{ color: "#0E6B60" }}>
          {greet()}
        </p>
      </div>
      <p className="d-md-block d-none" style={{ color: "#0E6B60" }}>
        {greet()}
      </p>
      <div className="col-nav">
        {/* <button
          className="btn btn-icon btn-mobile me-auto"
          data-trigger="#offcanvas_aside"
        >
          <i className="md-28 fas fa-bars"></i>
        </button> */}
        <ul className="nav">
          {/* <li className="nav-item">
            <Link className="nav-link btn-icon" title="Dark-mode" to={"#"}>
              <i className="fas fa-moon"></i>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to={"/notifications"}>
              <i className="fa fa-bell fa-lg" style={{ color: "#0E6B60" }}></i>
              <small
                className=""
                style={{
                  borderRadius: "50%",
                  background: "red",
                  color: "#fff",
                  padding: "2px",
                  marginLeft: "-5px",
                  marginTop: "10px",
                  fontSize: "12px",
                }}
              >
                {pendingNotifications?.length || 0}
              </small>
            </Link>
          </li>
          <li className="dropdown nav-item">
            <Link
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              to={"#"}
            >
              <img
                className="img-xs rounded-circle"
                width={"30px"}
                height="30px"
                src={logo}
                alt="user"
              />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/profile">
                My Profile
              </Link>
              <Link className="dropdown-item" to="/settings">
                My Settings
              </Link>
              <Link
                className="dropdown-item text-danger"
                to="#"
                onClick={handleLogout}
              >
                Log Out
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};
