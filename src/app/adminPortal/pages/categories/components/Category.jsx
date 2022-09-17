import React from "react";
import { useDispatch } from "react-redux";
import { adminDeleteCategory } from "../../../../../redux/actions/categoriesActions";
import { EditCategoryModal } from "./EditCategoryModal";

export const Category = ({ category, setRefresh }) => {

  const dispatch = useDispatch()

  const handleDeleteCategory = () => {
     if (window.confirm("Are you sure??")) {
       dispatch(adminDeleteCategory(category?._id, setRefresh));
     }
    
  }

  return (
    <div
      className="card p-3 category-card"
    >
      <img
        className="card-img-top"
        src={category?.image}
        alt="cap"
        height={"150px"}
        // style={{ borderRadius: "10px" }}
      />
      <div
        className="card-body d-flex justify-content-between">
        <p className="card-text">{category?.name}</p>
        <div
        className="call-to-action-wrapper">
          <div>
            <EditCategoryModal category={category} setRefresh={setRefresh} />
          </div>

          <div
            onClick={() => handleDeleteCategory(category?._id)}
            className="px-2 category-delete">
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
