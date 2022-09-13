import { timeago } from "../../../../../utils/timeAgo";

export const ViewDetails = ({
  loading,
  notification,
  handleApprove,
}) => {


  return (
    <div>
      <button
        className="btn btn-success sm-btn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#staticBackdropModal1${notification?._id}`}
      >
        View Details
      </button>
      {/* <div
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#staticBackdropModal1${category?._id}`}
        className="px-2"
        style={{
          border: "1px solid green",
          borderRadius: "5px",
          color: "green",
        }}
      >
        <i className="fas fa-pen"></i>
      </div> */}

      <div
        className="modal fade"
        id={`staticBackdropModal1${notification?._id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel1">
                {notification?.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ width: "100%" }}>
              <h5 className="mb-1">Description</h5>
              <h6>{notification?.description}</h6>
              <hr />

              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="my-0" style={{ fontWeight: "bold" }}>
                    Product Name
                  </h6>
                  <h6>{notification?.product?.name}</h6>
                  <h6 className="my-1" style={{ fontWeight: "bold" }}>
                    Product Description
                  </h6>
                  <h6>{notification?.product?.description}</h6>
                  <h6 className="my-0" style={{ fontWeight: "bold" }}>
                    Product Price
                  </h6>
                  <h6>{notification?.product?.price}</h6>
                  <h6 className="my-1" style={{ fontWeight: "bold" }}>
                    Quantity
                  </h6>
                  <h6>{notification?.product?.countInStock}</h6>
                </div>
                <img src={notification?.product?.image} alt="" />
              </div>
            </div>

            {notification?.status === "Pending" ? (
              <div className="modal-footer">
                {loading ? (
                  <>
                    <button>
                      {" "}
                      <i className="fa fa-spinner fa-spin"></i>Loading
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary mb-4"
                    data-bs-dismiss="modal"
                    // disabled={!name || !image}
                    onClick={() => handleApprove(notification)}
                  >
                    Approve
                  </button>
                )}
              </div>
            ) : (
              <div className="my-3 px-3 pb-4">
                <button className="" disabled>
                  Resolved
                </button>
                <p>{timeago(notification?.createdAt)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
