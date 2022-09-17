import { ADMIN_UPDATE_COMPANY_PROFILE_FAILURE, ADMIN_UPDATE_COMPANY_PROFILE_REQUEST, ADMIN_UPDATE_COMPANY_PROFILE_SUCCESS, GET_COMPANY_DETAILS_FAILURE, GET_COMPANY_DETAILS_REQUEST, GET_COMPANY_DETAILS_SUCCESS, GET_COMPANY_PROFILE_FAILURE, GET_COMPANY_PROFILE_REQUEST, GET_COMPANY_PROFILE_SUCCESS } from "../constants/companyProfileConstants";

//GET COMPANY'S PROFILE
export const companyProfileReducer = (
  state = { companyDetails: {}},
  action
) => {
  switch (action.type) {
    case GET_COMPANY_PROFILE_REQUEST:
      return {
        loading: true,
      };

    case GET_COMPANY_PROFILE_SUCCESS:
      return {
        loading: false,
        companyDetails: action.payload,
      };

    case GET_COMPANY_PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//GET COMPANY'S PROFILE
export const companyDetailsReducer = (
  state = { companyDetails: {}},
  action
) => {
  switch (action.type) {
    case GET_COMPANY_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case GET_COMPANY_DETAILS_SUCCESS:
      return {
        loading: false,
        companyDetails: action.payload,
      };

    case GET_COMPANY_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//UPDATE COMPANY'S PROFILE
export const companyUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_UPDATE_COMPANY_PROFILE_REQUEST:
      return {
        loading: true,
      };

    case ADMIN_UPDATE_COMPANY_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        companyProfile: action.payload,
      };

    case ADMIN_UPDATE_COMPANY_PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
