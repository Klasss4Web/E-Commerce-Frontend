import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { adminDeleteUserAction } from "../../../../../redux/actions/userActions";
import Message from "../../../../userPortal/components/loadingError/Error";
import Loading from "../../../../userPortal/components/loadingError/Loading";
import Toast from "../../../components/loadingError/Toast";
import { AddNewUserModal } from "./AddNewUserModal";
import { UpdateUserStatusModal } from "./UpdateUserStatusModal";

export const UserComponent = ({
  users,
  error,
  loading,
  value,
  setRefresh,
  handleFilter,
}) => {
  const dispatch = useDispatch();

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure??")) {
      dispatch(adminDeleteUserAction(userId, setRefresh));
    }
  };

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Users</h2>
        <div>
          <AddNewUserModal setRefresh={setRefresh} />
          {/* <Link to="#" className="btn btn-primary">
            <i className="material-icons md-plus"></i>
            Create New
          </Link> */}
        </div>
      </div>
      <div className="card mb-4">
        <Toast />
        <header className="card-header">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto mb-2 mb-md-0">
              <input
                type="text"
                placeholder="Search User"
                className="form-control"
                value={value}
                onChange={handleFilter}
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
                <option>Show All</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status: all</option>
                <option>Active only</option>
                <option>Disabled</option>
                <option>Show All</option>
              </select>
            </div>
          </div>
        </header>

        {/*  Card */}
        <div className="card-body" style={{ marginTop: "100px" }}>
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row row-cols-sm-2 row cols-lg-3 row-cols-xl-4">
              {users?.map((user) => (
                <div
                  key={user?._id}
                  // className="col mb-4"
                  style={{
                    marginBottom: "100px",
                    // marginTop: "20px"
                  }}
                >
                  <div
                    className="card card-user mb-4"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    <div className="card-header card_header">
                      <img
                        className="img-md img-avatar"
                        src={
                          user?.image ||
                          "https://media.istockphoto.com/photos/girl-with-headphones-and-neon-lighting-stylized-3d-character-picture-id1330874201?b=1&k=20&m=1330874201&s=170667a&w=0&h=GL7X6kheNB4ip-Mw8B0aI3KbUfWCzRthJqCNv5qq2jg="
                        }
                        alt={`${user?.name}`}
                        style={{ height: "160px", width: "100%" }}
                      />
                    </div>
                    <div className="card-body mt-2">
                      <h5 className="card-title mt-5 text-truncate d-inline-block m-0">
                        {user?.name}
                      </h5>
                      <div className="card-text text-muted">
                        {user?.isAdmin ? (
                          <div className="d-flex justify-content-between m-0">
                            <p className="m-0">Admin</p>
                            <p
                              className={
                                user?.status.toLowerCase() === "active"
                                  ? "active-status m-0"
                                  : "inactive-status m-0"
                              }
                            >
                              {user?.status}
                            </p>
                          </div>
                        ) : (
                          <div className="d-flex justify-content-between m-0">
                            <p className="m-0">Customer</p>
                            <p
                              className={
                                user?.status.toLowerCase() === "active"
                                  ? "active-status m-0"
                                  : "inactive-status m-0"
                              }
                            >
                              {user?.status}
                            </p>
                          </div>
                        )}

                        <p className="m-0">
                          <a
                            href={`mailto:${user?.email}`}
                            className="text-truncate d-inline-block"
                            style={{ maxWidth: "200px" }}
                          >
                            {user?.email}
                          </a>
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="px-2 category-update">
                          <UpdateUserStatusModal
                            data={user}
                            setRefresh={setRefresh}
                          />
                        </div>

                        <div
                          onClick={() => handleDeleteUser(user?._id)}
                          className="px-2 category-delete"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Nav */}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
