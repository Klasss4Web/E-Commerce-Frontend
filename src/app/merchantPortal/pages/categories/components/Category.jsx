import React from "react";

export const Category = ({ category }) => {

  // const dispatch = useDispatch()

  // const handleDeleteCategory = () => {
  //    if (window.confirm("Are you sure??")) {
  //      dispatch(adminDeleteCategory(category?._id, setRefresh));
  //    }
    
  // }
  return (
    <div
      className="card p-3 category-card">
      <img
        className="card-img-top"
        src={category?.image}
        alt="cap"
        height={"150px"}
      />
      <div className="card-body d-flex justify-content-between">
        <p className="card-text">{category?.name}</p>
      </div>
    </div>
  );
};
