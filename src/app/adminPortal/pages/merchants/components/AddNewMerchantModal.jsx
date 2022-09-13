import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adminCreateMerchantAction } from "../../../../../redux/actions/merchantactions";

export const AddNewMerchantModal = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch()

  const handleCreate = () => {

    const payload = {
      name,
      email,
      image,
      userType: "merchant"
    }
    dispatch(adminCreateMerchantAction(payload));
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdropModal"
      >
        Add New Merchant
      </button>

      <div
        className="modal fade"
        id="staticBackdropModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add New Merchant
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ width: "100%" }}>
              <label htmlFor="status">Name</label>

              <input
                placeholder="Enter full name"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "5px",
                  border: "1px solid #d4d4d4",
                  marginTop: "10px",
                  marginBottom: "15px",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="status">Email</label>

              <input
                placeholder="Enter email"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "5px",
                  border: "1px solid #d4d4d4",
                  marginTop: "10px",
                  marginBottom: "15px",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="status">Image</label>

              <input
                placeholder="Select Image"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "5px",
                  border: "1px solid #d4d4d4",
                  marginTop: "10px",
                  marginBottom: "15px",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                }}
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary mb-4"
                data-bs-dismiss="modal"
                disabled={!name || !email}
                onClick={handleCreate}
              >
                Add Merchant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
