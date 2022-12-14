import {
  ADMIN_MERCHANT_LIST_SUCCESS,
  ADMIN_MERCHANT_LIST_FAILURE,
  ADMIN_MERCHANT_LIST_REQUEST,
  ADMIN_UPDATE_MERCHANT_STATUS_REQUEST,
  ADMIN_UPDATE_MERCHANT_STATUS_SUCCESS,
  ADMIN_UPDATE_MERCHANT_STATUS_FAILURE,
  ADMIN_ADD_MERCHANT_REQUEST,
  ADMIN_ADD_MERCHANT_SUCCESS,
  ADMIN_ADD_MERCHANT_FAILURE,
  ADMIN_DELETE_MERCHANT_REQUEST,
  ADMIN_DELETE_MERCHANT_SUCCESS,
  ADMIN_DELETE_MERCHANT_FAILURE,
  ADMIN_GET_MERCHANT_REQUEST,
  ADMIN_GET_MERCHANT_SUCCESS,
  ADMIN_GET_MERCHANT_FAILURE,
} from "../constants/merchantConstant";


//MERCHANTS
//ADMIN ADD PRODUCT
export const adminAddMerchantReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ADD_MERCHANT_REQUEST:
      return {
        loading: true,
      };

    case ADMIN_ADD_MERCHANT_SUCCESS:
      return {
        loading: false,
        success: true,
        merchant: action.payload,
      };

    case ADMIN_ADD_MERCHANT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//ADMIN GET ALL MERCHANTS
export const merchantListReducer = (state = { merchants: [] }, action) => {
  switch (action.type) {
    case ADMIN_MERCHANT_LIST_REQUEST:
      return {
        loading: true,
        merchants: [],
      };

    case ADMIN_MERCHANT_LIST_SUCCESS:
      return {
        loading: false,
        // page: action.payload.page,
        // pages: action.payload.pages,
        merchants: action.payload,
      };

    case ADMIN_MERCHANT_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


//GET MERCHANT BY ID
export const adminGetMerchantById = (state = { merchants: [] }, action) => {
  switch (action.type) {
    case ADMIN_GET_MERCHANT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_GET_MERCHANT_SUCCESS:
      return {
        loading: false,
        merchant: action.payload,
      };

    case ADMIN_GET_MERCHANT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//ADMIN UPDATE MERCHANT STATUS:
export const adminUpdateMerchantStatusReducer = (
  state = {  },
  action
) => {
  switch (action.type) {
    case ADMIN_UPDATE_MERCHANT_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_UPDATE_MERCHANT_STATUS_SUCCESS:
      return {
        loading: false,
        success: true,
        // merchant: action.payload,
      };

    case ADMIN_UPDATE_MERCHANT_STATUS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };


    default:
      return state;
  }
};

//ADMIN DELETE PRODUCTS
export const adminDeleteMerchantReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_DELETE_MERCHANT_REQUEST:
      return {
        loading: true,
      };

    case ADMIN_DELETE_MERCHANT_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case ADMIN_DELETE_MERCHANT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//SINGLE PRODUCT REDUCER
// export const productDetailsReducer = (
//   state = { product: { reviews: [] } },
//   action
// ) => {
//   switch (action.type) {
//     case PRODUCT_DETAILS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };

//     case PRODUCT_DETAILS_SUCCESS:
//       return {
//         loading: false,
//         product: action.payload,
//       };

//     case PRODUCT_DETAILS_FAILURE:
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };

//PRODUCT REVIEW REDUCER
// export const createProductReviewReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PRODUCT_REVIEW_REQUEST:
//       return {
//         loading: true,
//       };

//     case PRODUCT_REVIEW_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//       };

//     case PRODUCT_REVIEW_FAILURE:
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     case PRODUCT_REVIEW_RESET:
//       return {};

//     default:
//       return state;
//   }
// };



//ADMIN GET ALL PRODUCTS
// export const adminProductListReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case ADMIN_PRODUCT_LIST_REQUEST:
//       return {
//         loading: true,
//         products: [],
//       };

//     case ADMIN_PRODUCT_LIST_SUCCESS:
//       return {
//         loading: false,
//         products: action.payload,
//       };

//     case ADMIN_PRODUCT_LIST_FAILURE:
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };

//ADMIN EDIT PRODUCTS: THIS IS NOT DOING THE ACTUAL EDITING BUT JUST GETTING THE PRODUCT DETAILS TO POPULATE THE FIELDS
// export const adminEditProductReducer = (
//   state = { product: { reviews: [] } },
//   action
// ) => {
//   switch (action.type) {
//     case ADMIN_EDIT_PRODUCT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };

//     case ADMIN_EDIT_PRODUCT_SUCCESS:
//       return {
//         loading: false,
//         product: action.payload,
//       };

//     case ADMIN_EDIT_PRODUCT_FAILURE:
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };




