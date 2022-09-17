import axios from "axios";
import { toast } from "react-toastify";
import { ToastObjects } from "../../app/adminPortal/components/loadingError/toastObject";
import { baseUrl } from "../../app/services/requestUrl";
import { ADMIN_UPDATE_COMPANY_PROFILE_FAILURE, ADMIN_UPDATE_COMPANY_PROFILE_REQUEST, ADMIN_UPDATE_COMPANY_PROFILE_SUCCESS, GET_COMPANY_DETAILS_FAILURE, GET_COMPANY_DETAILS_REQUEST, GET_COMPANY_DETAILS_SUCCESS, GET_COMPANY_PROFILE_FAILURE, GET_COMPANY_PROFILE_REQUEST, GET_COMPANY_PROFILE_SUCCESS } from "../constants/companyProfileConstants";
import { logout } from "./userActions";



// COMPANY'S PROFILE ACTIONS
export const getCompanyProfileAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_COMPANY_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.get(
      `${baseUrl}/api/settings/company-profile`,
      config
    );

    dispatch({ type: GET_COMPANY_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
   
    dispatch({
      type: GET_COMPANY_PROFILE_FAILURE,
      payload: message,
    });
  }
};

// COMPANY'S PROFILE ACTIONS
export const getCompanyDetailsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_COMPANY_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `${baseUrl}/api/settings/company-details`,
    );

    dispatch({ type: GET_COMPANY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
   
    dispatch({
      type: GET_COMPANY_DETAILS_FAILURE,
      payload: message,
    });
  }
};


// UPDATE COMPANY'S PROFILE ACTIONS
export const updateCompanyProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_UPDATE_COMPANY_PROFILE_REQUEST,
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
      `${baseUrl}/api/settings/company-profile`,
      user,
      config
    );
    toast.success("Profile successfully updated", ToastObjects);

    dispatch({ type: ADMIN_UPDATE_COMPANY_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_UPDATE_COMPANY_PROFILE_FAILURE,
      payload: message,
    });
  }
};
