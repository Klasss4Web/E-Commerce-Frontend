import axios from "axios";
import { toast } from "react-toastify";
import { ToastObjects } from "../../app/adminPortal/components/loadingError/toastObject";
import { ORDER_LIST_RESET } from "../constants/orderConstants";
import {
  ADMIN_REGISTER_USER_FAILURE,
  ADMIN_REGISTER_USER_REQUEST,
  ADMIN_REGISTER_USER_SUCCESS,
  ADMIN_UPDATE_PROFILE_SUCCESS,
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
      "/api/users/login",
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
    window.location.href = "/";
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload:
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message,
    });
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
  window.location.href = "/login";
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
      "/api/users",
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
        "/api/users/admin/create-user",
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

    const { data } = await axios.get(`/api/users/profile`, config);

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

    const { data } = await axios.put(`/api/users/profile`, user, config);

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

    const { data } = await axios.put(`/api/users/admin/profile`, user, config);
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

    const { data } = await axios.get("/api/users", config);

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
