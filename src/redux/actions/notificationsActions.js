import axios from "axios";
import { toast } from "react-toastify";
import { ToastObjects } from "../../app/adminPortal/components/loadingError/toastObject";
import { baseUrl } from "../../app/services/requestUrl";
import { ADMIN_GET_NOTIFICATIONS_FAILURE, ADMIN_GET_NOTIFICATIONS_REQUEST, ADMIN_GET_NOTIFICATIONS_SUCCESS, ADMIN_UPDATE_NOTIFICATIONS_FAILURE, ADMIN_UPDATE_NOTIFICATIONS_REQUEST, ADMIN_UPDATE_NOTIFICATIONS_SUCCESS, MERCHANT_GET_NOTIFICATIONS_FAILURE, MERCHANT_GET_NOTIFICATIONS_REQUEST, MERCHANT_GET_NOTIFICATIONS_SUCCESS } from "../constants/notificationConstants";
import { logout } from "./userActions";


// ADMIN GET ALL NOTIFICATIONS
export const adminListNotifications = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_GET_NOTIFICATIONS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.get(
      `${baseUrl}/api/notifications/admin/notifications`,
      config
    );
console.log("datttta", data)
    dispatch({ type: ADMIN_GET_NOTIFICATIONS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_GET_NOTIFICATIONS_FAILURE,
      payload: message,
    });
  }
};



// ADMIN UPDATE NOTIFICATIONS
export const updateNotificationDetails =
  (payload, setRefresh) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_UPDATE_NOTIFICATIONS_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      const { data } = await axios.put(
        `${baseUrl}/api/notifications/admin/notifications/${payload._id}`,
        payload,
        config
      );
      console.log("dataaaa", data);
      dispatch({ type: ADMIN_UPDATE_NOTIFICATIONS_SUCCESS, payload: data });
      // dispatch({ type: ADMIN_EDIT_PRODUCT_SUCCESS, payload: data });
      toast.success("Successfully updated this notification", ToastObjects);
      setRefresh(prev=>!prev);
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      if (message === "Not authorized, no token found") {
        dispatch(logout());
      }
      dispatch({
        type: ADMIN_UPDATE_NOTIFICATIONS_FAILURE,
        payload: message,
      });
      toast.error(message, ToastObjects);
    }
  };

// MERCHANT GET ALL NOTIFICATIONS
export const merchantListNotifications = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MERCHANT_GET_NOTIFICATIONS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.get(
      `${baseUrl}/api/notifications/merchant/notifications`,
      config
    );
// console.log("datttta", data)
    dispatch({ type: MERCHANT_GET_NOTIFICATIONS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: MERCHANT_GET_NOTIFICATIONS_FAILURE,
      payload: message,
    });
  }
};

// ADMIN DELETE NOTIFICATION
// export const adminDeleteProduct = (productId) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: ADMIN_DELETE_PRODUCT_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo?.token}`,
//       },
//     };

//     await axios.delete(`${baseUrl}/api/notifications/admin/${productId}`, config);

//     dispatch({ type: ADMIN_DELETE_PRODUCT_SUCCESS });
//   } catch (error) {
//     const message =
//       error?.response && error?.response?.data?.message
//         ? error?.response?.data?.message
//         : error?.message;
//     if (message === "Not authorized, no token found") {
//       dispatch(logout());
//     }
//     dispatch({
//       type: ADMIN_DELETE_PRODUCT_FAILURE,
//       payload: message,
//     });
//   }
// };


