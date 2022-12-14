//CATEGORIES
import { ADMIN_ADD_CATEGORIES_FAILURE, ADMIN_ADD_CATEGORIES_REQUEST, ADMIN_ADD_CATEGORIES_RESET, ADMIN_ADD_CATEGORIES_SUCCESS, ADMIN_CATEGORIES_LIST_FAILURE, ADMIN_CATEGORIES_LIST_REQUEST, ADMIN_CATEGORIES_LIST_SUCCESS, ADMIN_DELETE_CATEGORY_FAILURE, ADMIN_DELETE_CATEGORY_REQUEST, ADMIN_DELETE_CATEGORY_SUCCESS, ADMIN_GET_CATEGORY_FAILURE, ADMIN_GET_CATEGORY_REQUEST, ADMIN_GET_CATEGORY_SUCCESS, ADMIN_UPDATE_CATEGORY_STATUS_FAILURE, ADMIN_UPDATE_CATEGORY_STATUS_REQUEST, ADMIN_UPDATE_CATEGORY_STATUS_SUCCESS } from "../constants/categoriesConstants";

//ADMIN ADD CATEGORIES
export const adminAddCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ADD_CATEGORIES_REQUEST:
      return {
        loading: true,
      };

    case ADMIN_ADD_CATEGORIES_SUCCESS:
      return {
        loading: false,
        success: true,
        categories: action.payload,
      };

    case ADMIN_ADD_CATEGORIES_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case ADMIN_ADD_CATEGORIES_RESET:
      return {};

    default:
      return state;
  }
};

//ADMIN GET ALL CATEGORIES
export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case ADMIN_CATEGORIES_LIST_REQUEST:
      return {
        loading: true,
        categories: [],
      };

    case ADMIN_CATEGORIES_LIST_SUCCESS:
      return {
        loading: false,
        // page: action.payload.page,
        // pages: action.payload.pages,
        categories: action.payload,
      };

    case ADMIN_CATEGORIES_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


//GET CATEGORY BY ID
export const adminGetCategoryById = (state = { category: [] }, action) => {
  switch (action.type) {
    case ADMIN_GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_GET_CATEGORY_SUCCESS:
      return {
        loading: false,
        category: action.payload,
      };

    case ADMIN_GET_CATEGORY_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//ADMIN UPDATE MERCHANT STATUS:
export const adminUpdateCategoryReducer = (
  state = {  },
  action
) => {
  switch (action.type) {
    case ADMIN_UPDATE_CATEGORY_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_UPDATE_CATEGORY_STATUS_SUCCESS:
      return {
        loading: false,
        success: true,
        // CATEGORY: action.payload,
      };

    case ADMIN_UPDATE_CATEGORY_STATUS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };


    default:
      return state;
  }
};

//ADMIN DELETE PRODUCTS
export const adminDeleteCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_DELETE_CATEGORY_REQUEST:
      return {
        loading: true,
      };

    case ADMIN_DELETE_CATEGORY_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case ADMIN_DELETE_CATEGORY_FAILURE:
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




