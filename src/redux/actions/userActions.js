import axios from "axios";
import { toast } from "react-toastify";
import { ToastObjects } from "../../app/adminPortal/components/loadingError/toastObject";
import { baseUrl } from "../../app/services/requestUrl";
import { ORDER_LIST_RESET } from "../constants/orderConstants";
import {
  ADMIN_DELETE_USER_STATUS_FAILURE,
  ADMIN_DELETE_USER_STATUS_REQUEST,
  ADMIN_DELETE_USER_STATUS_SUCCESS,
  ADMIN_REGISTER_USER_FAILURE,
  ADMIN_REGISTER_USER_REQUEST,
  ADMIN_REGISTER_USER_SUCCESS,
  ADMIN_UPDATE_PROFILE_SUCCESS,
  ADMIN_UPDATE_USER_STATUS_FAILURE,
  ADMIN_UPDATE_USER_STATUS_REQUEST,
  ADMIN_UPDATE_USER_STATUS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_RESET,
  GET_USERS_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_UPDATE,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAILURE,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../constants/userConstants";

// LOGIN ACTIONS
export const login = (email, password) => async (dispatch) => {
 

  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/api/users/login`,
      { email, password },
      config
    );

    // if (!data.isAdmin === true) {
    //   toast.error("You dont have admin access", ToastObjects);
    //   dispatch({ type: USER_LOGIN_FAILURE });
    // } else {
    //   dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    // }
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    window.location.reload();
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: message
    });
    toast.error(message, ToastObjects);
  }
};

//LOGOUT ACTION
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
  dispatch({
    type: USER_PROFILE_UPDATE,
  });
  dispatch({
    type: ORDER_LIST_RESET,
  });
  dispatch({
    type: GET_USERS_RESET,
  });
  //optional
  window.location.href = "/";
};

// REGISTER ACTIONS
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/api/users`,
      { name, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload:
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message,
    });
  }
};

// ADMIN CREATE NEW USER ACTIONS
export const adminCreateUser =
  (payload, setRefresh, setLoading) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_REGISTER_USER_REQUEST,
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

      let imgUrlsFromCloudinary;
      const formData = new FormData();

      formData.append("file", payload?.image);
      formData.append("upload_preset", "emmanuel");
      // console.log("image", image);
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/emy-commerce/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((response) => {
          const data = response.data;
          imgUrlsFromCloudinary = data.secure_url;
        });

        payload.image = imgUrlsFromCloudinary

      // const formPayload = {
      //   name,
      //   email,
      //   password,
      //   image: imgUrlsFromCloudinary,
      //   userType,
      // };

      const { data } = await axios.post(
        `${baseUrl}/api/users/admin/create-user`,
        payload,
        config
      );
      toast.success("User Successfully Added", ToastObjects);

      dispatch({ type: ADMIN_REGISTER_USER_SUCCESS, payload: data });
      // dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      setLoading(false);
      setRefresh((prev) => !prev);
    } catch (error) {
      setLoading(false);
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      if (message === "Not authorized, no token found") {
        dispatch(logout());
      }
      toast.error(message, ToastObjects);
      dispatch({
        type: ADMIN_REGISTER_USER_FAILURE,
        payload: message,
      });
    }
  };

// USER PROFILE ACTIONS
export const getUserProfile = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.get(`${baseUrl}/api/users/profile`, config);

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: USER_PROFILE_FAILURE,
      payload: message,
    });
  }
};

// UPDATE PROFILE ACTIONS
export const updateProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
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

    const { data } = await axios.put(`${baseUrl}/api/users/profile`, user, config);

    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAILURE,
      payload: message,
    });
  }
};

// UPDATE ADMIN PROFILE ACTIONS
export const updateAdminProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
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

    const { data } = await axios.put(`${baseUrl}/api/users/admin/profile`, user, config);
    toast.success("Profile successfully updated", ToastObjects);

    dispatch({ type: ADMIN_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAILURE,
      payload: message,
    });
  }
};

// UPDATE ADMIN PROFILE ACTIONS
export const updateUserStatus = (id, status, setRefresh) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_UPDATE_USER_STATUS_REQUEST,
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

    const { data } = await axios.put(`${baseUrl}/api/users/${id}`, {status}, config);
    toast.success("User status successfully updated", ToastObjects);

    dispatch({ type: ADMIN_UPDATE_USER_STATUS_SUCCESS, payload: data });
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
      type: ADMIN_UPDATE_USER_STATUS_FAILURE,
      payload: message,
    });
  }
};

// ADMIN DELETE PRODUCT
export const adminDeleteUserAction = (userId, setRefresh) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_DELETE_USER_STATUS_REQUEST,
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

    await axios.delete(`${baseUrl}/api/users/${userId}`, config);

    dispatch({ type: ADMIN_DELETE_USER_STATUS_SUCCESS });
    toast.success("User Successfully Deleted", ToastObjects)
    setRefresh(prev=>!prev)
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_DELETE_USER_STATUS_FAILURE,
      payload: message,
    });
    toast.error(message, ToastObjects)
  }
};



// GET ALL USERS ACTIONS
export const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${baseUrl}/api/users`, config);

    dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload:
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message,
    });
  }
};
