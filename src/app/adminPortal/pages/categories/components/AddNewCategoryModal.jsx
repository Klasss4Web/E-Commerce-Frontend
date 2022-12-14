import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adminCreateCategoriesAction } from "../../../../../redux/actions/categoriesActions";

export const AddNewCategoryModal = ({ loading, error }) => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const dispatch = useDispatch();

  const handleCreate = () => {
    const payload = {
      name,
      description,
      image: image || imageUrl,
    };
    dispatch(adminCreateCategoriesAction(payload));
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdropModal"
      >
        Add New Category
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
                Add New Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body add-category-body">
              <label htmlFor="name">Name</label>

              <input
                className="add-category-input"
                placeholder="Enter category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="image">Image</label>

              <div className="d-flex align-items-center justify-content-between">
                <input
                  className="add-category-input add-category-input_img"
                  placeholder={
                    image?.name || "Enter Image Url or click the plus sign"
                  }
                 
                  value={imageUrl}
                  onChange={(e) => setimageUrl(e.target.value)}
                />
                <div className="add-category_img-display">
                  <i className="fa fa-plus"></i>
                  <img
                    width={"40px"}
                    height="40px"
                    className="add-category-display-mage"
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
                  onClick={handleCreate}
                >
                  Add Category
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
