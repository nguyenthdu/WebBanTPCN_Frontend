import getImageBase64 from "../../component/getImageBase64/GetImageBase64";
import foodFunctionService from "../../services/foodFunction.service";

// create actions of products
export const handleSelectAll = () => ({
  type: "HANDLE_SELECT_ALL",
});

export const handleCheckbox = (id) => ({
  type: "HANDLE_CHECKBOX",
  payload: id,
});

export const convertImagesToBase64 = (products) => {
  return products.map((product) => {
    const imageBase64 = getImageBase64(product.imageFiles);
    return { ...product, imageBase64 };
  });
};

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const data = await foodFunctionService.getFoodList();
      dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ITEMS_ERROR", payload: error.message });
    }
  };
};

export const getFoodListByPage = (page) => {
  return async (dispatch) => {
    try {
      const data = await foodFunctionService.getFoodListByPage(page);
      console.log("page", page);
      console.log("data", data);
      dispatch({ type: "GET_FOOD_LIST_BY_PAGE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_FOOD_LIST_BY_PAGE_ERROR", payload: error.message });
    }
  };
};

export const addItems = (item) => {
  return async (dispatch) => {
    try {
      await foodFunctionService.addFoodFunction(item);
      dispatch({ type: "ADD_ITEMS_SUCCESS", payload: item });
    } catch (error) {
      dispatch({ type: "ADD_ITEMS_ERROR", payload: error.message });
    }
  };
};

export const updateItems = (item) => {
  return async (dispatch) => {
    try {
      await foodFunctionService.updateFoodFunction(item);
      console.log("ok");
      dispatch({ type: "UPDATE_ITEMS_SUCCESS", payload: item });
    } catch (error) {
      dispatch({ type: "UPDATE_ITEMS_ERROR", payload: error.message });
    }
  };
};

export const deleteItems = (id) => {
  return async (dispatch) => {
    try {
      await foodFunctionService.deleteFoodFunction(id);
      console.log("id", id);
      dispatch({ type: "DELETE_ITEMS_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_ITEMS_ERROR", payload: error.message });
    }
  };
};

export const getItemsById = (id) => {
  return async (dispatch) => {
    try {
      const data = await foodFunctionService.getFood(id);
      dispatch({ type: "GET_ITEMS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_ITEMS_ERROR", payload: error.message });
    }
  };
};

export const getItemsByName = (name) => {
  return async (dispatch) => {
    try {
      const data = await foodFunctionService.getFoodByName(name);
      dispatch({ type: "GET_ITEMS_BY_NAME_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_ITEMS_BY_NAME_ERROR", payload: error.message });
    }
  };
};
