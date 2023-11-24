import categoryService from "../../services/category.service";

export const handleSelectAll = () => ({
  type: "HANDLE_SELECT_ALL",
});

export const handleCheckbox = (id) => ({
  type: "HANDLE_CHECKBOX",
  payload: id,
});

export const getAllCategory = () => {
  return async (dispatch) => {
    try {
      const data = await categoryService.getAllCategory();
      dispatch({ type: "GET_ALL_CATEGORY_SUCCESS", payload: data });
      console.log("getAllCategory");
    } catch (error) {
      dispatch({ type: "GET_ALL_CATEGORY_ERROR", payload: error.message });
    }
  };
};

export const addCategory = (category) => {
  return async (dispatch) => {
    try {
      await categoryService.addCategory(category);
      dispatch({ type: "ADD_CATEGORY_SUCCESS", payload: category });
    } catch (error) {
      dispatch({ type: "ADD_CATEGORY_ERROR", payload: error.message });
    }
  };
};

export const updateCategory = (category) => {
  return async (dispatch) => {
    try {
      await categoryService.updateCategory(category);
      dispatch({ type: "UPDATE_CATEGORY_SUCCESS", payload: category });
    } catch (error) {
      dispatch({ type: "UPDATE_CATEGORY_ERROR", payload: error.message });
    }
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      await categoryService.deleteCategory(id);
      dispatch({ type: "DELETE_CATEGORY_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_CATEGORY_ERROR", payload: error.message });
    }
  };
};

export const getCategoryById = (id) => {
  return async (dispatch) => {
    try {
      const data = await categoryService.getCategoryById(id);
      dispatch({ type: "GET_CATEGORY_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_CATEGORY_ERROR", payload: error.message });
    }
  };
};

// export const getBrandByName = (name) => {
//   return async (dispatch) => {
//     try {
//       const data = await brandService.getBrandByName(name);
//       dispatch({ type: "GET_BRAND_SUCCESS", payload: data });
//     } catch (error) {
//       dispatch({ type: "GET_BRAND_ERROR", payload: error.message });
//     }
//   };
// };
