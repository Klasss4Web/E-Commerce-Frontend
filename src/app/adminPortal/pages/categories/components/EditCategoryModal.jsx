import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategoryAction } from "../../../../../redux/actions/categoriesActions";

export const EditCategoryModal = ({ loading, error, category, setRefresh }) => {
  const [name, setName] = useState(() => category?.name);
  const [description, setDescription] = useState(() => category?.description);
  const [image, setImage] = useState(() => category?.image);
  const [imageUrl, setimageUrl] = useState(() => category?.image);
  const [file, setFile] = useState(() => category?.image);
  const dispatch = useDispatch();

  const handleUpdateCategory = () => {
    const payload = {
      ...category,
      name,
      description,
      image: image || imageUrl,
    };
    dispatch(updateCategoryAction(payload, setRefresh));
  };

  return (
    <div>
      {/* <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdropModal"
      >
        
        Add New Category
      </button> */}
      <div
        // id={category?._id}
        type="button"
        className="px-2"
        data-bs-toggle="modal"
        data-bs-target={`#staticBackdropModal1${category?._id}`}
      
        style={{
          border: "1px solid green",
          borderRadius: "5px",
          color: "green",
        }}
      >
        <i className="fas fa-pen"></i>
      </div>

      <div
        className="modal fade"
        id={`staticBackdropModal1${category?._id}`}
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
                Edit Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ width: "100%" }}>
              <label htmlFor="name">Name</label>

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

              <label htmlFor="image">Image</label>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <input
                  placeholder={
                    image?.name || "Enter Image Url or click the plus sign"
                  }
                  style={{
                    width: "80%",
                    height: "40px",
                    borderRadius: "5px",
                    border: "1px solid #d4d4d4",
                    marginTop: "10px",
                    marginBottom: "15px",
                    paddingLeft: "10px",
                    paddingRight: "20px",
                  }}
                  value={imageUrl}
                  onChange={(e) => setimageUrl(e.target.value)}
                />
                <div style={{ position: "relative" }}>
                  <i className="fa fa-plus"></i>
                  <img
                    width={"40px"}
                    height="40px"
                    style={{ borderRadius: "50%" }}
                    src={
                      file ||
                      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FkZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    alt=""
                  />
                  <input
                    type={"file"}
                    name="file"
                    cursor={"pointer"}
                    // value={image}
                    style={{
                      position: "absolute",
                      opacity: 0,
                      cursor: "pointer",
                      zIndex: "100",
                      background: "transparent",
                      right: "0%",
                      width: "80px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    onChange={(e) => {
                      setImage(e.target.files?.[0]);
                      setFile(URL.createObjectURL(e.target.files?.[0]));
                    }}
                  />
                </div>
              </div>

              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Add description"
                style={{
                  width: "100%",
                  height: "100px",
                  borderRadius: "5px",
                  border: "1px solid #d4d4d4",
                  marginTop: "10px",
                  marginBottom: "15px",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

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
                  disabled={!name || !image}
                  onClick={handleUpdateCategory}
                >
                  Edit Category
                </button>
              )}
              {/* <button
                type="button"
                className="btn btn-primary mb-4"
                data-bs-dismiss="modal"
                disabled={!name || !image}
                onClick={handleCreate}
              >
                Add Category
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
