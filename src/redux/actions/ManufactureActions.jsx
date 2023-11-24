import manufacturerService from "../../services/manufacturer.service";

export const handleSelectAll = () => ({
  type: "HANDLE_SELECT_ALL",
});

export const handleCheckbox = (id) => ({
  type: "HANDLE_CHECKBOX",
  payload: id,
});

export const getAllManufacturer = () => {
  return async (dispatch) => {
    try {
      const data = await manufacturerService.getAllManufacturer();
      dispatch({ type: "GET_ALL_MANUFACTURER_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_ALL_MANUFACTURER_ERROR", payload: error.message });
    }
  };
};

export const addManufacturer = (manufacturer) => {
  return async (dispatch) => {
    try {
      await manufacturerService.addManufacturer(manufacturer);
      dispatch({ type: "ADD_MANUFACTURER_SUCCESS", payload: manufacturer });
    } catch (error) {
      dispatch({ type: "ADD_MANUFACTURER_ERROR", payload: error.message });
    }
  };
};

export const updateManufacturer = (manufacturer) => {
  return async (dispatch) => {
    try {
      await manufacturerService.updateManufacturer(manufacturer);
      dispatch({ type: "UPDATE_MANUFACTURER_SUCCESS", payload: manufacturer });
    } catch (error) {
      dispatch({ type: "UPDATE_MANUFACTURER_ERROR", payload: error.message });
    }
  };
};

export const deleteManufacturer = (id) => {
  return async (dispatch) => {
    try {
      await manufacturerService.deleteManufacturer(id);
      dispatch({ type: "DELETE_MANUFACTURER_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_MANUFACTURER_ERROR", payload: error.message });
    }
  };
};

export const getManufacturerById = (id) => {
  return async (dispatch) => {
    try {
      const data = await manufacturerService.getManufacturerById(id);
      dispatch({ type: "GET_MANUFACTURER_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_MANUFACTURER_ERROR", payload: error.message });
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
