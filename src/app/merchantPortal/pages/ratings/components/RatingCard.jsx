import React from "react";
import Slider from "react-slick";
import { Rating } from "../../../../userPortal/components/homeComponents/Rating";
import moment from "moment";

export const RatingCard = ({ reviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        width: "99%",
        // height: "300px",
        marginBottom: "20px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "10px",
        padding: "10px"
      }}
    >
      <Slider {...settings}>
        <div className="slide">
          <div
            className="slide-image"
            style={
              {
                // width: "30%",
                // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }
            }
          >
            <img
              width={"100%"}
              height="200px"
              src={reviews?.image}
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="slide-text">
            <Rating text={""} value={reviews?.rating} />
            <h6>Total Reviews: {reviews?.numReviews}</h6>
            <h5>Product: {reviews?.name}</h5>
            <h6>Description: {reviews?.description}</h6>
            <h6>Merchant: {reviews?.merchant}</h6>
            <h6>Price: {reviews?.price}</h6>

            <h6>
              Date Added: {moment(reviews?.createdAt).format("MMM Do YYYY")}
            </h6>
            <h6>Amount Left: {reviews?.countInStock}</h6>
          </div>
        </div>
        {reviews?.reviews?.map((individualReview) => (
          <div className="slide" key={individualReview?._id}>
            <div className="slide-image">
              <img
                width={"100%"}
                height="200px"
                src={reviews?.image}
                alt=""
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="slide-text">
              <h5>{individualReview?.name}</h5>
              <Rating
                text={individualReview?.comment}
                value={individualReview?.rating}
              />
              <h6>
                {moment(individualReview?.createdAt).format("MMM Do YYYY")}
              </h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
