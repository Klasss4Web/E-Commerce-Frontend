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
      className="card category-card"
 
    >
      <img
        className="card-img-top"
        src={category?.image}
        alt="cap"
        height={"150px"}
        style={{ borderRadius: "10px" }}
      />
      <div
        className="card-body"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p className="card-text">{category?.name}</p>
        <div
          className=""
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <EditCategoryModal category={category} setRefresh={setRefresh} />
          </div>

          <div
            onClick={() => handleDeleteCategory(category?._id)}
            className="px-2"
            style={{
              border: "1px solid red",
              borderRadius: "5px",
              color: "red",
              cursor: "pointer",
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
