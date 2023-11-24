import brandService from "../../services/brand.service";

export const handleSelectAll = () => ({
  type: "HANDLE_SELECT_ALL",
});

export const handleCheckbox = (id) => ({
  type: "HANDLE_CHECKBOX",
  payload: id,
});

export const getAllBrands = () => {
  return async (dispatch) => {
    try {
      const data = await brandService.getAllBrand();
      dispatch({ type: "GET_ALL_BRAND_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_ALL_BRAND_ERROR", payload: error.message });
    }
  };
};

export const addBrand = (brand) => {
  return async (dispatch) => {
    try {
      await brandService.addBrand(brand);
      dispatch({ type: "ADD_BRAND_SUCCESS", payload: brand });
    } catch (error) {
      dispatch({ type: "ADD_BRAND_ERROR", payload: error.message });
    }
  };
};

export const updateBrand = (brand) => {
  return async (dispatch) => {
    try {
      await brandService.updateBrand(brand);
      dispatch({ type: "UPDATE_BRAND_SUCCESS", payload: brand });
    } catch (error) {
      dispatch({ type: "UPDATE_BRAND_ERROR", payload: error.message });
    }
  };
};

export const deleteBrand = (id) => {
  return async (dispatch) => {
    try {
      await brandService.deleteBrand(id);
      dispatch({ type: "DELETE_BRAND_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_BRAND_ERROR", payload: error.message });
    }
  };
};

export const getBrandById = (id) => {
  return async (dispatch) => {
    try {
      const data = await brandService.getBrandById(id);
      dispatch({ type: "GET_BRAND_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_BRAND_ERROR", payload: error.message });
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
