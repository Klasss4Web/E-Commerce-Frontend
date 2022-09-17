import { useEffect } from "react";
import { ImFileEmpty } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux"
import { adminGetReviewsActions } from "../../../../redux/actions/productActions";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
import { RatingCard } from "./components/RatingCard";

export const RatingsPage = () => {

  const dispatch = useDispatch();

  const adminGetReviews = useSelector((state) => state.adminGetReviews);
  const { loading, error, reviews } = adminGetReviews


  useEffect(() => {
    dispatch(adminGetReviewsActions());
  },[dispatch]);

  return (
    <div className="p-md-5 p-4">
      <main className="main-wrap">
        <div className="content-header">
          <h2 className="content-title">Reviews</h2>
        </div>
        {error && <Message variant={"alert-danger"}>{error}</Message>}
        {loading && <Loading />}
        {/* <MainRatings /> */}
        {reviews?.data?.length > 0 &&
          reviews?.data?.map((review) => (
            <RatingCard reviews={review} key={review?._id} />
          ))}

        {reviews?.data?.length < 0 && (
          <div className="d-flex justify-content-center align-items-center flex-column">
            <ImFileEmpty size="30%" />
            <h4 className="mt-3">No Rating Available At This Time</h4>
          </div>
        )}
      </main>
    </div>
  );
};
