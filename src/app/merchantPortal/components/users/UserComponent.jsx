import { Link } from 'react-router-dom';
import Message from '../../../userPortal/components/loadingError/Error';
import Loading from '../../../userPortal/components/loadingError/Loading';


export const UserComponent = ({
  users,
  error,
  loading,
  value,
  handleFilter,
}) => {

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
        <div>
          <Link to="#" className="btn btn-primary">
            <i className="material-icons md-plus"></i>
            Create New
          </Link>
        </div>
      </div>
      <div className="card mb-4">
        <header className="card-header">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
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
        <div className="card-body">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row row-cols-sm-2 row cols-lg-3 row-cols-xl-4">
              {users?.map((user) => (
                <div key={user?._id} className="col mb-4">
                  <div className="card card-user shadow-sm">
                    <div className="card-header">
                      <img
                        className="img-md img-avatar"
                        src={user?.image}
                        alt={"User"}
                        style={{ height: "170px", width: "100%" }}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mt-5 text-truncate d-inline-block">
                        {user?.name}
                      </h5>
                      <div className="card-text text-muted">
                        {user?.isAdmin ? (
                          <p className="m-0">Admin</p>
                        ) : (
                          <p className="m-0">Customer</p>
                        )}

                        <p>
                          <a
                            href={`mailto:${user?.email}`}
                            className="text-truncate d-inline-block"
                            style={{ maxWidth: "200px" }}
                          >
                            {user?.email}
                          </a>
                        </p>
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
